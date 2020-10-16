$(document).ready(function(){
	console.log(100/20);

	$('.btn-life').click(function(){
		$('.item').addClass('hide');
		$('.item.life').removeClass('hide');
		$('.dtext').addClass('hide');
		$('.d1text').removeClass('hide');
	});

	$('.btn-rel').click(function(){
		$('.item').addClass('hide');
		$('.item.rel').removeClass('hide');
		$('.dtext').addClass('hide');
		$('.d2text').removeClass('hide');
	});

	$('.btn-war').click(function(){
		$('.item').addClass('hide');
		$('.item.war').removeClass('hide');
		$('.dtext').addClass('hide');
		$('.d3text').removeClass('hide');
	});

	$('.btn-food').click(function(){
		$('.item').addClass('hide');
		$('.item.food').removeClass('hide');
		$('.dtext').addClass('hide');
		$('.d4text').removeClass('hide');
	});

	$('.btn-myth').click(function(){
		$('.item').addClass('hide');
		$('.item.myth').removeClass('hide');
		$('.dtext').addClass('hide');
		$('.d5text').removeClass('hide');
	});

	$('.btn-craft').click(function(){
		$('.item').addClass('hide');
		$('.item.craft').removeClass('hide');
		$('.dtext').addClass('hide');
		$('.d6text').removeClass('hide');
	});

	$('.btn-grave').click(function(){
		$('.item').addClass('hide');
		$('.item.grave').removeClass('hide');
		$('.dtext').addClass('hide');
		$('.d7text').removeClass('hide');
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
		$('.dtext').addClass('hide');
	});

	$('.btn').click(function(){
		$(this).toggleClass('active')
		$('.btn-reset').removeClass('active')
	})



});
