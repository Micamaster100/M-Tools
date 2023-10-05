/*

 ███╗   ███╗   ████████╗ ██████╗  ██████╗ ██╗     ███████╗
 ████╗ ████║   ╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝
 ██╔████╔██║█████╗██║   ██║   ██║██║   ██║██║     ███████╗
 ██║╚██╔╝██║╚════╝██║   ██║   ██║██║   ██║██║     ╚════██║
 ██║ ╚═╝ ██║      ██║   ╚██████╔╝╚██████╔╝███████╗███████║
 ╚═╝     ╚═╝      ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
╚═════════════════════════════════════════════════════════╝

ScratchScripts Hub:
scratch.mit.edu/projects/802666392
Created by @Micamaster100

*/

(function() {
    'use strict';
function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

     addGlobalStyle('#navigation{ background-color: #4d97ff !important; }'); // Main Page
 })();

alert("🔵 - Blue has been brought back!");
