/**
 * Entry script.
 * 
 * This is the enty script for this application. It only required the jquery
 * library (tested with 1.8.2). It loads all required .js files from the web
 * server.
 * 
 * This script could be replaced with a minified version of the other script
 * files, later.
 * 
 * 
 * @author: Sven Walter <sven.walter@wltr.eu>
 * @since: 14 Nov 2012
 * @url: https://github.com/svenwltr/wltr-live-quiz
 * 
 */

function require(name) {
	var url = "js/wltr.quiz." + name + ".js";
	
	$.ajax({
		  url: url,
		  dataType: "script",
		  async: false, /* scripts must be loaded one by one */
	});
}

/* timeout, so the page don't block and the loading text will be displayed
 * faster. Not sure if this speed up is worth it. */
setTimeout(function(){
	require("base");
	require("event");
	require("loader");
	require("document");
	require("socket");
}, 100);