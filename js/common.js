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
	$('#send-submit').click(function (){
		if($('#text-test').validator('isFormValid')){
			var userText = {
				subject: '',
				text: $('#more-content').val()
			}
			userText.subject = '姓名:'+$('#first-name').val() + ';公司:' + $('#company').val() + ';邮箱:' + $('#e-mail').val() + ';电话:' +$('#telephone').val()
			$.ajax({
				url: 'http://api.fsdress.com/feedback_api.php',
				type: 'get',
				data: userText,
				dataType: 'jsonp',
				success: function(html) {
					eval("(" + html + ")")
					if(html = "1"){
						$('#first-name,#company,#e-mail,#telephone,#more-content').val('')
						$('.success-submit').show();
						setTimeout(function (){
							$('.success-submit').hide();
						},4000)
					}
				}
			});
		}
	})
	if ($.AMUI && $.AMUI.validator) {
    	$.AMUI.validator.patterns.mobile = /^\s*1\d{10}\s*$/;
  	}
	$('#text-test').validator({
	    onValid: function(validity) {
	    	$(validity.field).closest('.am-form-group').find('.am-alert').hide();
	    },
	    onInValid: function(validity) {
	      var $field = $(validity.field);
	      var $group = $field.closest('.am-form-group');
	      var $alert = $group.find('.am-alert');
	      var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
	      if (!$alert.length) {
	        $alert = $('<div class="am-alert am-alert-danger"></div>').hide().appendTo($group);
	      }
	      $alert.html(msg).show();
	    }
  	});
});

//按钮点击平滑滚动到锚点
function smooth(target){
	var $t = $('#' + target);
	var $w = $('html,body')
	$w.smoothScroll({position: $t.offset().top - 100})
}