function computerPlay() { // computer chooses between R, P, or S from array randomly
  const random = Math.floor(Math.random() * choice.length);
  console.log(random, choice[random]);
  return choice[random];
}
function playRound(playerSelection, computerSelection) { // play one round of R, P, S
  const win = (playerSelection === `rock` && computerSelection === `scissors`) || 
    (playerSelection === `paper` && computerSelection === `rock`) || 
		(playerSelection === `scissors` && computerSelection === `paper`);
  const lose = (playerSelection === `rock` && computerSelection === `paper`) || 
    (playerSelection === `paper` && computerSelection === `scissors`) || 
    (playerSelection === `scissors` && computerSelection === `rock`); 
  const draw = playerSelection === computerSelection;
	function result(gameState) {
		if (win) {alert(`You win! ${playerSelection} beats ${computerSelection}!`);gameState = `win`;return gameState;}
		if (lose) {alert(`You lose! ${computerSelection} beats ${playerSelection}!`);gameState = `lose`;return gameState;}
		if (draw) {alert(`It's a draw!`);gameState = `draw`;return gameState;} 
	}
	return result();
}
const choice = [`rock`, `paper`, `scissors`];
const playerSelection = prompt(`please write in 'rock', 'paper' or 'scissors'`, ).toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));