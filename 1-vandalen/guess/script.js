"use strict";

window.onload = function(){
	
	 // Detta tal behöver bytas ut mot ett slumpat tal.
	

           	var upprak = 0;
    var  secret = Math.floor( Math.random() * 100)+1;
    console.log(secret);
		
	

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){

		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		// Plats för förändring.
		upprak++;
			if(isNaN(number)){
	    return[false, "Mata in ett nummer"];
    	}
		if(number > 100 || number < 0){
    return [false, "Talet är utanför intervallet 0 - 100"];
		}
		if(number < secret){
    return [false, "Det hemliga talet är högre!"];
		}
		if(number > secret){
	return [false,"Det hemliga talet är lägre!"];
		}
		if(number == secret){
	return[true, "Grattis du vann! Det hemliga talet var "+number+" och du behövde "+upprak+" gissningar för att hitta det."];
		}
		//Felsök
	if(upprak > 10){
	return ["Du har nått maximalt antal gissningar det hemliga talet var: " + secret];
	}
	};

	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};