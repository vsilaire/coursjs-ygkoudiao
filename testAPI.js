let url = "https://swapi.dev/api/people/?page=2";

// Option fonction anonyme
(async() => {
	const contenu = await fetch(url);
const contenuJson = await contenu.json()
console.log(contenuJson)

const listeActeurs = contenuJson.results;
console.log(listeActeurs);
for (i in listeActeurs) {
    console.log((Number(i) + 1) + " " + listeActeurs[i].name)
}

})()