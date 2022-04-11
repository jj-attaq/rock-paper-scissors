function computerPlay() { //  returns rock, paper, or scissors randomly
// define R, P, and S
    function rock() {
        return 1 && console.log(`rock`);
    }
    function paper() {
        return 2 && console.log(`paper`);
    }
    function scissors() {
        return 3 && console.log(`scissors`);
    }
// random numbers from 1 to 3
    const random = Math.floor((Math.random() * 3) + 1);
// return R, P, or S
    if (random === 1) {rock();} 
    if (random === 2) {paper();} 
    if (random === 3) {scissors();}
}
function playRound(playerSelection, computerSelection) {
    // define win lose and draw
    const win = (playerSelection === 1 && computerSelection === 3) || (playerSelection === 2 && computerSelection === 1) || (playerSelection === 3 && computerSelection === 2);
    const lose = (playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1); 
    const draw = playerSelection === computerSelection;
    
    if (win) {console.log(`you win!`);}
    if (lose) {console.log(`you lose!`);}
    if (draw) {console.log(`it's a draw!`);}
}
const playerSelection = 1;
const computerSelection = computerPlay();
const play = playRound();
