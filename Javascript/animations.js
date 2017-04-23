/*----Au survol de ma photo, l'utilisateur découvrira mes réseaux sociaux----*/

$('#photo').mouseenter(function() {
	

	$('#florian img').animate({
		opacity:0.5
	}, 300);
	$('#sliderReseaux ul').fadeIn('xslow');
});

$('#photo').mouseleave(function() {
	
	$('#florian img').animate({
		opacity:1
	}, 300);
	$('#sliderReseaux ul').fadeOut('fast');
});


/*-----Apparition du "Titre" (Nom + Prenom + Etudes) au début + translation du bouton de téléchargement-----*/

$(document).ready(function() {
	
	$('#nomPrenom ').animate({
		opacity: 1 
	}, 3000);
});






