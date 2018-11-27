/* The Intro
---------------------------------------------------------------------------------------------------- */
/* Panel Close
---------------------------------------------------------------------------------------------------- */
function panel_close(){$("body").hasClass("panel-open")&&$("body").removeClass("panel-open").addClass("panel-closed")}
/* Panel Trigger
---------------------------------------------------------------------------------------------------- */
function panel_open(){$("body").removeClass("panel-closed").addClass("panel-open"),$(".panel").hasClass("fadeinright")||$(".panel").hasClass("fadeinleft")||$("#panel-menu").addClass("fadeinright")}function panel_open_rebase(){$("body").removeClass("panel-closed").addClass("panel-open"),$(".panel.fadeinright").removeClass("fadeinright").addClass("fadeout"),$(".panel.fadeoutleft:not(#panel-menu)").removeClass("fadeoutleft"),$("#panel-menu").removeClass("fadeinright")}
// Standard
/* Panel Forward
---------------------------------------------------------------------------------------------------- */
function panel_forward(e){$(".panel-back").removeClass("fadeout").addClass("fadein"),$("#panel-menu").hasClass("fadeinright")&&$("#panel-menu").removeClass("fadeinright").addClass("fadeoutleft"),$("#panel-menu").hasClass("fadeinleft")&&$("#panel-menu").removeClass("fadeinleft").addClass("fadeoutleft"),$(".panel.fadeinright:not(#panel-menu)").removeClass("fadeinright").addClass("fadeoutleft"),$(".panel.fadeinleft:not(#panel-menu)").removeClass("fadeinleft").addClass("fadeoutleft"),$(e).removeClass("fadeoutright").addClass("fadeinright")}
/* Panel Back
---------------------------------------------------------------------------------------------------- */
function panel_back(){
// If 
0<$(".panel.fadeoutleft:not(#panel-menu)").length?$(".panel.fadeoutleft:not(#panel-menu)").removeClass("fadeoutleft").addClass("fadeinleft"):($(".panel-back").removeClass("fadein").addClass("fadeout"),$(".panel.fadeinleft:not(#panel-menu)").removeClass("fadeinleft").addClass("fadeoutright"),$("#panel-menu").removeClass("fadeoutleft").addClass("fadeinleft")),$(".panel.fadeinright").removeClass("fadeinright").addClass("fadeoutright")}
/* Panel Saving
---------------------------------------------------------------------------------------------------- */
function panel_save(e){$(".panel-save").removeClass("fadeout").addClass("fadein"),"refresh-content"==e&&$("#panel-background").removeClass("background-saving-content-saved").addClass("background-saving-content")}function panel_save_success(e){"refresh-content"==e&&$(".template").load(location.href+" .template"),setTimeout(function(){$(".panel-save").removeClass("save-failed").addClass("save-success")},500),setTimeout(function(){$(".panel-save").removeClass("fadein save-failed save-success").addClass("fadeout"),"refresh-content"==e&&($(".in-view-detect").removeClass("in-view-detect").addClass("in-view-viewed"),$("#panel-background").removeClass("background-saving-content").addClass("background-saving-content-saved"))},1500)}function panel_save_failed(){setTimeout(function(){$(".panel-save").removeClass("save-success").addClass("save-failed")},500),setTimeout(function(){$(".panel-save").removeClass("fadein save-failed save-success").addClass("fadeout")},1500)}
/* User Email Validation
---------------------------------------------------------------------------------------------------- */
// Email validation.
function panel_validate_email(e){var a;return/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)}
/* User Password Validation
---------------------------------------------------------------------------------------------------- */
// Password validation.
function panel_validate_password(e){var a,t=/[a-zA-Z]/,n=/[0-9]/;return/^[^%\s]{6,}$/.test(e)&&t.test(e)&&n.test(e)}
/* Page Loading
---------------------------------------------------------------------------------------------------- */
function page_load_out(){$(".page-load").toggleClass("fadein fadeout-delay")}
/* Load Leeflets
---------------------------------------------------------------------------------------------------- */$("#panel").bind("scroll",function(){
// Scrolled
var e=$("#panel").scrollTop();
// Fades
$("#panel .panel-header").css("opacity",1-$("#panel").scrollTop()/500),$("#panel .panel.fadeinright .intro, #panel .panel.fadeinleft .intro").css("opacity",1-$("#panel").scrollTop()/500),
// Positions
$("#panel .panel-header").css("transform","translateY(+"+.8*e+"px)"),$("#panel .panel.fadeinright .intro, #panel .panel.fadeinleft .intro").css("transform","translateY(+"+.25*e+"px)")}),$(document).on("click",".panel-close, #panel .scroll",function(){return panel_close(),!1}),$(document).on("click",".panel-trigger",function(){return panel_open(),!1}),
// Rebase
$(document).on("click",".panel-trigger-rebase",function(){return panel_open_rebase(),!1}),$(document).on("click",".panel-forward",function(){var e;return panel_forward($(this.getAttribute("href"))),!1}),$(document).on("click",".panel-back",function(){return panel_back(),!1}),
/* Setting Expand/Collapse
---------------------------------------------------------------------------------------------------- */
$(document).on("click",".setting-toggle",function(){return group=$(this).closest(".setting-group"),$(".setting-group.expanded").not(group).toggleClass("collapsed expanded"),$(group).toggleClass("collapsed expanded"),!1}),
/* Cloning Setting Groups
---------------------------------------------------------------------------------------------------- */
$(document).on("keyup",".group-title",function(){var e=$(this).val();$(this).closest(".setting-group").find(".setting-group-title").empty().append(e)}),$(document).on("click",".add-setting-group",function(){function e(){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=0;t<5;t++)e+=a.charAt(Math.floor(Math.random()*a.length));return e}var a=$(this).data("group"),t=$("."+a),n=e();return $(t).removeClass("expanded").addClass("collapsed"),$("."+a).last().clone(!0,!0).removeClass("collapsed").addClass("expanded fadeinup").find(".setting-group-title").empty().append("New Link").end().find("input").val("").end().find(".image-upload").attr("id",n+"-wrapper").css("background-image","url()").end().find(".image-upload-field").attr("name",n).attr("id",n).end().find(".for-image").attr("for",n).end().find(".image-upload-hidden").attr("id",n+"-hidden").end().insertBefore("."+a+":first"),setTimeout(function(){$(".setting-group.fadeinup").removeClass("fadeinup")},1500),!1}),
/* Removing Setting Groups
---------------------------------------------------------------------------------------------------- */
$(document).on("click",".remove-setting-group",function(){var e=$(this).data("group-id");return $("#"+e).removeClass("fadeinup").addClass("fadeout"),setTimeout(function(){$("#"+e).remove()},500),!1}),
/* Setting Sort
---------------------------------------------------------------------------------------------------- */
$(document).ready(function(){$(".settings-sortable").sortable({items:".setting-sort",refreshPositions:!0,placeholder:"setting-sort-placeholder",tolerance:"pointer"})}),
/* No Spaces
---------------------------------------------------------------------------------------------------- */
$(".validate-leeflet-id input, .input-no-spaces-allowed").keypress(function(e){if(32===e.which)return!1}),$(".user-account-email input").keyup(function(){
// Variables.
useremail=$(this).val(),setting=".user-account-email input",helper=".user-account-email small",
// Validate the email.
$.ajax({type:"POST",url:leeflets_script.ajax_url,data:{useremail:useremail,action:"leeflets_useremail_validation",security:leeflets_script.security},success:function(e){
// If the email is taken.
"taken"==e&&($(helper).addClass("error").text('Sorry, but "'+useremail+'" is already registered.'),$(setting).removeClass("validated")),
// If the email is available.
"available"==e&&($(helper).removeClass("error").text("Awesome! You’re good to go."),$(setting).addClass("validated")),
// If the email isn't valid.
panel_validate_email(useremail)||($(helper).text("Hmmm, that doesn’t look right, keep typing."),$(setting).removeClass("validated")),
// If the email doesn't exist.
""==useremail&&($(helper).addClass("error").text("We need an email to get started."),$(setting).removeClass("validated"))}})}),$(".user-account-password input").keyup(function(){
// Variables.
userpassword=$(this).val(),setting=$(".user-account-password input"),helper=$(".user-account-password small"),
// Validate the password.
userpassword.length<8?($(helper).addClass("error").text("At least 8 characters please."),$(setting).removeClass("validated")):($(helper).removeClass("error").text("Awesome, what a great password."),$(setting).addClass("validated"))}),$(document).on("click",".load-leeflets",function(){var e=$(this).data("url");return page_load_out(),sessionStorage.setItem("leeflets-load-leeflets","true"),setTimeout(function(){window.location.href=e},500),!1}),$(function(){create=sessionStorage.getItem("leeflets-load-leeflets"),"true"==create&&(panel_open(),sessionStorage.removeItem("leeflets-load-leeflets"))}),
/* Load Leeflets No Panel
---------------------------------------------------------------------------------------------------- */
$(document).on("click",".load-leeflets-no-panel",function(){var e=$(this).data("url");return page_load_out(),setTimeout(function(){window.location.href=e},500),!1}),
/* Sign-out
---------------------------------------------------------------------------------------------------- */
$(".sign-out").on("click",function(){return page_load_out(),$.ajax({url:leeflets_script.ajax_url,data:{action:"leeflets_sign_out",security:leeflets_script.security},success:function(e){setTimeout(function(){location.reload()},500)}}),!1});