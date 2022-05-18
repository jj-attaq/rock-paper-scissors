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
		playRound();
	});
});

function playRound(pSel, compSel) {
	const container = document.querySelector(`#displayResults`),
				result = document.createElement(`p`);
	compSel = computerPlay();
	pSel = pSelection;

	function computerPlay() { 
		const compOptions = [r, p, s],
					random = Math.floor(Math.random() * compOptions.length);
		return compOptions[random];
	}

	const win = (pSel === r && compSel === s) || (pSel === p && compSel === r) || (pSel === s && compSel === p),
				draw = pSel === compSel,
				lose = !win && !draw,	
				winRoundText = () => result.textContent = `You win the round! ${pSel} beats ${compSel}! Your score is ${tally}`,
				loseRoundText = () => result.textContent = `You lost the round! ${compSel} beats ${pSel}! Your score is ${tally}`, 
				roundDrawText = () => result.textContent = `The round is a draw! Your score is ${tally}`,
				victory = () => result.textContent = `Your score is ${tally}. YOU WON THE GAME!`,
				defeat = () => result.textContent =`Your score is ${tally}. YOU LOST THE GAME!`,
				undecided = () => result.textContent = `Your score is ${tally}. BOOOORING! It's a draw.`;			

	const winRound = function() {
		if (win) {
			tally++;
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
	const winThree = function() {
		if (tally === 3) {
			winRound();
			victory();
		} else {
			return;
		}
	}
	const loseThree = function() {
		if (tally === -3) {
			loseRound();
			defeat();
		} else {
			return;
		} 
	}
	
	fullGame();
	function fullGame() {
		let gameResult = false;
		winThree();
		loseThree();			
		determineIfGameEnd();
		
		function determineIfGameEnd() {
			if (numberOfRounds === 5) {
				winRound();
				loseRound();
				roundDraw();
				if (tally > 0) victory() && (gameResult = true);
				if (tally < 0) defeat() && (gameResult = true);
				if (tally === 0) undecided() && (gameResult = true); 
				container.appendChild(result); 
				createReplayButton();
			}	else {
					winRound();
					loseRound();
					roundDraw();
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
			if(gameResult === true) {
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