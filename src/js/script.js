const body = document.body;
const r = `rock`;
const p = `paper`;
const s = `scissors`;
const compOptions = [r, p, s];

const buttons = document.querySelectorAll(`.btn`);
buttons.forEach((button) => {
	button.addEventListener(`click`, () => {
		console.log(`player is ${button.id}`)
		pSelection = button.id;
		playRound();
	});
});

// --------------------------------------------
let tally = 0;

function playRound(pSel, compSel) { 
	compSel = computerPlay();
	pSel = pSelection;

	function computerPlay() { 
		const random = Math.floor(Math.random() * compOptions.length);
		console.log(compOptions[random]);
		return compOptions[random];
	}
	
  const win = (pSel === r && compSel === s) || (pSel === p && compSel === r) || (pSel === s && compSel === p);
	const draw = pSel === compSel;
  const lose = !win && !draw;
	
	if (win) {alert(`You win! ${pSel} beats ${compSel}!`);tally++;return `win`;}
	if (lose) {alert(`You lose! ${compSel} beats ${pSel}!`);tally--;return `loss`;}
	if (draw) {alert(`It's a draw!`);tally + 0;return `draw`;}
}

function game() {
	for (let i = 1; i <= 5; i++) {
		if (tally === 3 || tally === -3) {
			break;
		} else {
			console.log(`Round ${i} is a ${playRound()}. Your current score is ${tally} points.`);
		}
	}
	if (tally > 0) {
		alert(`YOU WON THE GAME!`);
	}
	if (tally < 0) {
		alert(`YOU LOST THE GAME!`);
	}
	if (tally === 0) {
		alert(`BOOOORING! It's a draw.`);
	}
}

// game();



//------------------

// const chooseR = document.getElementById(`rock`);
// const chooseP = document.getElementById(`paper`);
// const chooseS = document.getElementById(`scissors`);

// const pR = chooseR.addEventListener('click', (e) => {
// 	return r;
// 	console.log(r);
// });
// const pP = chooseP.addEventListener('click', () => {
// 	// return p;
// 	console.log(p);
// });
// const pS = chooseS.addEventListener('click', () => {
// 	// return s;
// 	console.log(s);
// });