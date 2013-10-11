$(function() {
	var nbPicture = $('#pic_box > *').length, nPix = 0, stepx = $(
	'#pic_box :first-child').width();




$("#prevSlide").click(function() {
if(nPix<nbPicture){
	nPix += 1;

	$(".slide_animate").animate({
		left : '+='+stepx+'px'
		
	}, 'slow');
} else {
	nPix = 0;

}
alert("click suivant: "+ nPix);
});


$("#nextSlide").click(function() {
if(0<nPix ){
	nPix -= 1;

	$(".slide_animate").animate({
		left : '-='+stepx+'px'
		
	}, 'slow');
} else {
	nPix = nbPicture;

}

});	
	
});