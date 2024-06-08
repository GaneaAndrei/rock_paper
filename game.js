let playerScore=0;
let computerScore=0;
let playerChoice=''
const rock=document.getElementById('rock')
const paper=document.getElementById('paper')
const scissors=document.getElementById('scissors')
const container=document.getElementById("display")

rock.addEventListener('click',()=>{
    playerChoice="rock"
    console.log("player a ales",playerChoice)
    playRound(playerChoice);
   
   
})

paper.addEventListener('click',()=>{
    playerChoice="paper"
    console.log("player a ales",playerChoice)
    playRound(playerChoice);
   
})
scissors.addEventListener('click',()=>{
    playerChoice="scissors"
    console.log("player a ales",playerChoice)
    playRound(playerChoice);

    
})

function getComputerChoice()
{
    const choices=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playRound(playerChoice)
{ 
 

    let computerSelection=getComputerChoice();
    console.log("computer a ales",computerSelection);
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



/*function showWinner()
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
*/
