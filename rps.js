function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return choice
}

function playerSelection() {
    choice = parseInt(prompt("Choose your figher: Rock - 1, Paper - 2, Scissors - 3")) - 1
    if (choice > 2 || choice < 0) {
        alert("Invalid value")
        return playerSelection()
    }
    return choice
}

function playRound(player, computer) {
    if (player === computer) {
        console.log("You draw!")
    }
    else if ((player === 2 && computer === 1 ) || (player === 1 && computer === 0) || (player === 0 && computer === 2)) {
        console.log("You win!")
    } else {
        console.log("You lost!")
    }
}

function askContinue() {
    choice = prompt("Do you wish to continue? (y/n): ")
    if (choice === "y" || choice === 'Y') {
        return game();
    } else {
        throw new Error("Shutting Down Game.");
    }
}



function game() {
    computer = getComputerChoice();
    player = playerSelection();
    choices = ["Rock", "Paper", "Scissors"];
    console.log(`You chose ${choices[player]} and the computer chose ${choices[computer]}.`);
    playRound(player, computer);
    askContinue();
}

function createElements() {
    const div = document.querySelector('#container');
    div.textContent = "hello";
    const rock = document.createElement('p');
    rock.textContent = 'Rock';
    rock.classList.add('rock');
    const paper = document.createElement('button');
    paper.classList.add('paper');
    const scissors = document.createElement('button');
    scissors.classList.add('scissors');
    div.appendChild(rock, paper, scissors);
}
