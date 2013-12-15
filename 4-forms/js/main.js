"use strict";

var validation = {


			init: function(){
				console.log("function: init");
				var reason = "";
				var button = document.querySelector("#singlebutton");
				console.log(button);
				button.onclick =	validation.postalCode;
				reason += validation.postalCode;
				validation.email();
			},

			 postalCode: function(){
			 	console.log("function: Postalcode");
			 	//Var
			 	var error;
			 	var allowedPostal = /^[\wåäöÅÄÖ]/;
			 	//a-z A-Z 0-9 _ [åäö][ÅÄÖ] allowed  
			 	var whiteSpace = /^\s*$/;
			 	 //Kollar blanksteg samt,
				var postalCodeId = document.querySelector("#Fornamn").value;
				console.log(postalCodeId);
				
				if(whiteSpace.test(postalCodeId)){
					alert("Blank eller mellanslag innan namn");
				}
				if(allowedPostal.test(postalCodeId)){
				}
				else{
					alert("Fel tecken endast a-z,A-Z, 0-9, tillåtna");
				}
			},
			
			 email: function(){
				console.log("function: email");
				var textvaliEmail ="";
			},
			

};
window.onload = validation.init;//Slut onload

			


