// FUNCTIONS

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return choice
}

function playRound(player, computer) {
    let result = document.createElement('p');
    if (player === computer) {
        result.textContent = "You draw!";
        div.appendChild(result);
    }
    else if ((player === 2 && computer === 1 ) || (player === 1 && computer === 0) || (player === 0 && computer === 2)) {
        result.textContent = "You win!";
        div.appendChild(result);
        pScore = playerWin();
        return pScore;
    } else {
        result.textContent = "You lost!";
        div.appendChild(result);
        cScore = compWin();
        return cScore;
    }
}


function playerWin() {
    return ++pScore;
}

function compWin() {
    return ++cScore;
}

function keepScore(pScore, cScore) {
    console.log(`Your Points: ${pScore}, Computer Points: ${cScore}`)
}

function playerSelection(choices, pScore, cScore) {
    let player = 4;
    let choice = document.createElement('p');

    const rock = document.querySelector('.rock');
    rock.addEventListener('click', () => {
        player = 0;
        computer = getComputerChoice();
        choice.textContent = `Player chose ${choices[player]}, Computer chose ${choices[computer]}`;
        let result = playRound(player, computer);
        return result;
    });

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', () => {
        player = 1;
        computer = getComputerChoice();
        choice.textContent = `Player chose ${choices[player]}, Computer chose ${choices[computer]}`;
        let result = playRound(player, computer);
        return result;
    });

    const scissor = document.querySelector('.scissors');
    scissor.addEventListener('click', () => {
        player = 2;
        computer = getComputerChoice();
        choice.textContent = `Player chose ${choices[player]}, Computer chose ${choices[computer]}`;
        let result = playRound(player, computer);
        return result;
    });
    return choice;
}

// MAIN CODE
let pScore = 0;
let cScore = 0;

choices = ['Rock', 'Paper', 'Scissors'];


const body = document.querySelector('body');
const div = document.createElement('div');



body.appendChild(div);

choice = playerSelection(choices, pScore, cScore);
div.appendChild(choice);