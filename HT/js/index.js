
$(function(){
	$('.anv_left dl:first-child').addClass('dl_background');
	$('.anv_left .nav_dl_a img').eq(0).attr('src','../images/会员信息1.png');
	
	$('.anv_left dl').click(function(){
		$('.anv_left .nav_dl_a img').eq(0).attr('src','../images/会员信息.png')
		$('.anv_left .nav_dl_a img').eq(1).attr('src','../images/产品管理.png')
		$('.anv_left .nav_dl_a img').eq(2).attr('src','../images/订单管理.png')
		$('.anv_left .nav_dl_a img').eq(3).attr('src','../images/标签管理.png')
		$('.anv_left .nav_dl_a img').eq(4).attr('src','../images/企业密钥.png')
		$('.anv_left .nav_dl_a img').eq(5).attr('src','../images/物流地址.png')
		$('.anv_left .nav_dl_a img').eq(6).attr('src','../images/年费购买.png')
	
		var $index = $('.anv_left dl').index(this);
		$('.anv_left dl').eq($index).addClass('dl_background').siblings().removeClass('dl_background');
		var $src = $('.nav_dl_span').eq($index).html();
		var src_str = "../images/" + $src + "1.png";
		$('.anv_left .nav_dl_a img').eq($index).attr('src',src_str)
		if($index == 4){
			$('.anv_left .nav_dl_a img').eq(4).attr('src','../images/企业密钥.png')
		};
		if( $index == 6){
			$('.anv_left .nav_dl_a img').eq(6).attr('src','../images/年费购买.png')
		}
	})
})

// ---------------------------------------------------------------------------------右上角用户名点击效果
$(function(){
	$('.click_i').click(function(){
		$('.samllbox').css('display')=='none'?$('.samllbox').css('display','block'):$('.samllbox').css('display','none')
	})
})


$(function(){
	$('.product_control_ul li a').eq(1).click(function(){
		var $index = $('.product_control_ul li a').index(this);
		$('#min_title_list li span').eq(2).html('产品维护')
	})
})

$(function(){

	$('.brand_display').click(function(){
		$('.brand_display').removeAttr('id','fenlei');
		var $index = $('.brand_display').index(this)
		console.log($index)
		$('.brand_display').eq($index).attr('id','fenlei');
		if( $index == 0){
			$('.brand_fenlei_box1').show()
			$('.brand_fenlei_box2').hide()
		}
		if( $index == 1){
			$('.brand_fenlei_box1').hide()
			$('.brand_fenlei_box2').show()
		}
	})
})








































