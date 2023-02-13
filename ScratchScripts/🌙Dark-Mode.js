/*
                                                                     
 ███╗   ███╗   ████████╗ ██████╗  ██████╗ ██╗     ███████╗
 ████╗ ████║   ╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝
 ██╔████╔██║█████╗██║   ██║   ██║██║   ██║██║     ███████╗
 ██║╚██╔╝██║╚════╝██║   ██║   ██║██║   ██║██║     ╚════██║
 ██║ ╚═╝ ██║      ██║   ╚██████╔╝╚██████╔╝███████╗███████║
 ╚═╝     ╚═╝      ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
╚═════════════════════════════════════════════════════════╝
Brought to you by @Micamaster100!

Dark Mode v0.0.2

INSTRUCTIONS:
1. Copy this code and paste it to your browser's console. First inspect the page by pressing f12 , [ctrl] + [shift] + [I], or access it through your browser.
2. Paste it to your console.
3. Done! Enjoy your new look!

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

    //editor
    addGlobalStyle('.menu-bar_menu-bar_JcuHF{ background-color: #333333 !important; }');
    addGlobalStyle('.gui_body-wrapper_-N0sA{ background-color: #292929 !important; }');
    addGlobalStyle('.blocklySvg{ background-color: #292929 !important; }');
    addGlobalStyle('.asset-panel_wrapper_366X0 { background-color: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.scratchCategoryMenu { background-color: #292929; color: #FFFFFF; !important; }');
    addGlobalStyle('.scratchCategoryMenuItem.categorySelected { background-color: #333333; color: #FFFFFF; !important; }');
    addGlobalStyle('.blocklyToolboxDiv{ background-color: #292929 !important; }');

    addGlobalStyle('.blocklyFlyoutBackground{ fill: #333333 !important; }');
    addGlobalStyle('.blocklyFlyoutLabelText{ fill: #FFFFFF !important; }');

    addGlobalStyle('.sprite-info_sprite-info_3EyZh { background-color: #333333; color: #FFFFFF; !important; }');
    addGlobalStyle('.sprite-selector_sprite-selector_2KgCX { background-color: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.stage-selector_header_2GVr1 { background-color: #333333; color: #FFFFFF; !important; }');
    addGlobalStyle('.stage-selector_stage-selector_3oWOr { background-color: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.blocklyBlockBackground{ fill: #333333; stroke-width:2; !important; }');
    addGlobalStyle('.blocklyText{ color: white; font-weight: bold; !important; }');
    addGlobalStyle('.blocklyDropDownDiv{ background: #333333; !important; }');

    addGlobalStyle('.backpack_backpack-header_6ltCS { background: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.input_input-form_l9eYg { background-color: #292929; color: #FFFFFF; !important; }');

    addGlobalStyle('.Popover-body { background: #333333; color: #FFFFFF; border: 1px solid #292929; !important;}');
    addGlobalStyle('.Popover-tipShape { fill: #333333; stroke: #292929; !important;');

    addGlobalStyle('.gui_tab_27Unf.gui_is-selected_sHAiu { background-color: #333333;!important; }');
    addGlobalStyle('.gui_tab_27Unf { background-color: #292929;!important; }');

    addGlobalStyle('.selector_wrapper_8_BHs { background: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.blocklyScrollbarHandle { fill: #333333AA; !important;');

    //player
    addGlobalStyle('.loader_background_2DPrW{ background-color: #333333 !important; }');
    addGlobalStyle('.inplace-textarea{ background-color: #333333 !important; }');
    addGlobalStyle('.preview .project-description{ background-color: #333333; color: #FFFFFF; !important; }');
    addGlobalStyle('.project-title{ color: #FFFFFF !important; }');
    addGlobalStyle('.inplace-textarea{ color: #FFFFFF !important; }');
    addGlobalStyle('.inplace-input{ background-color: #333333 !important; }');
    addGlobalStyle('.inplace-input{ color: #FFFFFF !important; }');

    addGlobalStyle('.comment .comment-body .comment-bubble{ background-color: #333333 !important; }');
    addGlobalStyle('.comment .comment-body .comment-bubble::before{ background-color: #333333 !important; }');
    addGlobalStyle('.comment .comment-body .comment-bubble{ color: #FFFFFF !important; }');
    addGlobalStyle('.preview .project-lower-container{ background-color: #292929 !important; }');
    addGlobalStyle('.preview .comments-header{ color: #FFFFFF !important; }');
    addGlobalStyle('.preview .comments-header h4{ color: #FFFFFF !important; }');
    addGlobalStyle('.compose-comment .compose-bottom-row .compose-limit{ color: #FFFFFF !important; }');
    addGlobalStyle('.comment .action-list{ color: #FFFFFF !important; }');
    addGlobalStyle('.replies.collapsed > .comment:last-of-type::after{ background: linear-gradient(rgba(29, 29, 29, 0), #292929); }');

    //website
    addGlobalStyle('#view{ background-color: #292929 !important; }');
    addGlobalStyle('#footer{ background-color: #333333 !important; }');

    addGlobalStyle('.box{ border: 0px}');
    addGlobalStyle('.box{ background-color: #333333 !important; }');
    addGlobalStyle('.box .box-header{ border-top: 0px; border-bottom: 0px; background-color: #3d3d3d !important; }');
    addGlobalStyle('.box .box-content{ background-color: #333333 !important; }');
    addGlobalStyle('.activity-li{ color: #9BA8BA !important; }');
    addGlobalStyle('.news li:nth-child(2n){ border-top: 0px; border-bottom: 0px; !important; }');
    addGlobalStyle('.box .box-header h4, .box .box-header h5{ color: #FFFFFF !important; }');

    addGlobalStyle('#body{ color: #FFFFFF !important; }');
    addGlobalStyle('#body{ text-shadow: none !important; }');


})();
