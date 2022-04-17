const choice = [`rock`, `paper`, `scissors`]; // define array of choices in game

function computerPlay() { // computer chooses between R, P, or S from array randomly
    const random = Math.floor(Math.random() * choice.length);
    console.log(random, choice[random]);
    return choice[random];
}
function playRound(playerSelection, computerSelection) { // play one round of R, P, S
// define win
    const win = (playerSelection === `rock` && computerSelection === `scissors`) || 
        (playerSelection === `paper` && computerSelection === `rock`) || 
        (playerSelection === `scissors` && computerSelection === `paper`);
// define lose
    const lose = (playerSelection === `rock` && computerSelection === `paper`) || 
        (playerSelection === `paper` && computerSelection === `scissors`) || 
        (playerSelection === `scissors` && computerSelection === `rock`); 
// define draw
    const draw = playerSelection === computerSelection;
// log result / need to return it however, per OP assignment
    if (win) {alert(`the computer chose ${computerSelection}, you win!`);}
    if (lose) {alert(`the computer chose ${computerSelection}, you lose!`);}
    if (draw) {alert(`the computer chose ${computerSelection}, it's a draw!`);}
}
const playerSelection = prompt(`please write in 'rock', 'paper' or 'scissors'`, ).toLowerCase(); // 
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));