/*----Au survol de ma photo, l'utilisateur découvrira mes réseaux sociaux----*/

$('#photo').mouseenter(function() {
	
	/*----diminution de l'opacité de mon image au survol---*/
	$('#florian img').stop(true).animate({

		opacity:0.5

	}, 300);

	/*----Apparition et translation du slider-----*/
	$('#sliderReseaux ul').stop(true).fadeIn('xslow');

	$('#sliderReseaux').stop(true).animate({

		marginTop: '-4%'

	}, 400);

});

/*---Lorsque la souris quitte la photo, on reviens à l'état initial-------*/

$('#photo').mouseleave(function() {
	
	$('#florian img').stop(true).animate({

		opacity:1

	}, 300);

	/*----Disparition et translation du slider----*/
	$('#sliderReseaux ul').stop(true).fadeOut('fast');

	$("#sliderReseaux").stop(true).animate({

		marginTop: '-1%'

	}, 200);
});


/*-----Apparition du "Titre" (Nom + Prenom + Etudes) au début + translation du bouton de téléchargement-----*/

$(document).ready(function() {
	
	$('#nomPrenom ').animate({
		opacity: 1 
	}, 1500);
});


/*----Apparition et disparition des infos de mes projets au survol----*/

$(".elementsProjet").mouseenter(function() {

	/*---Récupération de l'id du div enfant de l'élément actuellement survolé----*/
	var divAfficher = $(this).children('div').attr('id');

	$("#"+divAfficher).fadeIn('slow')


});

$(".elementsProjet").mouseleave(function() {

	var divDisparaitre = $(this).children('div').attr('id');

	$("#"+divDisparaitre).stop(true).fadeOut('10');
});





