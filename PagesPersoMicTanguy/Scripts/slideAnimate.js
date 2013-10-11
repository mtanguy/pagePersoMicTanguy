$(function() {
	var nbPicture = $('#pic_box > *').length, nPix = 0, stepx = $(
	'#pic_box :first-child').width();

//alert(lengthx);


$("#prevSlide").click(function() {
if(nPix<nbPicture){
	nPix += 1;
	alert("**"+stepx);
	$(".slide_animate").animate({
		left : '+='+stepx+'px'
		
	}, 'slow');
} else {
	nPix = 0;
	alert("**nPix2");
}
alert("click suivant: "+ nPix);
});


$("#nextSlide").click(function() {
if(0<nPix ){
	nPix -= 1;
	alert("**"+stepx);
	$(".slide_animate").animate({
		left : '-='+stepx+'px'
		
	}, 'slow');
} else {
	nPix = nbPicture;
	alert("**nPix2");
}
alert("click suivant: "+ nPix);
});	
	
});