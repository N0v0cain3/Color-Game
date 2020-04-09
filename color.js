	var numSquares=0;
	var colors=generateRandomColor(numSquares);
	var square=document.querySelectorAll(".square");
	var colorDisplay=document.getElementById("colorDisplay");
	var messageDisplay=document.querySelector("#message")
	var h1=document.querySelector("h1");
	var resetButton=document.querySelector("#reset");
	var pickedColor=pickColor(); 
	var easyBtn=document.querySelector("#easyBtn");
	var hardBtn=document.querySelector("#hardBtn");
	colorDisplay.textContent=pickedColor;
	easyBtn.addEventListener("click",function(){
		numSquares=3;
	h1.style.backgroundColor="steelblue";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.background=colors[i];
		}
		else{
			square[i].style.display="none";
		}
	}
	});
	hardBtn.addEventListener("click",function(){
		numSquares=6;
	h1.style.backgroundColor="steelblue";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		
			square[i].style.background=colors[i];
			square[i].style.display="block";
	}
	});

	resetButton.addEventListener("click",function(){
		h1.style.backgroundColor="steelblue";
		messageDisplay.textContent="";
		colors=generateRandomColor(numSquares);
		pickedColor=pickColor();
		colorDisplay.textContent=pickedColor;
		this.textContent="New Colors";
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
			
			{	
				messageDisplay.textContent="Correct";
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
	for(var j=0;j<num;j++)
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
