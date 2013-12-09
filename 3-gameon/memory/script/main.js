"use strict";



var main = {
    
     message: [],
     

    init: function(){
	    var pictureArray = new RandomGenerator.getPictureArray(4,4);
    console.log(pictureArray);
    main.struct();
    
    },
    
    struct: function(){
	    var	container = document.getElementById("container");
        var table = document.createElement("table");
        container.appendChild(table);
        for (var rows = 0; rows < 4; rows+=1) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            console.log(tr);
            
            for(var cols = 0; cols < 4; cols +=1){
            	var td = document.createElement("td");
            	tr.appendChild(td);
				
            	var pic = document.createElement("img");
            	pic.setAttribute("src", "../pics/0.png");
            	td.appendChild(pic);
				console.log(pic);
				}
            }
        },

    	random: function(){
    	    var pictureArray = new RandomGenerator.getPictureArray(4,4);
    		console.log(pictureArray);
    	},

};
window.onload = main.init;