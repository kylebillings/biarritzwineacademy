/* Panel Scripts: App
---------------------------------------------------------------------------------------------------- */
// @codekit-append 'sign-in/script-public.js';
// @codekit-append 'magic-link/script-public.js';
// @codekit-append 'sign-up/script-public.js';
/* Panel Scripts: Templates
---------------------------------------------------------------------------------------------------- */
// @codekit-append 'contact/script-public.js';
// @codekit-append 'newsletter/script-public.js';
/* Sign-in
---------------------------------------------------------------------------------------------------- */
$("#sign-in-form").on("submit",function(){return useremail=$("#user-email").val(),userpassword=$("#user-password").val(),panel_save(),$.ajax({type:"POST",url:leeflets_script.ajax_url,data:{useremail:useremail,userpassword:userpassword,action:"leeflets_sign_in",security:leeflets_script.security},success:function(e){
// If successful sign-in.
"success"==e&&(panel_save_success(),setTimeout(function(){page_load_out()},1200),setTimeout(function(){sessionStorage.setItem("leeflets-sign-in","true"),location.reload()},2500)),
// If failed sign-in.
"failed"==e&&panel_save_failed()}}),!1}),$(document).ready(function(){signin=sessionStorage.getItem("leeflets-sign-in"),"true"==signin&&(panel_open(),sessionStorage.removeItem("leeflets-sign-in"))}),
/* Contact Public
---------------------------------------------------------------------------------------------------- */
$("#panel-app-magic-link-public-form").on("submit",function(){return user_magic_email=$("#user-magic-email").val(),panel_save(),$.ajax({type:"POST",url:leeflets_script.ajax_url,data:{user_magic_email:user_magic_email,action:"leeflets_app_magic_link",security:leeflets_script.security},success:function(e){"success"==e&&($("#panel-app-magic-link-public-form").trigger("reset"),panel_save_success(),setTimeout(function(){panel_close()},1e3)),"failed"==e&&panel_save_failed()}}),!1}),
/* Sign-up
---------------------------------------------------------------------------------------------------- */
$("#sign-up-form").on("submit",function(){return useremail=$("#sign-up-account-email input").val(),userpassword=$("#sign-up-account-password input").val(),panel_save(),$.ajax({type:"POST",url:leeflets_script.ajax_url,data:{useremail:useremail,userpassword:userpassword,action:"leeflets_sign_up",security:leeflets_script.security},success:function(e){
// If successful sign-up.
"success"==e&&(panel_save_success(),setTimeout(function(){page_load_out()},1200),setTimeout(function(){sessionStorage.setItem("leeflets-sign-up","true"),location.reload()},2500)),
// If failed sign-up.
"failed"==e&&panel_save_failed()}}),!1}),$(function(){signup=sessionStorage.getItem("leeflets-sign-up"),"true"==signup&&(panel_open(),sessionStorage.removeItem("leeflets-sign-up"))}),
/* Contact Public
---------------------------------------------------------------------------------------------------- */
$("#contact-submit-form").on("submit",function(){return page_id=$("#page-id").val(),contact_name=$("#contact-submit-name").val(),contact_email=$("#contact-submit-email").val(),contact_subject=$("#contact-submit-subject").val(),contact_message=$("#contact-submit-message").val(),panel_save(),$.ajax({type:"POST",url:leeflets_script.ajax_url,data:{page_id:page_id,contact_name:contact_name,contact_email:contact_email,contact_subject:contact_subject,contact_message:contact_message,action:"leeflets_template_contact_public",security:leeflets_script.security},success:function(e){"success"==e&&($("#contact-submit-form").trigger("reset"),panel_save_success()),"failed"==e&&panel_save_failed()}}),!1}),
/* Newsletter Public
---------------------------------------------------------------------------------------------------- */
$("#newsletter-submit-form").on("submit",function(){return page_id=$("#page-id").val(),newsletter_subscriber_name=$("#newsletter-submit-name").val(),newsletter_subscriber_email=$("#newsletter-submit-email").val(),panel_save(),$.ajax({type:"POST",url:leeflets_script.ajax_url,data:{page_id:page_id,newsletter_subscriber_name:newsletter_subscriber_name,newsletter_subscriber_email:newsletter_subscriber_email,action:"leeflets_template_newsletter_public",security:leeflets_script.security},success:function(e){
// Parse the response.
responsedata=JSON.parse(e),
// If successful sign-in.
"success"==responsedata.response&&($("#newsletter-submit-form").trigger("reset"),panel_save_success()),
// If failed sign-in.
"failed"==responsedata.response&&panel_save_failed()}}),!1});