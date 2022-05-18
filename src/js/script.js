const body = document.body;
const r = `rock`,
			p = `paper`,
			s = `scissors`;
const buttons = document.querySelectorAll(`.btn`);
let tally = 0;
let numberOfRounds = 1;

buttons.forEach((button) => {
	button.addEventListener(`click`, () => {
		pSelection = button.id;
		play();
	});
});

function play(pSel, compSel) {
	const container = document.querySelector(`#displayResults`),
				result = document.createElement(`p`);
	compSel = computerPlay();
	pSel = pSelection;

	function computerPlay() { 
		const compOptions = [r, p, s],
					random = Math.floor(Math.random() * compOptions.length);
		console.log(compOptions[random]);
		return compOptions[random];
	}

	const win = (pSel === r && compSel === s) || (pSel === p && compSel === r) || (pSel === s && compSel === p),
				draw = pSel === compSel,
				lose = !win && !draw,	
				winRoundText = () => result.textContent = `Your score is ${tally}. You win the round! ${pSel} beats ${compSel}!`,
				loseRoundText = () => result.textContent = `Your score is ${tally}. You lost the round! ${compSel} beats ${pSel}!`, 
				roundDrawText = () => result.textContent = `Your score is ${tally} The round is a draw!`,
				victory = () => result.textContent += ` YOU WON THE GAME!`,
				defeat = () => result.textContent +=` YOU LOST THE GAME!`,
				undecided = () => result.textContent += ` BOOOORING! It's a draw.`;			
	
	const winThree = function() {
		if (tally === 3) {
			// winLose();
			// container.appendChild(result); 
			// createReplayButton();
			// above commented out because functions are called before they're defined
		}
	}
	const loseThree = function() {
		if (tally === -3) {
			// winLose();
			// container.appendChild(result); 
			// createReplayButton();
			// above commented out because functions are called before they're defined
		}
	}	

	const winRound = function() {
		if (win) {
			tally++;
			// winThree();
			numberOfRounds++; 
			winRoundText();
			container.appendChild(result);
		} else {
			return;
		}
	}
	const loseRound = function() {
		if (lose) {
			tally--;
			// loseThree()
			numberOfRounds++;
			loseRoundText();
			container.appendChild(result);
		} else {
			return;
		}
	}
	const roundDraw = function() {
		if (draw) {
			numberOfRounds++;
			roundDrawText();
			container.appendChild(result);
		}  else {
			return;
		}
	}

	function playRound() {
		winRound();
		loseRound();
		roundDraw();	
	}
	
	fullGame();
	function fullGame() {
		let gameIsDone = false;
		determineIfGameEnd();
		
		function determineIfGameEnd() {
			function winLose() { 
				if (tally > 0) victory() && (gameIsDone = true);
				if (tally < 0) defeat() && (gameIsDone = true);
				if (tally === 0) undecided() && (gameIsDone = true);
				console.log(gameIsDone); 
			}
			if (numberOfRounds === 5) {
					playRound();
					winLose();
					container.appendChild(result); 
					createReplayButton();
			}	else {
					playRound();
			}
		}
		function createReplayButton() {
			replayButton = document.createElement('button'); 
			replayButton.textContent = `Click to play again.`;
			replayButton.setAttribute(`id`, `replay`);
			replayButton.addEventListener(`click`, () => {
				endGame();
			});
			container.append(replayButton);
		}
		function endGame() { 	
			if(gameIsDone === true) {
				tally = 0;
				numberOfRounds = 1;
				clearBox();
				function clearBox() {
					while (container.firstChild) {
						container.removeChild(container.firstChild);
					}
				}
			} else {
				return;
			}
		}
	}
}