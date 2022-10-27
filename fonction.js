function afficherDeuxValeurs(param1, param2 = "Guillaume"){
    if (param1) {
        return param1 + " " + param2;
    }
    return "Il y a un problème avec les params!"
}

const reponseFonction = afficherDeuxValeurs("Coucou", 20);

console.log(reponseFonction);
///////////////////////////////////////////////////////////////

// Fonction flêchée

console.log("Fonction flêchée");
const afficherDeuxValeursV2 = (param1, param2 = "Guillaume") =>{
    if (param1) {
        return param1 + " " + param2;
    }
    return "Il y a un problème avec les params!" 
}

///////////////////////////////////////////////////////////////

// Fonction 3 params

console.log("Fonction 3 params");
const affichertroisValeursV3 = (param1, param2 = "prenom2", param3 = "prenom3") =>{
    if (param1) {
        return param1 + " " + param2 + " " + param3;
    }
    return "Il y a un problème avec les params!" 
}

let rep = affichertroisValeursV3("Hello");
console.log(rep);

////////////////////////////////////////////////////////////////

const sommeF = (nombre1 = 0, nombre2 =0, nombre3 = 0) =>
    nombre1 + nombre2 + nombre3;

console.log(sommeF(1, 2, 3));

////////////////////////////////////////////////////////////////

const confirm = () => true;

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Do you agree",
    () => {console.log("You agreed");}, 
    () => {console.log("You conceled execution");}
);
    
