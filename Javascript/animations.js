/*----Au survol de ma photo, l'utilisateur découvrira mes réseaux sociaux----*/

$('#florian').mouseenter(function() {
	

	$('#florian img').animate({
		opacity:0.5
	}, 300);
	$('#sliderReseaux ul').fadeIn('xslow');
	$('#sliderReseaux').animate({
		marginTop: '-4%'
	}, 	300);

});

$('#florian').mouseleave(function() {
	
	$('#florian img').animate({
		opacity:1
	}, 300);
	$('#sliderReseaux ul').fadeOut('fast');
	$('#sliderReseaux').animate({
		marginTop: '-1%',
	}, 300);
});


/*-----Apparition du "Titre" (Nom + Prenom + Etudes) au début + translation du bouton de téléchargement-----*/

$(document).ready(function() {
	
	$('#nomPrenom ').animate({
		opacity: 1 
	}, 3000);


});








