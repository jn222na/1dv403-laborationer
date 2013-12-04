"use strict";


var MessageBoard = {
	
	
	messages: [],
	

	init: function(){
		var send = document.querySelector("#knapp");
        send.onclick = MessageBoard.addNewMessage;
        
        //Sätter färg på rutan
        var color = document.querySelector("#text");
	    color.style.backgroundColor="#DCDCDC";
	},
	addNewMessage: function(){
	    var color = document.querySelector("#text");
	    color.style.backgroundColor="#F7F7F7";
	    var myText = document.querySelector("#text").value;
	    var mess = new Message(myText, new Date());
        MessageBoard.messages.push(mess);
        console.log(myText);
      for (var i = 0; i <= MessageBoard.messages[i]; i++) {
          var s = document.createElement();
          console.log(s);
      }
	},
	renderMessage: function(messageID){
	  var divTag = document.getElementById("messagebox");
	  
	  //P-tagg
	  var ptag = document.createElement("p");
	  ptag.className = "postedMessages";
	  ptag.innerHTML = MessageBoard.messages[messageID].getHTMLText();
	  
	  
	  //Div tag
  	  var div = document.createElement("div");
	  console.log(div);
	  div.appendChild(ptag);
	  div.className = "addNewMessage";
	  

	  
	  
	  
	  //Tar bort meddelanden
	  document.getElementById("textarea").innerHTML ="";
	  //Skriver ut meddelanden
	  for (var i = 0; i < MessageBoard.messages.length; ++i){
	  MessageBoard.renderMessage(i);    
        }

	  console.log(ptag.innerHTML);
      // Sätter P taggen som underhuggare till div taggen

	  /*
	imgClose.alt="Close";
	imgClose.onclick = function(){
	MessageBoard.removeMessage(messageID);
	};*/
	},

	
};
window.onload = MessageBoard.init;
/* window.onload = function () {
    new MessageBoard();
    new MessageBoard();
};*/