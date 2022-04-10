//  returns rock, paper, or scissors randomly
function computerPlay() {
    // random numbers
    const random = Math.floor((Math.random() * 3) + 1);
    // assign numbers to R, P, or S 
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    // return R, P, or S
    if (random === rock) {
        console.log('rock');
    } else if (random === paper) {
        console.log('paper');
    } else {
        console.log('scissors');
    }
}