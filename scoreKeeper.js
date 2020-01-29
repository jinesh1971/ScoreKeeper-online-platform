var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var team1 = document.querySelector("#team1");
var team2 = document.querySelector("#team2");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
 
var winningScoreDisplay = document.querySelector("p span")


var max = 5;
var gameOver = false;
var p1Score = 0;
var p2Score = 0;


p1Button.addEventListener("click",function()
{	
		if(!gameOver)
		{
			p1Score++;

			if(p1Score === max)
			{
				team1.classList.add("winner");
				gameOver = true;
			}
			console.log(p1Score);
			team1.textContent = p1Score;
		}
});

p2Button.addEventListener("click",function()
{

	if(!gameOver)
		{
			p2Score++;
			if(p2Score === max)
			{
				team2.classList.add("winner");
				gameOver = true;
			}
			console.log(p2Score);
			team2.textContent = p2Score;
		}
	
});

reset.addEventListener("click",function()
{
	resetM();
});


numInput.addEventListener("change",function(){

winningScoreDisplay.textContent = this.value;
max = Number(this.value);
resetM();

});

function resetM()
{
	p1Score = 0;
	p2Score = 0;
	team1.textContent = p1Score;
	team2.textContent = p2Score;
	team1.classList.remove("winner");
	team2.classList.remove("winner");
	gameOver = false;
}