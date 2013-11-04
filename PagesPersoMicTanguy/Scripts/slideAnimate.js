$(function() {
	
	var nbPicture = $('#pic_box > *').length ;//nb total d'image dans le conteneur  
	
	var stepx = $('#pic_box').width(); // pas definie par la largeur du conteneur d'images a slider

	var nPix = 0, clickbtnnext=0, clickbtnprevious=0;
alert(stepx);

$("#prevSlide").click(function() {
if(nPix<nbPicture){
	nPix += 1;
	clickbtnprevious=nPix;
	$(".slide_animate").animate({
		left : '+='+stepx+'px'
		
	}, 'slow');
} else {
	nPix = 0;

}

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