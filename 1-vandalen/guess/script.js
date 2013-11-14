"use strict";

window.onload = function(){
	
	 // Detta tal behöver bytas ut mot ett slumpat tal.
	var upprak;

    function s (){
        var secret = Math.floor(Math.random() * 100) + 1;
		}
		
	
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number, secret){
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		
		var	slumptal = s(secret);
		console.log("s" + secret);
		// Plats för förändring.
		upprak++;

		if(number < s(slumptal)){
	console.log(false, "Det hemliga talet är högre!");
		}
		else{
	console.log(false,"Det hemliga talet är lägre!");
		}
		if(number == slumptal){
	console.log(true, "Grattis du vann! Det hemliga talet var ("+number+") och du behövde ("+upprak+") gissningar för att hitta det.");
		}
		//Felsök
		if(number > 100 || number < 0){
    console.log("Talet är utanför intervallet 0 - 100");
		}
	if(upprak > 10){
	    console.log("Du har nått maximalt antal gissningar det hemliga talet var: " + secret);
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