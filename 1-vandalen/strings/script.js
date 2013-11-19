"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"



	var convertString = function(str){
	    /* Ersätter a samt A med /g som söker globalt efter bokstaven a, och med /i
	    söker man med "non case sensitive", och tillsammans blir det en global sökning i strängen str.*/

var strang = "";
        if(str = str.replace(/a/gi,"#")){
        console.log(str);
}
        if(str.length < 1){
            return "Mata in minst en bokstav!!!!!";
        }
        // Kollar att inmatad sträng verkligen är en sträng och inte ett nummer
        if(str === str.match(/\d+/)){
            return "Mata in sträng";
        }

    for (var char in str){
        if(str[char] === str[char].toLowerCase()){
            strang += str[char].toUpperCase();
}
        else if(str[char] === str[char].toUpperCase()){
            strang += str[char].toLowerCase();
}
}
     return strang;
/* Kollar ifall str är lower eller uppercase */



/* Hur kollar man ifall det är ssssSSSSS? */ 






 


		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	






	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};