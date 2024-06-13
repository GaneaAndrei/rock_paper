let playerScore=0;
let computerScore=0;
let playerChoice=''
const rock=document.getElementById('rock')
const paper=document.getElementById('paper')
const scissors=document.getElementById('scissors')
const container=document.getElementById("display")


rock.addEventListener('click',()=>{
    playerChoice="rock"

    playRound(playerChoice);
   showWinner()
   
})

paper.addEventListener('click',()=>{
    playerChoice="paper"

    playRound(playerChoice);
    showWinner()
})
scissors.addEventListener('click',()=>{
    playerChoice="scissors"

    playRound(playerChoice);
    showWinner()
    
})

function getComputerChoice()
{
    const choices=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playRound(playerChoice)
{ 
    const result=document.querySelector('.roundResult')
    const playerBoardScore=document.querySelector('.playerCount')
    let computerSelection=getComputerChoice();
    const computerScoreBoard = document.querySelector('.computerCount');

    if(computerSelection==playerChoice)
    {

        
        result.textContent="Tie"
    }
     if(computerSelection=="paper"&&playerChoice=="rock"){

        computerScore++;
        computerScoreBoard.textContent = computerScore;
        result.textContent="Computer Win"
    }
     if(computerSelection=="rock"&&playerChoice=="scissors")
    {

        computerScore++;
        computerScoreBoard.textContent = computerScore;
        result.textContent="Computer Win"
    }
     if(computerSelection=="scissors"&&playerChoice=="paper")
    {

        computerScore++;
        computerScoreBoard.textContent = computerScore;
        result.textContent="Computer Win"
    }
     if(computerSelection=="paper"&&playerChoice=="scissors")
    {

        playerScore++;
        playerBoardScore.textContent = playerScore;
        result.textContent="Player Win"
    }
     if(computerSelection=="rock"&&playerChoice=="paper")
    {

        playerScore++;
        playerBoardScore.textContent = playerScore;
        result.textContent="Player Win"
    }
     if (computerSelection=="scissors"&&playerChoice=="rock")
    {

        playerScore++;
        playerBoardScore.textContent = playerScore;
        result.textContent="Player Win"
    }
 
}



function showWinner()
{ const result=document.querySelector('.roundResult')
    if(computerScore==5 &&playerScore<computerScore)
    {
        result.textContent="Computer Won all 5 matches"
    }
    else if(playerScore==5 && playerScore>computerScore)
    {
        result.textContent="Player Won all 5 matches"
    }
}

