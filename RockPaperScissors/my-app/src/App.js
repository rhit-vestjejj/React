import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <MainBox />
      </div>
    </>
  );
}

function MainBox() {
  return (
    <header className="App-header">
      <div id='box'>
        <h1 id='Title'><strong>Welcome to rock, paper, scissors</strong></h1>
        <Game />
      </div>
    </header>
  );
}

function Game() {
  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function Buttons() {

    const handleClick = (playerChoice) => {
      const computerRandom = Math.random();
      const computerChoice = computerRandom > 0.66 ? "Rock" : computerRandom > 0.33 ? "Paper" : "Scissors";
      setPlayerChoice(playerChoice);
      setComputerChoice(computerChoice);
      checkWin(playerChoice, computerChoice);
    };

    return (
      <div class = "buttons-container">
        <button id = "rock" onClick={() => handleClick("Rock")}>✊Rock</button>
        <button id = "paper" onClick={() => handleClick("Paper")}>🖐️Paper</button>
        <button id = "scissors" onClick={() => handleClick("Scissors")}>✌️Scissors</button>
      </div>
    );
  }

  function checkWin() {
    if((computerChoice === "Rock" && playerChoice === "Scissors") || 
    (computerChoice === "Paper" && playerChoice === "Rock") || 
    (computerChoice === "Scissors" && playerChoice === "Paper")){
      setComputerScore(computerScore + 1);
    } else if((playerChoice === "Rock" && computerChoice === "Scissors") || 
    (playerChoice === "Paper" && computerChoice === "Rock") || 
    (playerChoice === "Scissors" && computerChoice === "Paper")){
      setPlayerScore(playerScore + 1);
    }
  }

  function YourTurn() {
    return (
      <div class = "pText">
        Your choice: {playerChoice}
      </div>
    );
  }

  function ComputerTurn() {
    return (
      <div class = "pText">
        Computer choice: {computerChoice}
      </div>
    );
  }

  function PlayerScore() {
    return (
      <div class = "pText">
        Your score: {playerScore}
      </div>
    );
  }

  function ComputerScore() {
    return (
      <div class = "pText">
        Computer score: {computerScore}
      </div>
    );
  }

  return (
    <div>
      <Buttons />
      <br />
      <YourTurn />
      <br />
      <ComputerTurn />
      <br />
      <PlayerScore />
      <br />
      <ComputerScore />
    </div>
  );
}

export default App;
