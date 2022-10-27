function jeuOrdinateur() {
    let jeuOrdinateur;
    let choixOrdinateur = Math.random();
    if (choixOrdinateur < 0.34 ) {
        jeuOrdinateur = "pierre";
    } else if(choixOrdinateur > 0.34 && choixOrdinateur < 0.66){
        jeuOrdinateur = "feuille";
    } else {
        jeuOrdinateur = "ciseaux";
    }
    console.log(jeuOrdinateur);
    return jeuOrdinateur;
}

function jeuUser() {
    let jeuUser = prompt("Que jouez-vous? (pierre, feuille, ciseaux?)");
    console.log(jeuUser);
    return jeuUser;
}

let pointsOrdinateur = 0;
let pointsJoueur =0;
function choixVainqueurManche(jeuOrdinateur, jeuUser){
    
    if (jeuOrdinateur === "pierre" && jeuUser === "ciseaux" 
    || jeuOrdinateur === "feuille" && jeuUser === "pierre" 
    || jeuOrdinateur === "ciseaux" && jeuUser === "feuille"
    || jeuUser != "pierre" && jeuUser != "feuille" && jeuUser != "ciseaux"
    || jeuUser === "") {
        alert("Manche gagnée : Ordinateur")
        pointsOrdinateur ++;
        alert("Ordinateur : " + pointsOrdinateur + " - Joueur : " + pointsJoueur)

    } else if(jeuOrdinateur === jeuUser){
        alert("Egalité")
        alert("Ordinateur : " + pointsOrdinateur + " - Joueur : " + pointsJoueur)
    } else{
        alert("Manche gagnée : Joueur")
        pointsJoueur ++;
        alert("Ordinateur : " + pointsOrdinateur + " - Joueur : " + pointsJoueur)
    }
}

let nbreManchesJouees;
const manchesMax = 3;
for (let nbreManchesJouees = 0; nbreManchesJouees < manchesMax; nbreManchesJouees++) {
    choixVainqueurManche(jeuOrdinateur(), jeuUser());   
}
if (pointsJoueur > pointsOrdinateur) {
    alert("Vainqueur : JOUEUR, Félicitations!")
} else if (pointsJoueur < pointsOrdinateur) {
    alert("Vainqueur : ORDINATEUR, recommencez!")
}else {
    alert("EGALITE, recommencez!")
}