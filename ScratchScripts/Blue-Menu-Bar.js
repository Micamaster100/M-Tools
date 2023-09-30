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

     addGlobalStyle('.menu-bar_menu-bar_JcuHF{ background-color: #4d97ff !important; }');


 })();
