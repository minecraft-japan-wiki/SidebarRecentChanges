<table>
	<thead>
    	<tr>
      		<th style="text-align:center">English (en)</th>
      		<th style="text-align:center"><a href="README.md">日本語 (ja)</a></th>
    	</tr>
  	</thead>
</table>

**_For detailed documentation, see [`Project:ガジェット/SidebarRecentChanges`](https://minecraftjapan.miraheze.org/wiki/Project:ガジェット/SidebarRecentChanges)._**

# Gadget-sidebarRecentChanges

MediaWiki Gadget for displaying recent changes in the sidebar.

## Introduction

This [Gadget](https://www.mediawiki.org/wiki/Extension:Gadgets) displays a list of recent changes on the sidebar of the [Minecraft Japan Wiki](https://minecraftjapan.miraheze.org/wiki/Minecraft_Japan_Wiki) (MJW) via JavaScript. Also, it provides the functionality to display recent changes on articles as a template.
This Gadget recreates the layout of "@wiki", the wikifarm that previously hosted this wiki.

## Usage

### Gadget

This gadget is enabled by default on the Minecraft Japan Wiki.  
Logged-in users can disable it in [Preferences](https://minecraftjapan.miraheze.org/wiki/Special:Preferences#mw-prefsection-gadgets).

### Common.js

You can also enable scripts by placing the code in your own [`common.js`](https://minecraftjapan.miraheze.org/wiki/Special:MyPage/common.js).  
Or you can use scripts placed on other pages by loading them from `common.js`.

```js
// Load a script by specifying a page URL
mw.loader.load(
    '//minecraftjapan.miraheze.org/w/index.php?title=MediaWiki:Gadget-sidebarRecentChanges.js&action=raw&ctype=text/javascript'
);
```

### Other options

Your browser may be able to execute JavaScript code in Gadgets via Browser Extensions; e.g.[Greasemonkey](https://github.com/greasemonkey/greasemonkey).  
See also "[`Wikipedia:User scripts`](https://en.wikipedia.org/wiki/Wikipedia:User_scripts)" on Wikipedia, or "[`Gadget kitchen`](https://www.mediawiki.org/wiki/Gadget_kitchen)" on MediaWiki.

## Contributions

_Please also check the [edit history](https://minecraftjapan.miraheze.org/wiki/MediaWiki:Gadget-sidebarRecentChanges.js?action=history) of the wiki page._

-   [Urushibara](https://github.com/Urushibara) - [`User:Pneuma`](https://minecraftjapan.miraheze.org/wiki/User:Pneuma)
-   [shumm7](https://github.com/shumm7) - [`User:Shulmj`](https://minecraftjapan.miraheze.org/wiki/User:Shulmj)

## License

All content in this repository is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA-4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en), the same license as the Minecraft Japan Wiki.

![Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC-BY-NC-SA-4.0)](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.eu.svg 'CC-BY-NC-SA-4.0')
