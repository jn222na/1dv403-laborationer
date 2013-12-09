"use strict";


var MessageBoard = {
	
	
	messages: [],
	
      
	init: function(e){
		var send = document.querySelector("#knapp");
        send.onclick = MessageBoard.addNewMessage;
        var f = document.getElementById("text");
	    f.placeholder = "Skriv ditt meddelande";
        //Sätter färg på rutan
        var color = document.querySelector("#text");
	    color.style.backgroundColor="#DCDCDC";
	    
        document.getElementById("messageboard").onkeydown = function(e, messageID){
            if(!e) {
                e = window.event;
            }
            
            if(e.keyCode === 13 && !e.shiftKey){ 
                MessageBoard.addNewMessage();                   
                return false;
            }
            // Tar bort meddlenade vid ctrl + F1
            if(e.keyCode === 112 && !e.shiftKey){ 
                MessageBoard.removeMessage(messageID);                  
                return false;
            }
        };
	},
	
	addNewMessage: function(){
	    var color = document.querySelector("#text");
	    color.style.backgroundColor="#F7F7F7";
	    var myText = document.querySelector("#text").value;
	    var mess = new Message(myText, new Date());
        MessageBoard.messages.push(mess);

        console.log(myText);
         console.log(MessageBoard.messages.length);
         

      MessageBoard.renderMessages();
	},
	renderMessage: function(messageID){
	console.log(messageID);
	  var container = document.getElementById("container");
	  var box = document.getElementById("messageboxx");
	  container.appendChild(box);
	  //Div tag
  	  var div = document.createElement("div");
  	  div.className = "div";
	  console.log(div);
	  box.appendChild(div);
	  //P-tagg
	  var ptag = document.createElement("p");
	  ptag.className = "p";
	  //Räknar meddelanden
	  div.appendChild(ptag);
	  ptag.innerHTML = MessageBoard.messages[messageID].getHTMLtext();
	        var count  = document.createTextNode(count);
      ptag.appendChild(count);
	    count +=1;
	  console.log(ptag);
	  	 
	  	 //Datum
	  	var dateButton = document.createElement("img");
	  	dateButton.setAttribute("src", "date.png");   
           div.appendChild(dateButton);
           
           dateButton.onclick = function(){
          dateButton = MessageBoard.messages[messageID].getDatetextt();
          alert("Meddelandet skrevs "+dateButton);
          console.log(dateButton);
        };
        //Delete
	  	 var deleteButton = document.createElement("img");
	  	deleteButton.setAttribute("src", "trashcan.png", deleteButton.width="50");  
  	      div.appendChild(deleteButton);
  	      console.log(deleteButton);
  	      
	  	  deleteButton.onclick = function(){
	  	  MessageBoard.removeMessage(messageID);
	  	  console.log(MessageBoard.messages.length);
	  	  };
	  	  //Utskrift utav datum
	  	    showdate = MessageBoard.messages[messageID].getDatetext();
            var showdate = document.createTextNode(showdate);
            div.appendChild(showdate);

	  	  },

  	    
  	    renderMessages: function () {
  	        document.getElementById("messageboxx").innerHTML = "";
  	        for (var i = 0; i < MessageBoard.messages.length; i+=1) {
  	            MessageBoard.renderMessage(i);
  	        }
  	    },
            removeMessage: function(messageID){
			if(confirm("Är du säker på att du vill ta bort detta meddelandet?")){
					MessageBoard.messages.splice(messageID, 1);
				}
				MessageBoard.renderMessages();
				
			},
			

            count: function (messageID){
             MessageBoard.messages.length();   
            },
        };
window.onload = MessageBoard.init;



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