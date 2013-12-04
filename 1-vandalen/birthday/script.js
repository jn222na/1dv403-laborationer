"use strict";

window.onload = function(){


	var birthday = function(date){
	  
       
    var useDate = new Date(date+"T23:59:59");
    var today = new Date();
    console.log(today);
    
    var birthdays = new Date(input.value);
    console.log(birthdays);
    
    var msperday = 24*60*60*1000;
    console.log(msperday);
    
    var timeLeft = (birthdays.getTime() - today.getTime());
    console.log(timeLeft);
    
    var e_dayzLeft = timeLeft / msperday;
    console.log(e_dayzLeft);
    
    var daysLeft = Math.floor(e_dayzLeft);
    daysLeft +=1;
    console.log(daysLeft);


    if(daysLeft === 0){
        return daysLeft;
    }
    useDate.setFullYear(today.getFullYear());
    
    if(useDate.getTime() < today.getTime()){
        useDate.setFullYear(today.getFullYear() +1);
    }
    var result = Math.floor((useDate.getTime()- today.getTime()) / msperday);
    
    return result;

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
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){

				case 0: message = "Grattis på födelsedagen!";
					break;
			    case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};