function computerPlay() { //  returns rock, paper, or scissors randomly
    // define R, P, and S
    const rock = () => console.log('rock');
    const paper = () => console.log('paper');
    const scissors = () => console.log('scissors');
    // random numbers from 1 to 3
    const random = Math.floor((Math.random() * 3) + 1);
    // return R, P, or S
    if (random === 1) {rock();} 
    if (random === 2) {paper();} 
    if (random === 3) {scissors();}
}
function playRound(playerSelection, computerSelection) {
    // define draw
    if (playerSelection === computerSelection) {
        console.log('draw!')
    }
    // define win

    // define loss
}
const playerSelection = 'rock';
const computerSelection = computerPlay();