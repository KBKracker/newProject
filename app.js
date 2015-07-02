var computerChoice = "";
var userChoice = "";
function computerThink(){
	computerChoice = Math.floor(Math.random()*3);
	if
		(computerchoice === 1){
			computerChoice = "Rock";
			window.alert("computer picked rock");
	}   
	else if
		(computerChoice === 2){
			computerChoice = "paper";
			window.alert("computer picked paper"); 
	}        
	else{
		computerChoice = "scissors";
		window.alert("computer picked scissors");
	}
	
}

function rockPick(){
	userChoice = "Rock";
	computerThink();
	results();
}

function paperPick(){
	userChoice = "Paper";
	computerThink();
	results();
}

function scissorsPick(){
	userChoice = "scissors";
	computerThink();
	results();
}

var comapre = function(choice1, choice2) {
	if(choice1 === choice2) {
		return "The result is a tie";

}

else if(choice1 === "Rock") {
	if(choice2 === "Scissors") {
		return "Rock wins";
	else {
		return "Paper wins";
}

else if(choice1 === "Paper") {
	if(choice2 === "Rock") {

	else {
		return "Paper wins";

}
