$(document).ready(function(){
	console.log(100/20);

	$('.btn-box').click(function(){
		$('.box').toggleClass('active');
	});

	$('.box').click(function(){
		$(this).toggleClass('active');
	});

	$('btn-slide').click(function(){
		$('.slide').toggleClass('active')
	});
	// some of the above is incorrect watch the recording

	$('.btn-mag').click(function(){
		$('.item').addClass('hide');
		$('.item.mag').removeClass('hide');
	});

	$('.btn-red').click(function(){
		$('.item').addClass('hide');
		$('.item.red').removeClass('hide');
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});           

});