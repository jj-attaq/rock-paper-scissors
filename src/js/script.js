const choice = [`rock`, `paper`, `scissors`];

function computerPlay() {
    const random = Math.floor(Math.random() * choice.length);
    console.log(random, choice[random]);
    return choice[random];
}
function playRound(playerSelection, computerSelection) {
    // define win lose and draw
    const win = (playerSelection === `rock` && computerSelection === `scissors`) || 
        (playerSelection === `paper` && computerSelection === `rock`) || 
        (playerSelection === `scissors` && computerSelection === `paper`);

    const lose = (playerSelection === `rock` && computerSelection === `paper`) || 
        (playerSelection === `paper` && computerSelection === `scissors`) || 
        (playerSelection === `scissors` && computerSelection === `rock`); 
        
    const draw = playerSelection === computerSelection;

    if (win) {console.log(`you win!`);}
    if (lose) {console.log(`you lose!`);}
    if (draw) {console.log(`it's a draw!`);}
}
const playerSelection = `rock` 
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));