const button = document.getElementById('button2');
const content = document.getElementById('content2');

const score = {
    wins: 0,
    losses: 0,
    ties: 0,
}; 


const select = {
    choice1: "rock", 
    choice2: "paper",
    choice3: "scissor"
};

function computerMove() {
    const randomNumber = Math.floor( Math.random() * 3);
    if ( randomNumber === 0) {
        console.log(`The computer selected ${select.choice1}`);
        return select.choice1;

    } else if (randomNumber === 1) {
        console.log(`The computer selected ${select.choice2}`);
        return select.choice2;

    } else {
        console.log(`The computer selected ${select.choice3}`);
        return select.choice3;
    };


};
  


function rockPaperScissor(){
    console.log(score);
    let playerChoice = prompt("what is your choice?");
    const value = computerMove();

    if(playerChoice === value) {
        alert("TIE");
        score.ties += 1;
        return;
    }

    if (playerChoice === select.choice1) {
        console.log(`${select.choice1} was chosen`);
        
        if (value === select.choice2) {
            alert("YOU LOSE");
            score.losses += 1;
        } else {
            alert("YOU WIN");
            score.wins += 1;
        }

    } else if (playerChoice === select.choice2){
        console.log(`${select.choice2} was chosen`);
        
        if (value === select.choice3) {
            alert("YOU LOSE");
            score.losses += 1;
        } else {
            alert("YOU WIN");
            score.wins += 1;
        }

    } else if (playerChoice ===  select.choice3) {
        console.log(`${select.choice3} was chosen`);
        
        if ( value === select.choice1) {
            alert("YOU LOSE");
            score.losses += 1;
        } else {
            alert("YOU WIN");
            score.wins += 1;
        } 
    } else {
        alert("Invalid choice. Type rock, paper, or scissor.");
        return
    };


};


button.addEventListener('click', rockPaperScissor)


