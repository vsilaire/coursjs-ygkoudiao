let Douleur  = prompt("Où avez-vous mal").toLowerCase();

switch (Douleur) {
	//Abdomen
	case "abdomen" :
	alert("Appendicite")
	break

	//Gorge
	case "gorge" :
	let reponse = prompt("Fievre").toLowerCase() ? alert("Rhume") : alert("Mal de gorge")
	break

	//Aucune
	case "aucune" : 
	let reponse2 = prompt("Toux").toLowerCase()

	
	if (reponse2 == "oui") {
		let reponse21 = prompt("Fievre").toLowerCase() ? alert("Rhume") : alert("Refroidissement")
	} else if(reponse2 == "non"){
		alert("Rien")
	} else {
		alert("Hypochondriaque")
	}
	break

	default :
	alert("Hypochondriaque")
}

