

let playerScore=0;
let computerScore=0;

function getComputerChoice()
{
    const choices=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playRound()
{ 
 
    let playerChoice=prompt("Enter your choice:").toLowerCase();
    let computerSelection=getComputerChoice();
    if(computerSelection==playerChoice)
    {
        let message="Tie";
        return message;
    }
     if(computerSelection=="paper"&&playerChoice=="rock"){
       let message="You lose"
        computerScore++;
        return message;
    }
     if(computerSelection=="rock"&&playerChoice=="scissors")
    {
       let message="You lose";
        computerScore++;
        return message;
    }
     if(computerSelection=="scissors"&&playerChoice=="paper")
    {
       let message="You lose";
        computerScore++;
        return message;
    }
     if(computerSelection=="paper"&&playerChoice=="scissors")
    {
       let message="You won";
        playerScore++;
        return message;
    }
     if(computerSelection=="rock"&&playerChoice=="paper")
    {
       let message="You won";
        playerScore++;
        return message;
    }
     if (computerSelection=="scissors"&&playerChoice=="rock")
    {
      let  message="You won";
        playerScore++;
        return message;
    }
    
}



function showWinner()
{
    if(computerScore>playerScore)
    {
        console.log("You lost the match");
    }
    else if(playerScore>computerScore)
    {
        console.log("You won the match");
    }
}

function playGame()
{
    console.log(playRound());
if(playerScore<5 && computerScore<5)
{
    playGame();
}
else
{
    showWinner();
}


}
playGame();


