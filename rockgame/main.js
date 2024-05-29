const ratio = document.querySelectorAll("input[type='radio']");
const choices = ["rock", "paper", "scissors"];
const resultContainer = document.getElementById("resultcontainer")
const attemptSpan = document.getElementById("attemptspan")

function computerchoice(){
    const randomindex = Math.floor(Math.random() * 3);
    return choices [randomindex];
}

let results = [];
let attempts = [];
let Youwin = [];
let computerwin = [];

ratio.forEach((ratiobtn) => {
    ratiobtn.addEventListener("change", () => {
        const userchoice  = getSelectedChoice();

        if(attempts < 3){
            if(userchoice){
                const compChoice = computerchoice();
                const outcome = determineOutcome(userchoice, compChoice);
                addResult(outcome);
                attempts++;
                updateDisplay();
               }
           }

    });
})


function getSelectedChoice () {
    const selectedChoice = document.querySelector('input[name="choice"]:checked').value;
    return selectedChoice;
}

function determineOutcome(userChoice, compChoice) {
    if (userChoice === compChoice) {
        
        return "It's a tie!";
        Youwin++
        computerwin++
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        return `You win! `;
        Youwin++;
    } else {
        return `Computer wins! `;
        computerwin++;
    }
    if(Youwin===computerwin){
        console.log("Its a tie")
    }
    else{
        if(Youwin > computerwin){
            console.log("YOUWIN");
            addResult(outcome);
            // results.push(outcome);
    
        
        }else{
            console.log( "COMPUTER WIN");
            addResult(outcome);
            // results.push(outcome);
        }
    }
}

function addResult(outcome) {
    results.push(outcome);
}

function updateDisplay() {
    resultContainer.innerHTML = ""
    attemptSpan.innerText = attempts
    results.forEach((res) => {
        resultContainer.innerHTML += `<p>${res}</p>`
    })
}