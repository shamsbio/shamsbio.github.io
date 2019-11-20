$(function() {
 $(".autoslideshow").responsiveSlides();
 });
 $(".autoslideshow").responsiveSlides({
 auto: true, 
 speed: 800, 
 timeout: 2000, 
 pager: false, 
 nav: false, 
 random: false, 
 pause: false, 
 pauseControls: true, 
 prevText: "Previous", 
 nextText: "Next", 
 maxwidth: "", 
 navContainer: "", 
 manualControls: "", 
 namespace: "autoslideshow", 
 before: function(){}, 
 after: function(){} 
});