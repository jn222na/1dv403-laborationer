"use strict";

var validation = {

	init : function() {
		//Förnamn
		console.log(document.getElementsByTagName("form-horizontal"));
		console.log("function: init");
		var lastnameId = document.querySelector("#Efternamn").value;
		var lastnameFocus = document.querySelector("#Efternamn");
		var fornameFocus = document.querySelector("#Fornamn");
				var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
				var allowedPostalName = /^[0-9]{5}$|^[0-9]{3}-[0-9]{2}$|^[0-9]{3}\s[0-9]{2}$|^SE\d{5}$|^SE\d{3}-\d{2}$|^SE\d{3}\s\d{2}$|^SE\s[0-9]{3}\s[0-9]{2}$|^SE\s[0-9]{3}-\d{2}$/;
				var allowedEpostName = /\S+@\S+\.\S+/;
		//a-z A-Z 0-9 _ [åäö][ÅÄÖ] blanksteg
		fornameFocus.onblur = function(){
					var fornameId = document.querySelector("#Fornamn").value;
			var fornameFocus = document.querySelector("#Fornamn");
			if(allowedName.test(fornameId)) {
				fornameFocus.style.background = "transparent";
				fornameFocus.style.borderColor = "#66CD00";
				//true
				//return true;
			} else {
				//false
					alert("Fel \nKolla igenom  ditt Förnamn följande är tillåtet\na-Ö\nTom");
					fornameFocus.style.borderColor = "#FF3030";
					fornameFocus.focus();
					return false;	
			}
			
			
		};
		//Efternamn
		var postnumberId = document.querySelector("#Postnummer").value;
		var postnumberFocus = document.querySelector("#Postnummer");
		lastnameFocus.onblur = function() {
			var lastnameId = document.querySelector("#Efternamn").value;
			if(allowedName.test(lastnameId)) {
				lastnameFocus.style.background = "transparent";
				lastnameFocus.style.borderColor = "#66CD00";
				//return true;//true
			} else {
				//false
					console.log("WHITESPACE");
					alert("Fel \nKolla igenom ditt Efternamn följande är tillåtet\na-Ö\nTom");
					lastnameFocus.style.borderColor = "#FF3030";
					lastnameFocus.focus();
					return false;
			}
		};
		
		//Postnummer
		var postnumberFocus = document.querySelector("#Postnummer");
		var epostId = document.querySelector("#Epost").value;
		var epostFocus = document.querySelector("#Epost");
					var postnumberFocus = document.querySelector("#Postnummer");
		postnumberFocus.onblur = function() {
			var postnumberId = document.querySelector("#Postnummer").value;
			var postnumberFocus = document.querySelector("#Postnummer");
			if(allowedPostalName.test(postnumberId)) {
				postnumberFocus.style.background = "transparent";
				postnumberFocus.style.borderColor = "#66CD00";
				epostId = epostId.replace(/\s/g, '');
				//return true;//true
			} else {
				//false
					console.log("WHITESPACE");
					alert("Fel \nKolla igenom ditt Postnummer följande är tillåtet\na-Ö\n0-9\nTom");
					postnumberFocus.style.borderColor = "#FF3030";
					postnumberFocus.focus();
					return false;
			}
		};
		
		//Epost
		var epostId = document.querySelector("#Epost").value;
		var epostFocus = document.querySelector("#Epost");
		epostFocus.onblur = function() {
			var epostFocus = document.querySelector("#Epost");
			var epostId = document.querySelector("#Epost").value;
			if(allowedEpostName.test(epostId)) {
				console.log("santsantsant");
				epostFocus.style.background = "transparent";
				epostFocus.style.borderColor = "#66CD00";
				validation.knapp();
		    return true;	//true
			} else {
				//false
				console.log("falskfalskfalsk");
					epostFocus.style.borderColor = "#FF3030";
					console.log("WHITESPACE");
					alert("Fel \nKolla igenom din email följande format är tillåtet\nxxx@xxx.xxx\nxxx@xxx.xx");
					epostFocus.focus();
					
					return false;
					

				
			}//Slut lastnameId.onfocus
		
		};
	
	},
	knapp: function(){
	console.log("sddas");
			var button = document.querySelector("#singlebutton");
			button.onclick = function() {
			var fornameId = document.querySelector("#Fornamn").value;
			var lastnameId = document.querySelector("#Efternamn").value;
			var postnumberId = document.querySelector("#Postnummer").value;
			var lastnameId = document.querySelector("#Efternamn").value;
			var epostId = document.querySelector("#Epost").value;
			var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
			var allowedPostalNumber = /^[0-9]{5}$|^[0-9]{3}-[0-9]{2}$|^[0-9]{3}\s[0-9]{2}$|^SE\d{5}$|^SE\d{3}-\d{2}$|^SE\d{3}\s\d{2}$|^SE\s[0-9]{3}\s[0-9]{2}$|^SE\s[0-9]{3}-\d{2}$/;
			var allowedEmail = /\S+@\S+\.\S+/;
			if(allowedName.test(fornameId) && allowedName.test(fornameId)&& allowedPostalNumber.test(postnumberId)&& allowedEmail.test(epostId)){
				console.log("rätt");
				validation.popup();
			}
			else{
				console.log("fel");
			}
			
		};
	},
	//Ny ruta Samt stänger av inmatning
	popup : function() {
		var div = document.createElement("div");
		var divright = document.createElement("div");
		//Div style
		div.style.width = "300px";
		div.style.height = "300px";
		div.style.marginLeft = "600px";
		div.style.backgroundColor = "#78AB46";
		//Div right
		divright.style.marginTop = "130px";
		divright.style.marginLeft = "180px";
		document.body.appendChild(div);
		document.body.appendChild(divright);
		//P
		var p = document.createElement("p");
		var p2 = document.createElement("p");
		var p3 = document.createElement("p");
		var p4 = document.createElement("p");
		var div1 = document.createElement("div");
		div1.style.marginBottom = "20px";
		var div2 = document.createElement("div");
		div2.style.marginBottom = "20px";
		var div3 = document.createElement("div");
		div3.style.marginBottom = "20px";
		var div4 = document.createElement("div");
		div4.style.marginBottom = "20px";
		var conButton = document.createElement("div");
		//Div.append
		div.appendChild(div1);
		div1.appendChild(div2);
		div2.appendChild(div3);
		div3.appendChild(div4);
		divright.appendChild(conButton);
		div.appendChild(divright);
		//Value
		var fornameId = document.querySelector("#Fornamn").value;
		var lastnameId = document.querySelector("#Efternamn").value;
		var postnumberId = document.querySelector("#Postnummer").value;
		var epostId = document.querySelector("#Epost").value;
		var br = document.createElement("br");
		//Buttons
		var confirm = document.createElement("button");
		var cancel = document.createElement("button");
		confirm.appendChild(document.createTextNode("Skicka"));
		cancel.appendChild(document.createTextNode("Avbryt"));
		conButton.appendChild(confirm);
		conButton.appendChild(cancel);
		//P.Doc
		p = document.createTextNode("Förnamn:" + fornameId);
		p2 = document.createTextNode("Efternamn:" + lastnameId);
		p3 = document.createTextNode("Postnummer:" + postnumberId);
		p4 = document.createTextNode("Email:" + epostId);

		div1.appendChild(p);
		div2.appendChild(p2);
		div3.appendChild(p3);
		div4.appendChild(p4);
		//Try buttonclick

		//var fonster = window.open("","confirm","height=400px,width=400pxstatus=yes");

		//Disable /Enable /
		var elems = document.getElementsByTagName('input');
		var butt = document.querySelector("#singlebutton");
		var rull = document.getElementsByTagName("select");
			console.log(fornameId);

			
				rull[0].disabled = true;
				butt.disabled = true;

				var len = elems.length;
				for(var i = 0; i < len; i++) {
					elems[i].readOnly = true;
				}
				//var timer = setInterval(checkChild, 0);
				//Om rutan stängs tillåt inmatning
				

					//clearInterval(timer);
					//validation.init();

					/*if (fonster.closed) {}; */
	},
};
window.onload = validation.init;
/*	rull[0].disabled = true;
	butt.disabled = true;
	
		var len = elems.length;
		      for (var i = 0; i < len; i++) {
  			  elems[i].readOnly = true;
  			  
			}
			//var timer = setInterval(checkChild, 0);
//Om rutan stängs tillåt inmatning
function checkChild() {
    butt.disabled = false;
    rull[0].disabled = false;
        for (var i = 0; i < len; i++) {
  			  elems[i].readOnly = false;
			}
			    //clearInterval(timer);
			    //validation.init(); 

    	
   /*if (fonster.closed) {}; */ 
    //}