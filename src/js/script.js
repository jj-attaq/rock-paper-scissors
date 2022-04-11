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
    if (win) {console.log(`you win!`);}
    if (lose) {console.log(`you lose!`);}
    if (draw) {console.log(`it's a draw!`);}
}
const playerSelection = `rock` // test value, make into case insensitive prompt later
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));