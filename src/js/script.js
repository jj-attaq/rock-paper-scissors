const body = document.body;
const choice = [`rock`, `paper`, `scissors`];


choice.forEach(element => { 
		function createButtons() {
			b = document.createElement(`button`);
			str = `${element}`;
			b.setAttribute(`id`, str);
			b.setAttribute(`class`, `btn`)
			b.textContent = str.toUpperCase();
			body.append(b);
		}
		createButtons(element);
});

const buttons = document.querySelectorAll(`.btn`)
for (const button of buttons) {
  button.addEventListener(`click`, () => {
	  // console.log(`test`)
		playRound();
  });
};
// --------------------------------------------
let tally = 0;

function playRound(playerSelection, computerSelection) { // play one round of R, P, S
	computerSelection = computerPlay();
	playerSelection = document.getElementById();

	function computerPlay() { // computer chooses between R, P, or S from array randomly
		const random = Math.floor(Math.random() * choice.length);
		console.log(choice[random]);
		return choice[random];
	}

  const win = (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
		(playerSelection === `scissors` && computerSelection === `paper`);
  const lose = (playerSelection === `rock` && computerSelection === `paper`) ||
    (playerSelection === `paper` && computerSelection === `scissors`) ||
    (playerSelection === `scissors` && computerSelection === `rock`);
  const draw = playerSelection === computerSelection;

	if (win) {alert(`You win! ${playerSelection} beats ${computerSelection}!`);console.log(`win`);tally++;return `win`;}
	if (lose) {alert(`You lose! ${computerSelection} beats ${playerSelection}!`);console.log(`lose`);tally--;return`lose`;}
	if (draw) {alert(`It's a draw!`);console.log(`draw`);tally + 0;return `draw`;}
}

// function game() {
// 	for (let i = 0; i < 5; i++) {
// 		if (true) {
// 			playRound();
// 			console.log(tally);
// 		}
// 		if (tally === 3 || tally === -3) {
// 			break;
// 		}
// 	}
// 	if (tally > 0) {
// 		alert(`YOU WON THE GAME!`);
// 	}
// 	if (tally < 0) {
// 		alert(`YOU LOST THE GAME!`);
// 	}
// 	if (tally === 0) {
// 		alert(`BOOOORING! It's a draw.`);
// 	}
// }

// game();