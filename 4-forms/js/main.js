"use strict";

var validation = {

	init : function(fornameFocus) {
		console.log("function: init");
		//Skicka med fornameFocus funkar inte varför ?
		var reason = "";
		var button = document.querySelector("#singlebutton");
		console.log(button);
		validation.forname();
		//validation.email();
	},
	forname : function() {
		console.log("function: Forname");
		//Var
		var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
		//a-z A-Z 0-9 _ [åäö][ÅÄÖ] blanksteg
		//Förnamn

		var fornameFocus = document.querySelector("#Fornamn");

		//Efternamn
		var lastnameId = document.querySelector("#Efternamn").value;
		var lastnameFocus = document.querySelector("#Efternamn");
		lastnameFocus.onblur = function() {
			var fornameId = document.querySelector("#Fornamn").value;
			if(allowedName.test(fornameId)) {

				//true
			} else {
				//false
				if( lastnameId = /^[\s]/) {
					console.log("WHITESPACE");
					alert("Fel \nKolla igenom  ditt Förnamn följande är tillåtet\na-Ö\nTom");
					fornameFocus.focus();
					validation.forname();
				}

			}
			validation.efternamn();
		};
		//Slut lastnameId.onfocus
	},
	efternamn : function() {
		console.log("function: efternamn");
		var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
		//Efternamn

		var lastnameFocus = document.querySelector("#Efternamn");
		//Postnummer
		var postnumberId = document.querySelector("#Postnummer").value;
		var postnumberFocus = document.querySelector("#Postnummer");
		postnumberFocus.onblur = function() {
			var lastnameId = document.querySelector("#Efternamn").value;
			if(allowedName.test(lastnameId)) {
				//true
			} else {
				//false
				if( postnumberId = /^[\s]/) {
					console.log("WHITESPACE");
					alert("Fel \nKolla igenom ditt Efternamn följande är tillåtet\na-Ö\nTom");
					lastnameFocus.focus();
					validation.efternamn();
				}

			}
			validation.postnumber();
		};
		//Slut lastnameId.onfocus
	},
	postnumber : function() {
		console.log("function: postnummer");
		var allowedName = /[^a-zA-Z0-9_\.\-]/;
		//Efternamn
		var postnumberFocus = document.querySelector("#Postnummer");
		//Postnummer
		var epostId = document.querySelector("#Epost").value;
		var epostFocus = document.querySelector("#Epost");
		epostFocus.onblur = function() {
			var postnumberId = document.querySelector("#Postnummer").value;
			if(allowedName.test(postnumberId)) {
				//true
			} else {
				//false
				if( epostId = /^[\s]/) {
					console.log("WHITESPACE");
					alert("Fel \nKolla igenom ditt Postnummer följande är tillåtet\na-Ö\n0-9\nTom");
					postnumberFocus.focus();
					validation.postnumber();
				}

			}
			validation.epost();
		};
		//Slut lastnameId.onfocus
	},
	epost : function() {
		var allowedName = /^[?](\w|[\-])*?[@][a-zåäö0-9]+?[a-z]{2,253}$/;
		//Efternamn

		var epostFocus = document.querySelector("#Epost");
		//Postnummer
		var epostId = document.querySelector("#Epost").value;
		var epostFocus = document.querySelector("#Epost");
		epostFocus.onblur = function() {
			var epostId = document.querySelector("#Epost").value;
			if(allowedName.test(epostId)) {
				//true
			} else {
				//false
				if( epostId = /^[\s]/) {
					console.log("WHITESPACE");
					alert("Fel \nKolla igenom din email följande format är tillåtet\nxxx@xxx.xxx\nxxx@xxx.xx");
					epostFocus.focus();
					validation.epost();
				}
				validation.epost();
			}//Slut lastnameId.onfocus
		};
	},
};
window.onload = validation.init;
