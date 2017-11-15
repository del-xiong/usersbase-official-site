$(document).ready(function () {
	//home banner
	$('#home-banner').flexslider({
		slideshow: true,
		smoothHeight: false,
		animationLoop: true,
		touch: true,
		directionNav: false,
		controlNav: true
	});
});

//按钮点击平滑滚动到锚点
function smooth(target){
	var $t = $('#' + target);
	var $w = $('html,body')
	$w.smoothScroll({position: $t.offset().top - 100})
}