//"use strict";

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    generateSegments();
  }
};

var cellWidth = 100;

function generateSegments() {
	
	var main = document.getElementById("main");
	
	for (var i = 45 - 1; i >= 0; i--) {
		 
		var container = document.createElement("DIV");   
		container.className = "container";
		container.id=i;

		//3
		var innerNode3 = document.createElement("CANVAS");
		innerNode3.className = "cell";
		innerNode3.width=innerNode3.height = cellWidth;
		// innerNode3.id=i;
		var ctx = innerNode3.getContext("2d");
		ctx.beginPath();
		ctx.arc(cellWidth, cellWidth, 75, Math.PI, 1.5*Math.PI);
		ctx.stroke();

		//4
		var innerNode4 = document.createElement("CANVAS");
		innerNode4.className = "cell";
		innerNode4.width=innerNode4.height = cellWidth;
		// innerNode4.id=i;
		var ctx = innerNode4.getContext("2d");
		ctx.beginPath();
		ctx.arc(0, cellWidth, 75,  1.5*Math.PI, 0);
		ctx.stroke();

		//2
		var innerNode2 = document.createElement("CANVAS");
		innerNode2.className = "cell";
		innerNode2.width=innerNode2.height = cellWidth;
		// innerNode2.id=i;
		var ctx = innerNode2.getContext("2d");
		ctx.beginPath();
		ctx.arc(cellWidth, 0, 75, 0.5*Math.PI, Math.PI);
		ctx.stroke();

		//1
		var innerNode1 = document.createElement("CANVAS");
		innerNode1.className = "cell";
		innerNode1.width=innerNode1.height = cellWidth;
		// innerNode1.id=i;
		var ctx = innerNode1.getContext("2d");
		ctx.beginPath();
		ctx.arc(0, 0, 75, 0, 0.5*Math.PI);
		ctx.stroke();

		
		container.appendChild(innerNode3);
		container.appendChild(innerNode4);
		container.appendChild(innerNode2);
		container.appendChild(innerNode1);

		main.appendChild(container);
	}
	
}

function rotate() {
	
	var main = document.getElementById("main");
	var containers = main.children;

	for (var i = containers.length - 1; i >= 0; i--) {
		
		var container = containers[i];
		var cells = container.children;

		for (var j = cells.length - 1; j >= 0; j--) {
			
			var context = cells[j].getContext("2d");
			var canvasWidth = canvasHeight = cellWidth;
			// Clear the canvas
			context.clearRect(0, 0, canvasWidth, canvasHeight);

			// Move registration point to the center of the canvas
			context.translate(canvasWidth/2, canvasWidth/2);
			
			if (i % 2 == 0) {
				// Rotate 1 degree
				context.rotate(0.25*Math.PI);
			}
			else{
				// Rotate 1 degree
				context.rotate(-0.25*Math.PI);///180
			}
			
			// Move registration point back to the top left corner of canvas
			context.translate(-canvasWidth/2, -canvasWidth/2);

			context.beginPath();
			
			if (j==0) 	   {context.arc(cellWidth, cellWidth, 75, Math.PI, 1.5*Math.PI);}
			else if (j==1) {context.arc(0, cellWidth, 75,  1.5*Math.PI, 0);}
			else if (j==2) {context.arc(cellWidth, 0, 75, 0.5*Math.PI, Math.PI);}
			else if (j==3) {context.arc(0, 0, 75, 0, 0.5*Math.PI);}
			

			context.stroke();
		}
	}
}

function rotate_start() {
	// setInterval(rotate, 1000);
	rotate();
}
