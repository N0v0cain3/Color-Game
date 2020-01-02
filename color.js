var colors=generateRandomColor(6);
var square=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var pickedColor=pickColor(); 
colorDisplay.textContent=pickedColor;

resetButton.addEventListener("click",function(){
	h1.style.backgroundColor="#232323";

	colors=generateRandomColor(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i];
	}

})

for(var i=0;i<square.length;i++)
{
	
	square[i].style.backgroundColor=colors[i];

	square[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		
		{	messageDisplay.textContent="Correct";
			changeColor(clickedColor);	
			h1.style.backgroundColor=clickedColor;	
			resetButton.textContent="Play Again";
		}
		else
			{this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	})
}

function changeColor(color){
	for(var i=0;i<colors.length;i++)
	{
		square[i].style.backgroundColor=color;
	}
}

function pickColor()
{
	var random=Math.floor(Math.random()*square.length);
	return colors[random];
}

function generateRandomColor(num)
{
var arr=[];
for(var i=0;i<num;i++)
{
	arr.push(randomColor());
}
return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}