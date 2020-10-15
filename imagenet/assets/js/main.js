$(document).ready(function(){
	console.log(100/20);

	$('.btn-life').click(function(){
		$('.item').addClass('hide');
		$('.item.life').removeClass('hide');
	});

	$('.btn-rel').click(function(){
		$('.item').addClass('hide');
		$('.item.rel').removeClass('hide');
	});

	$('.btn-war').click(function(){
		$('.item').addClass('hide');
		$('.item.war').removeClass('hide');
	});

	$('.btn-food').click(function(){
		$('.item').addClass('hide');
		$('.item.food').removeClass('hide');
	});

	$('.btn-myth').click(function(){
		$('.item').addClass('hide');
		$('.item.myth').removeClass('hide');
	});

	$('.btn-craft').click(function(){
		$('.item').addClass('hide');
		$('.item.craft').removeClass('hide');
	});

	$('.btn-grave').click(function(){
		$('.item').addClass('hide');
		$('.item.grave').removeClass('hide');
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});

	$('.btn').click(function(){
		$(this).toggleClass('active')
		$('.btn-reset').removeClass('active')
	})
	

});
