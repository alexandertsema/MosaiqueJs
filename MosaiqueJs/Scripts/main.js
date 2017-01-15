"use strict";

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    generateSegments();
  }
};

var cellSize = 43;
var radius = cellSize/2;
var containerSize = cellSize*2;
var state = 1;

function generateSegments() {
	
	var main = document.getElementById("main");
	var i = 1;
	for (var i = 100 - 1; i >= 0; i--) {
		 
		var container = document.createElement("DIV");   
		container.className = "container";
		container.style.width = containerSize+"px";
		container.id = i;

		//1
		var innerNode1 = document.createElement("CANVAS");
		innerNode1.className = "cell";
		innerNode1.width = innerNode1.height = cellSize;
		var ctx = innerNode1.getContext("2d");
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 0.5*Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(cellSize, cellSize, radius, Math.PI, 1.5*Math.PI);
		ctx.stroke();

		//2
		var innerNode2 = document.createElement("CANVAS");
		innerNode2.className = "cell";
		innerNode2.width = innerNode2.height = cellSize;
		var ctx = innerNode2.getContext("2d");
		ctx.beginPath();
		ctx.arc(cellSize, 0, radius, 0.5*Math.PI, Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, cellSize, radius,  1.5*Math.PI, 0);
		ctx.stroke();

		//3
		var innerNode3 = document.createElement("CANVAS");
		innerNode3.className = "cell";
		innerNode3.width = innerNode3.height = cellSize;
		var ctx = innerNode3.getContext("2d");
		ctx.beginPath();
		ctx.arc(cellSize, cellSize, radius, Math.PI, 1.5*Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, 0.5*Math.PI);
		ctx.stroke();

		//4
		var innerNode4 = document.createElement("CANVAS");
		innerNode4.className = "cell";
		innerNode4.width = innerNode4.height = cellSize;
		var ctx = innerNode4.getContext("2d");
		ctx.beginPath();
		ctx.arc(0, cellSize, radius,  1.5*Math.PI, 0);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(cellSize, 0, radius, 0.5*Math.PI, Math.PI);
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
			var angle = getRotationAngle();
			if (angle != 0)
				rotateDIV(cells[j], angle);
		}
	}
}

function getRotationAngle() {

	var angles = [-90, 0, 90];
	var index = Math.round(Math.random() * 3);
	console.log(index);
	return angles[index];
}

function isRotate() {
	if (Math.floor(Math.random() * 2) + 0 == 0)
		return false;
	return true;
}

function rotate_start() {
	setInterval(rotate, 2000);
}

function rotateDIV(cell, angle)
{
	var rotINT;
	clearInterval(rotINT)
	var i = 0;

	rotINT = setInterval(
		function() {
			if (angle < 0) i--;
			else i++;
			startRotate(i, angle, cell, rotINT);
	}, 1)
}

function startRotate(i, angle, cell, rotINT)
{
	cell.style.transform="rotate(" + i + "deg)"
	cell.style.webkitTransform="rotate(" + i + "deg)"
	cell.style.OTransform="rotate(" + i + "deg)"
	cell.style.MozTransform="rotate(" + i + "deg)"
	
	if (i == angle)	{
		clearInterval(rotINT)
	}
}
