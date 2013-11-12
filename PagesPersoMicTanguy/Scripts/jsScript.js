$(function() {
		$("#tabs").tabs();
		$("#tabs-2").tabs();
		$("#accordion").accordion();
		// C'est ici que nous utiliserons Three.js pour la page d'accueil
		  initCubePicture();
		  animateCubePicture();
		//c' est ici que l' on creer le tableau Addition
		  var tableauAddition =new MathsTables("Tables d\' addition","terme1","+");
		$("#tableauAddition").html(tableauAddition.tHead(11)+tableauAddition.tBody());
		//c' est ici que l' on creer la table Euclide
		var tableauEuclide =new MathsTables("Table d\' Euclide","terme1","X");
		$("#tableauEuclide").html(tableauEuclide.tHead(11)+tableauEuclide.tBody());
		  
	});