<table>
    <thead>
        <tr>
            <th style="text-align:center"><a href="README.en.md">English (en)</a></th>
            <th style="text-align:center">日本語 (ja)</th>
        </tr>
    </thead>
</table>

**_より詳細なドキュメントは、[`Project:ガジェット/SidebarRecentChanges`](https://minecraftjapan.miraheze.org/wiki/Project:ガジェット/SidebarRecentChanges)を参照してください。_**

# Gadget-sidebarRecentChanges

サイドバー上に「最近の更新」を表示するための MediaWiki 用ガジェット（Gadget）。

## 概要

この[ガジェット (Gadget)](https://www.mediawiki.org/wiki/Extension:Gadgets)は、[Minecraft Japan Wiki](https://minecraftjapan.miraheze.org/wiki/Minecraft_Japan_Wiki) 上において、サイドバー上に「最近の更新」をリスト表示します。また、最近の更新をテンプレートとして表示するための機能も提供します。  
このガジェットは、かつて当ウィキが使用していたサービス「アットウィキ」のレイアウトを再現しています。  

## 使用方法

### ガジェット

このガジェットは、全利用者に対して既定で有効化されています。  
ログイン利用者は、[個人設定](https://minecraftjapan.miraheze.org/wiki/Special:Preferences#mw-prefsection-gadgets)で無効にすることもできます。

### Common.js

自身の [`common.js`](https://minecraftjapan.miraheze.org/wiki/Special:MyPage/common.js) にコードを配置することでもスクリプトを有効化することができます。  
また、他のページに配置されたスクリプトを `common.js` から読み込むこともできます。

```js
// URLを指定してスクリプトを読み込む
mw.loader.load(
    '//minecraftjapan.miraheze.org/w/index.php?title=MediaWiki:Gadget-JSprite.js&action=raw&ctype=text/javascript'
);
```

### その他の方法

[Greasemonkey](https://github.com/greasemonkey/greasemonkey)などのブラウザ拡張機能を使用して、ガジェット内の JavaScript コードを実行できる場合があります。  
詳細は Wikipedia の [`Wikipedia:User scripts`](https://en.wikipedia.org/wiki/Wikipedia:User_scripts) か、MediaWiki の [`Gadget kitchen`](https://www.mediawiki.org/wiki/Gadget_kitchen) をご確認ください。

## コントリビューター

_Wiki ページの[編集履歴](https://minecraftjapan.miraheze.org/wiki/MediaWiki:Gadget-JSprite.js?action=history)もご確認ください。_

-   [Urushibara](https://github.com/Urushibara) - [`User:Pneuma`](https://minecraftjapan.miraheze.org/wiki/User:Pneuma)
-   [shumm7](https://github.com/shumm7) - [`User:Shulmj`](https://minecraftjapan.miraheze.org/wiki/User:Shulmj)

## ライセンス

このリポジトリ内のすべてのコンテンツは、[クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 (CC-BY-NC-SA-4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja)で提供されています。これは Minecraft Japan Wiki で用いられているライセンスと同じです。

![クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 (CC-BY-NC-SA-4.0)](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.eu.svg 'CC-BY-NC-SA-4.0')
