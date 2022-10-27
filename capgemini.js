console.log("Fichier sur les conditionnelles en JS");

/*
	CTRL + SHIFT + /  => Pour commenter un bloc
*/

/*

if (ma condition) {
// réaction au test si vrai
} else if (ma nouvelle condition) {
// réaction au test else if si vrai
} else {
// code par défaut
}

ou ||
et &&

*/

/*switch*/

/*const prenom = "Yao";

switch (prenom) {
	case "Daniel" :
	console.log("Vous n\'êtes pas accepté")
	break

	case "Yao" :
	console.log("Vous êtes accepté")
	break

	default :
	console.log("Vous n\'êtes pas reconnu")
}*/

/* TERNAIRE */

/*const prenom  = "Guillaume"

prenom === "Guillaume" ? console.log("Cas si vrai") : console.log("Cas si faux")*/

/*TERNAIRE AVEC BOOLEEN*/

/*isLogged = true

isLogged ? console.log("logged") : console.log("Not logged")*/

/*PROMPT => permet de poser une question et récupérer la réponse
	const réponse  = prompt("Où avez-vous mal"?)
	la réponse saisie par l'utilisateur est sauvegardée dans reponse

	alert() permet d'afficher un message sans possibilité de réponse

*/

/* LES BOUCLES */

/*console.log("les boucles")*/

/*

for( initialisation; condition; incrémentation){
	instruction
}

*/

/*for (monNombre = 10; monNombre <= 90; monNombre += 3) {
	console.log("Le nombre est : " + monNombre)

	//interruption
	if (monNombre === 52) {
		break
	}
}

 //WHILE Risque de boucle infinie

const siegesDispo = 10
let siegesOqp = 0

while(siegesOqp <= siegesDispo){
	console.log("Entrez! Il reste " + (siegesDispo - siegesOqp) + " sièges.")
	siegesOqp ++
}*/

/*const limite = 199
let chiffre = 1

for (chiffre; chiffre <= limite; chiffre++) {

	if (chiffre % 3 === 0 && chiffre % 5 === 0) {
		console.log("Coucou Hello")

	} else {

		if (chiffre % 3 === 0) {
			console.log("Coucou")

		} else if (chiffre % 5 === 0){
			console.log("Hello")

		} else {
			console.log(chiffre)
		}
	}
}*/

const limite = 199
let chiffre = 1

let "3&5" = booleen(chiffre % 3 === 0 && chiffre % 5 === 0)
/*let "3" = booleen(chiffre % 3 === 0)
let "5" = booleen(chiffre % 5 === 0)*/

/*switch (chiffre){
	case "3&5":
		console.log("Coucou Hello")
		break

	case "3":
		console.log("Coucou")
		break

	case "5":
		console.log("Hello")
		break

	default :
		console.log(chiffre)

}*/


