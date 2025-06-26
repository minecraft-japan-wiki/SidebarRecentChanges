/*
 * SidebarRecentChanges (MediaWiki Gadget)
 * アットウィキ風更新履歴
 * https://github.com/minecraft-japan-wiki/SidebarRecentChanges
 * 
 * Originally created by Pneuma on Minecraft Japan Wiki
 * https://minecraftjapan.miraheze.org/wiki/MediaWiki:Gadget-sidebarRecentChanges.js
 * 
 * 
 * Licensed under
 * Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
 * https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en
 */

const i18n = {
    'recent_changes': '最近の更新',
    'just_now': 'たった今',
    'no_update': '更新はありません'
};

/**********
 * Menu Template
 *  再更新時にエレメントを参照できるようにclassにsidebar-resentchangesを必ず入れること
 */
const templates = {
    "vector": {
        target: "#mw-panel",
        menu:
            '<nav id="p-${tabname}" class="vector-menu mw-portlet vector-menu-portal portal sidebar-resentchanges" aria-labelledby="p-${tabname}-label" role="navigation">' +
            '<h3 id="p-${tabname}-label" class="vector-menu-heading">' +
            '<span class="vector-menu-heading-label">${tabname}</span>' +
            '</h3>' +
            '<div class="vector-menu-content">' +
            '<ul class="vector-menu-content-list">' +
            '${contents}' +
            '</ul>' +
            '</div>' +
            '</nav>',
        content:
            '<li class="mw-list-item"><a href="${link}" title="${pagename}"><span>${pagename} (${timeago})</span></a></li>'
    },

    "vector-2022": {
        target: "#vector-main-menu",
        menu:
            '<div id="p-${tabname}" class="vector-menu mw-portlet mw-portlet-${tabname} sidebar-resentchanges">' +
            '<div class="vector-menu-heading">' +
            '${tabname}' +
            '</div>' +
            '<div class="vector-menu-content">' +
            '<ul class="vector-menu-content-list">' +
            '${contents}' +
            '</ul>' +
            '</div>' +
            '</div>',
        content:
            '<li class="mw-list-item"><a href="${link}"><span>${pagename} (${timeago})</span></a></li>'
    },

    "metrolook": {
        target: "#mw-panel",
        menu:
            '<div class="portal expanded sidebar-resentchanges" role="navigation" id="p-${tabname}" aria-labelledby="p-${tabname}-label">' +
            '<h5 id="p-${tabname}-label" tabindex="0"><a href="#" aria-haspopup="true" aria-controls="p-${tabname}-list" role="button"' +
            'aria-pressed="false" aria-expanded="true">${tabname}</a></h5>' +
            '<div class="body" style="display: block;">' +
            '<ul>${contents}</ul>' +
            '</div>' +
            '</div>',
        content:
            '<li><span title="${pagename}" class="plainlinks" style="font-size:80%"><a href="${link}">${pagename}</a> (${timeago})</span></li>'
    }
};

/***********
 * 設定
 */
const delay = 300000; //再更新までの遅延: 5分
var lastExecutedTime = 0;

/***********
 * main
*/
$(function () {

    append();

    lastExecutedTime = Date.now(); // 現在の時刻を記録

    //ブラウザのタブがアクティブになったとき発火するイベントを登録
    document.addEventListener("visibilitychange", onTabActivatedHandler);

});

// タブがアクティブになった時に実行する処理
function onTabActivatedHandler() {
    if (document.hidden) return;

    const currentTime = Date.now();
    if (currentTime - lastExecutedTime >= delay) {

        append();

        lastExecutedTime = currentTime; // 実行時間を更新
    }
}

// 更新履歴を追加する処理
function append() {
    /* get template */
    var template = templates[mw.config.get('skin')];
    if (!template) return;

    var $target = $(template.target);

    /* request */
    if ($target.length == 1) {
        var rootpath = mw.config.get('wgScriptPath');
        var articlePath = mw.config.get('wgArticlePath');

        $.ajax({
            url: rootpath + "/api.php",
            type: 'POST',
            data: {
                "action": "feedrecentchanges",
                "feedformat": "rss",
                "namespace": "0",
                "days": "7",
                "limit": "20",
                "hideminor": 1,
                "hidebots": 1,
                "hidelog": 1
            },
        }).done(function (result) {
            $(".sidebar-resentchanges").remove();

            // create list
            var items = result.querySelectorAll("item");
            var lines = [];
            items.forEach(function (item) {
                var title = item.querySelector('title');
                var pubDate = item.querySelector('pubDate');
                if (title && pubDate) {
                    var args = {
                        pagename: title.textContent,
                        link: encodeURI(title.textContent.replaceAll(" ", "_")).replace(/^(.*)$/, articlePath),
                        timeago: fromNow(new Date(pubDate.textContent)),
                    };
                    lines.push(
                        replacer(template.content, args)
                    );
                }
            });

            if (lines.length == 0) {
                var args = {
                    pagename: i18n.no_update,
                    link: '',
                    timeago: ''
                };
                lines.push(
                    replacer(template.content, args)
                );
            }

            // MediaWikiテンプレートとして使用できるように
            $(".recent-changes-js").html("").append(lines.join(""));

            // create menu html
            var fields = {
                tabname: i18n.recent_changes,
                contents: lines.slice(0, 10).join("")
            };
            var $html = $(replacer(template.menu, fields));
            $target.append($html);

            // binding click event
            if (typeof window.tgglr === 'function') {
                var $header = $(".vector-menu-heading," + replacer("#p-${tabname}-label", fields));
                $header.off("click").on("click", window.tgglr);
            }

        });
    }
}

// 現在時刻からの差をローカル言語で返す
function fromNow(date) {
    const nowDate = Date.now();
    const rft = new Intl.RelativeTimeFormat('ja', { numeric: "auto" });
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const WEEK = 7 * DAY;
    const YEAR = 365 * DAY;
    const MONTH = YEAR / 12;
    const intervals = [
        { ge: YEAR, divisor: YEAR, unit: 'year' },
        { ge: MONTH, divisor: MONTH, unit: 'month' },
        { ge: WEEK, divisor: WEEK, unit: 'week' },
        { ge: DAY, divisor: DAY, unit: 'day' },
        { ge: HOUR, divisor: HOUR, unit: 'hour' },
        { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
        { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
        { ge: 0, divisor: 1, text: i18n.just_now }
    ];
    const now = typeof nowDate === 'object' ? nowDate.getTime() : new Date(nowDate).getTime();
    const diff = now - (typeof date === 'object' ? date : new Date(date)).getTime();
    const diffAbs = Math.abs(diff);
    for (var i = 0; i < intervals.length; i++) {
        var interval = intervals[i];
        if (diffAbs >= interval.ge) {
            const x = Math.round(Math.abs(diff) / interval.divisor);
            const isFuture = diff < 0;
            return interval.unit ? rft.format(isFuture ? x : -x, interval.unit) : interval.text;
        }
    }
}

//テンプレート文字列に引数の文字列を埋め込んで返す
function replacer(template, fields) {
    var output = template + "";
    var keys = Object.keys(fields);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var pattern = '(\\$\\{' + key + '\\})';
        output = output.replaceAll(new RegExp(pattern, "g"), fields[key]);
    }
    return output;
}