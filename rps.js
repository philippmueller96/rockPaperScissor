let player = ""
const choices = ["scissor", "stone", "paper"]
let result = ""
let counterPlayer = 0
let counterComp = 0

//Function playerChoice
function startGame() {
    playerChoice()
}

//Function player picks one
function playerChoice() {
    let playGround = document.getElementById("playground")
    playGround.innerHTML = `
        <h1>What's your choice?</h1>
        <div id="playerChoice">
            <img id="schere" src="schere.png">
            <img id="stein" src="stein.png">
            <img id="papier" src="papier.png">
        </div>
        <div id="points">
            <div>
                <h2>Your points:</h2>
                <h3>${counterPlayer}</h3>
            </div>
            <div>
                <h2>Comp points:</h2>
                <h3>${counterComp}</h3>
            </div>
        </div>
        <button onclick="endGame()">Reset counter</button>

    ` 
    const scis = document.getElementById("schere")
    const ston = document.getElementById("stein")
    const pape = document.getElementById("papier")
    
    scis.addEventListener("click", function() {
        player = "scissor"
        renderPlay()
    })
    
    ston.addEventListener("click", function() {
        player = "stone"
        renderPlay()
    })
    
    pape.addEventListener("click", function() {
        player = "paper"
        renderPlay()
    })    
}


function renderPlay() {
    playGround = document.getElementById("playground")
    let compPick = choices[compChoice(3)]

    if(player === compPick) {
        result = "It's equal."
        console.log(player + " vs " + compPick)
        console.log("Equal")

    } else if(player === "scissor" && compPick === "paper") {
        result = "You won!"
        counterPlayer++
        console.log(player + " vs " + compPick)
        console.log("You won!")

    } else if(player === "paper" && compPick === "stone") {
        result = "You won!"
        counterPlayer++
        console.log(player + " vs " + compPick)
        console.log("You won!")

    } else if(player === "stone" && compPick === "scissor") {
        result = "You won!"
        counterPlayer++
        console.log(player + " vs " + compPick)
        console.log("You won!")

    } else {
        result = "You lost..."
        counterComp++
        console.log(player + " vs " + compPick)
        console.log("You lost.")
    }

    playGround.innerHTML= `
        <h1>${result}</h1>
        <div id="result">
            <div>
                
            </div>
        </div>
        <button onclick="newGame()">Try again?</button>
    `
}

function compChoice(max) {
    return Math.floor(Math.random()*max)
}

//Function newGame
function newGame() {
    playerChoice()
}

function endGame() {
    counterComp = 0
    counterPlayer = 0
    playGround = document.getElementById("playground")
    playGround.innerHTML = `
        <h1>Let's play a round!</h1>
        <button onclick="startGame()">Start</button>
    `
}