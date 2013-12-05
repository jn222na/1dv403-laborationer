"use strict";


var MessageBoard = {
	
	
	messages: [],
	

	init: function(){
	    
		var send = document.querySelector("#knapp");
        send.onclick = MessageBoard.addNewMessage;
        var f = document.getElementById("text");
	    f.placeholder = "Skriv ditt meddelande";
        //Sätter färg på rutan
        var color = document.querySelector("#text");
	    color.style.backgroundColor="#DCDCDC";
	    /*var g = document.createElement("textarea");
	    var container = document.getElementById("container");
	    g.id = "text";
	    console.log(container);
	    container.appendChild(g);*/
	},
	addNewMessage: function(){
	    var color = document.querySelector("#text");
	    color.style.backgroundColor="#F7F7F7";
	    var myText = document.querySelector("#text").value;
	    var mess = new Message(myText, new Date());
        MessageBoard.messages.push(mess);
        console.log(myText);
         console.log(MessageBoard.messages.length);
      MessageBoard.renderMessage(0);
	},
	renderMessage: function(messageID){
	console.log(messageID);
	  var container = document.getElementById("container");
	  var box = document.getElementById("messageboxx");
	  //Div tag
  	  var div = document.createElement("div");
  	  div.className = "div";
	  console.log(div);
	  box.appendChild(div);
	  
	  	  	  
	  	var dateButton = document.createElement("button");
        dateButton.innerHTML = "<img height='40' src='date.png' alt='Datum Knappen' />";
           div.appendChild(dateButton);
        dateButton.onclick = function(){
           
        };
	  	 var deleteButton = document.createElement("button");
  	     deleteButton.innerHTML = "<img height='40'src='trashcan.png' alt='Delete Knappen' />";
  	      div.appendChild(deleteButton);
  	     console.log(deleteButton);
	  	 deleteButton.onclick = function(){
	  	     MessageBoard.removeMessage(messageID);
	  	      console.log(MessageBoard.messages.length);
	  	  };
	  //P-tagg
	  var ptag = document.createElement("p");
	  ptag.className = "p";
	  div.appendChild(ptag);
	  ptag.innerHTML = MessageBoard.messages[messageID].getHTMLtext();
	  console.log(ptag);

	  	  },

  	    
  	    
            removeMessage: function(messageID){
			if(confirm("Är du säker på att du vill ta bort detta meddelandet?")){
					MessageBoard.messages.splice(messageID, 1);
				}
				
			},
			
			showdate: function(messageID){
			    
			}

           
        };
window.onload = MessageBoard.init;
/* window.onload = function () {
    new MessageBoard();
    new MessageBoard();
};*/


/*
 * 	       	    var	removeMessage = function(messageID){
			if(confirm("Är du säker på att du vill ta bort detta meddelandet?") === true){
					MessageBoard.messages.splice(messageID, 1);
					MessageBoard.renderMessages();
				return false;
				}
			};
	     deleteButton.onclick = function (){
			removeMessage(messageID);
			return true;
        }*/