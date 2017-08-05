function downma() {
	//美西二维码
	var oHeader_innerLeft_2 = document.getElementsByClassName('header_innerLeft_2')[0];
	var oDownload_app_1 = document.getElementsByClassName('download_app_1')[0];
	oHeader_innerLeft_2.onmouseover = function() {
		oDownload_app_1.style.display = 'block'
	}
	oHeader_innerLeft_2.onmouseout = function() {
		oDownload_app_1.style.display = 'none'
	}
	$('.float_l ul li a').mouseover(function() {
		$('this').css('color', 'white')
	})
	$('.float_l ul li a').mouseout(function() {
		$('this').css('color', '')
	})

	$(".partner_01").mouseover(function() {
		$(".partner_01 a").css('background', 'url(img/footer_h.png)');
		$(".partner_01 a").css('background-position', '0 0')
	})
	$(".partner_01").mouseout(function() {
		$(".partner_01 a").css('background', 'url(img/partner_icon.png)');
		$(".partner_01 a").css('background-position', '0 0')
	})

	$(".partner_02").mouseover(function() {
		$(".partner_02 a").css('background', 'url(img/footer.png) 0 0');

	})
	$(".partner_02").mouseout(function() {
		$(".partner_02 a").css('background', 'url(img/footer.png) 0 -24px');

	})

	$(".partner_03").mouseover(function() {
		$(".partner_03 a span").css('background', 'url(img/footer_h.png) -210px 0px');
		$(".float_l").css('color', 'white')

	})
	$(".partner_03").mouseout(function() {
		$(".partner_03 a span").css('background', 'url(img/partner_icon.png) -199px 0px')
		$(".float_l").css('color', '')
	})

	$(".partner_05").mouseover(function() {
		$(".partner_05 a").css('background', 'url(img/footer_h.png) -66px 0px');

	})
	$(".partner_05").mouseout(function() {
		$(".partner_05 a").css('background', 'url(img/partner_icon.png) -66px 0px')
	})

	$(".partner_04").mouseover(function() {
		$(".partner_04 a").css('background', 'url(img/footer_h.png) -127px 0px');

	})
	$(".partner_04").mouseout(function() {
		$(".partner_04 a").css('background', 'url(img/partner_icon.png) -127px 0px')
	})

	$(".partner_06").mouseover(function() {
		$(".partner_06 a").css('background', 'url(img/footer.png) -77px 0');

	})
	$(".partner_06").mouseout(function() {
		$(".partner_06 a").css('background', 'url(img/footer.png) -77px -23px');

	})
}