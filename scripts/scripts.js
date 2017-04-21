$(document).ready(function(){
	"use strict";

$("#js-readme").on("click", function(e){
    e.preventDefault();
    $(".is-hidden").slideToggle(800);
    $(this).text($(this).text() === "Read Less" ? "Read More" : "Read Less");
});
	
});