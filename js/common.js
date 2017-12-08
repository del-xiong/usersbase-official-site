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
	//用户信息提交
	// $('#send-submit').click(function (){
	// 	$.ajax({
	// 		url: '',
	// 		type: 'post',
	// 		data: $('#first-name,#company,#e-mail,#telephone,#more-content'),
	// 		dataType: 'html',
	// 		success: function(html) {
	// 		}
	// 	});
	// })
});

//按钮点击平滑滚动到锚点
function smooth(target){
	var $t = $('#' + target);
	var $w = $('html,body')
	$w.smoothScroll({position: $t.offset().top - 100})
}