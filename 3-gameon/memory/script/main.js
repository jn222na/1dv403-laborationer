"use strict";



var main = {
    
     pictures: [],
     

    init: function(){
	    var pictureArray = new RandomGenerator.getPictureArray(4,4);
    console.log(pictureArray);
    main.struct();
    
    },
    
    struct: function(click){
        var upprak = 0;
        
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
            	var a = document.createElement("a");
            	a.setAttribute("href", "#");
            	pic.appendChild(a);
            	
				}
				upprak +=1;
            }

        },
		
		turnimages: function(pic,a,upprak){
		var pictureArray = new RandomGenerator.getPictureArray(4,4);
		a.onClick = function(){
				pictureArray();
		};
		
		if(pic.getAttribute("src") == "pics/0.png"){
			pic.setAttribute("src", "pics/" + main.pictures[i] + ".png");
		
		}
		},
    	random: function(){
    	    
    		console.log(pictureArray);
    	},

};
window.onload = main.init;