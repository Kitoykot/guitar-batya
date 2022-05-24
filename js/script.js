$(function(){

//Попапы	
	$('.instrument-1').click(function(){
		$('.popup-guitar-1').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-1').hide(100);
	});

	$('.instrument-2').click(function(){
		$('.popup-guitar-2').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-2').hide(100);
	});

	$('.instrument-3').click(function(){
		$('.popup-guitar-3').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-3').hide(100);
	});	

	$('.instrument-4').click(function(){
		$('.popup-guitar-4').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-4').hide(100);
	});	

	$('.instrument-5').click(function(){
		$('.popup-guitar-5').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-5').hide(100);
	});

	$('.instrument-6').click(function(){
		$('.popup-guitar-6').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-6').hide(100);
	});

	$('.instrument-7').click(function(){
		$('.popup-guitar-7').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-7').hide(100);
	});

	$('.instrument-8').click(function(){
		$('.popup-guitar-8').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-8').hide(100);
	});					

	$('.instrument-9').click(function(){
		$('.popup-guitar-9').show(300);
	});

	$('.cancel').click(function(){
		$('.popup-guitar-9').hide(100);
	});

//Галерея

	$('.small a').click(function(e){
		if($('.big img').attr('src')!==$(this).attr('href')) {
			$('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
		}
		return false;
	});

	$('.small a img').click(function(){
		$('.small a img').fadeTo(500,1).css({
			'border': 'none'
		});
		
		$(this).fadeTo(500,0.6).css({
			'border': '0.5px solid #CD265E'
		});
	});			
});