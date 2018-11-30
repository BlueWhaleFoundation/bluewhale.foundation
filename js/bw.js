$(function(){
  $(".nav_menu").click(function(){
    var bwScrollPosition = $($(this).attr("href")).offset().top;

		$("html, body").animate({scrollTop:bwScrollPosition},650);
	});
});