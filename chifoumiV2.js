const manchesMax = 3;
alert("CHIFOUMI - Jeu en " + manchesMax + " manches. Bonne chance!")
///////////////////////////////////////////////////////////////////////////////////////////////
function jeuOrdinateur(intervalle = Math.random()) {
    let jeuOrdinateur;
    if (intervalle < 0.34 ) {
        jeuOrdinateur = "pierre";
    } else if(intervalle >= 0.34 && intervalle < 0.66){
        jeuOrdinateur = "feuille";
    } else {
        jeuOrdinateur = "ciseaux";
    }
    // Décommenter pour tests => Affiche jeu ordinateur
    // console.log(jeuOrdinateur);
    return jeuOrdinateur;
}
//////////////////////////////////////////////////////////////////////////////////////////////
function jeuUser() {
    let jeuUser = prompt("Que jouez-vous? (pierre, feuille, ciseaux?)").toLowerCase();
    console.log(jeuUser);
    return jeuUser;
}
//////////////////////////////////////////////////////////////////////////////////////////////
let pointsOrdinateur = 0;
let pointsJoueur = 0;
let pointsEgalite = 0;
function choixVainqueurManche(jeuOrdinateur, jeuUser){
    alert("Ordinateur joue : " + jeuOrdinateur + " - " + "Challenger joue : " + jeuUser);
    // Victoires Ordinateur
    if (jeuOrdinateur === "pierre" && jeuUser === "ciseaux" 
    || jeuOrdinateur === "feuille" && jeuUser === "pierre" 
    || jeuOrdinateur === "ciseaux" && jeuUser === "feuille"){
        alert("Manche gagnée : Ordinateur")
        pointsOrdinateur ++;
        alert("Ordinateur : " + pointsOrdinateur + " - Joueur : " + pointsJoueur + " - Egalité : " + pointsEgalite)
    ////Pénalités triche ou vocabulaire user
    } else if(jeuUser != "pierre" && jeuUser != "feuille" && jeuUser != "ciseaux"){
        alert("Jeu non valide - Manche gagnée : Ordinateur")
        pointsOrdinateur ++;
        alert("Ordinateur : " + pointsOrdinateur + " - Joueur : " + pointsJoueur + " - Egalité : " + pointsEgalite)
    // Egalité
    } else if(jeuOrdinateur === jeuUser){
        alert("Egalité")
        pointsEgalite ++;
        alert("Ordinateur : " + pointsOrdinateur + " - Joueur : " + pointsJoueur + " - Egalité : " + pointsEgalite)
    // Victoire User
    } else{
        alert("Manche gagnée : Joueur")
        pointsJoueur ++;
        alert("Ordinateur : " + pointsOrdinateur + " - Joueur : " + pointsJoueur + " - Egalité : " + pointsEgalite)
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
function chifoumi3Manches(){
    let nbreManchesJouees;
    for (nbreManchesJouees = 0; nbreManchesJouees < manchesMax; nbreManchesJouees++) {
        choixVainqueurManche(jeuOrdinateur(), jeuUser());
        alert("Manches restantes : " + (manchesMax - (nbreManchesJouees +1)));   
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    if (pointsJoueur > pointsOrdinateur) {
        alert("Vainqueur : JOUEUR, Félicitations!")
    } else if (pointsJoueur < pointsOrdinateur) {
        alert("Vainqueur : ORDINATEUR, réessayez!")
    }else {
        alert("EGALITE, Oups, réessayez!")
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
chifoumi3Manches();