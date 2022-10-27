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

function choixVainqueurManche(jeuOrdinateur, jeuUser){
    if (jeuOrdinateur === "pierre" && jeuUser === "ciseaux" || jeuOrdinateur === "feuille" && jeuUser === "pierre" || jeuOrdinateur === "ciseaux" && jeuUser === "feuille") {
        alert("Vainqueur : Ordinanteur")
    } else if(jeuOrdinateur === jeuUser){
        alert("Egalité")
    } else{
        alert("Vainqueur : Joueur")
    }
}

let nbreManchesJouees;
const manchesMax = 3;
for (let nbreManchesJouees = 0; nbreManchesJouees < manchesMax; nbreManchesJouees++) {
    
}