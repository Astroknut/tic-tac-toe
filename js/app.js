$(function() {
	console.log("Blep");
});

var x = "x";
var o = "o";
var moves = 0;



$('.playSquare').on('click', function() {
	console.log("IT WOOORRKKKSSS");

	// If/else statement to check board state for winner or tie and reset board 
	if ($("#box1").hasClass('o') && $("#box2").hasClass('o') && $("#box3").hasClass('o') 
		|| $("#box4").hasClass('o') && $("#box5").hasClass('o') && $("#box6").hasClass('o') 
		|| $("#box7").hasClass('o') && $("#box8").hasClass('o') && $("#box9").hasClass('o') 
		|| $("#box1").hasClass('o') && $("#box4").hasClass('o') && $("#box7").hasClass('o') 
		|| $("#box2").hasClass('o') && $("#box5").hasClass('o') && $("#box8").hasClass('o') 
		|| $("#box3").hasClass('o') && $("#box6").hasClass('o') && $("#box9").hasClass('o') 
		|| $("#box1").hasClass('o') && $("#box5").hasClass('o') && $("#box9").hasClass('o') 
		|| $("#box3").hasClass('o') && $("#box5").hasClass('o') && $("#box7").hasClass('o'))
	{
		alert('O is the winner! Play again!');
		//code to reset board


	} else if ($("#box1").hasClass('x') && $("#box2").hasClass('x') && $("#box3").hasClass('x') 
		|| $("#box4").hasClass('x') && $("#box5").hasClass('x') && $("#box6").hasClass('x') 
		|| $("#box7").hasClass('x') && $("#box8").hasClass('x') && $("#box9").hasClass('x') 
		|| $("#box1").hasClass('x') && $("#box4").hasClass('x') && $("#box7").hasClass('x') 
		|| $("#box2").hasClass('x') && $("#box5").hasClass('x') && $("#box8").hasClass('x') 
		|| $("#box3").hasClass('x') && $("#box6").hasClass('x') && $("#box9").hasClass('x') 
		|| $("#box1").hasClass('x') && $("#box5").hasClass('x') && $("#box9").hasClass('x') 
		|| $("#box3").hasClass('x') && $("#box5").hasClass('x') && $("#box7").hasClass('x'))
	{
		alert('X is the winner! Play again!');
		//code to reset board


	} else if (moves === 9)
	{
		alert('Its a tie. Start the tie-breaker round!');
		//code to reset board

	//if playSquare selected is already in use(create toggleClass for disable)	
	} else if ($(this).hasClass('disable'))
	{
		alert('This space is already taken! Try again');
	}


	//toggleClass to assign X or O class on playSquare

	//Create reset function for button
	
});


// *Bonus- Create ticker for Scoreboard. HARD MODE-Create score goal 
//  with visual tracker/comparison. When goal reached create page animation*

