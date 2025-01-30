import './App.css';
import { useState } from 'react';

const user = {
  name: 'JP Vestjens',
  imageUrl: '/logo192.png',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isfruit: false, id: 1 },
  { title: 'Garlic', isfruit: false, id: 2 },
  { title: 'Apple', isfruit: true, id: 3 },
];

function App() {
  return (
    <>
      <div style = {{
        textAlign: 'center',
      }}>
        <AboutPage />
        <br />
        <br />
        <br />
        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt={user.name} style = {{
          width: user.imageSize,
          height: user.imageSize,
        }} />
        <br />
        <br />
        <br />
        <MyBotton />
        <br />
        <br />
        <br />
        <Map />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <div style = {{
        textAlign: 'center',
      }}>
        <TicTacToe />
      </div>
    </>
  );
}

function TicTacToe(){
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [isWon, changeWon] = useState(0) //0 = nothing yet, 1 = tie, 2 = win X, 3 = win O
  
  function changeTurn(){
    if(turn === "X"){
      setTurn("O");
    } else {
      setTurn("X");
    }
  }

  function change(index){
    if(isWon === 0){
      let squareList = squares.slice();
      if(squareList[index] == null){
        squareList[index] = turn;
        changeTurn();
      }
      setSquare(squareList);
      checkWin(squareList);
      WinText();
    }
  }

  function checkWin(squareList){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(squareList[a] === squareList[b] && squareList[b] === squareList[c] && squareList[a] === squareList[c] && squareList[a] != null && squareList[b] != null && squareList[c] != null){
        if(squareList[a] === "X"){
          changeWon(2);
        } else {
          changeWon(3);
        }
        return;
      }
    }

    if(isWon === 0 && !squareList.includes(null)){
      changeWon(1);
      return;
    }
  }

  function newGame(){
    changeWon(0);
    setTurn("X");
    setSquare(Array(9).fill(null));
  }

  function WinText(){
    const text1 = <div>
      No-one has won yet
    </div>;
    const text2 = <div>
      X has won
    </div>
    const text3 = <div>
      O has won
    </div>
    const text4 = <div>
      Tie!
    </div>
    if(isWon === 0){
      return text1;
    } else if(isWon === 2){
      return text2;
    } else if(isWon === 3){
      return text3;
    } else {
      return text4;
    }
  }

  return (
    <div>
      <WinText />
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(0)}>{squares[0]}</button>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(1)}>{squares[1]}</button>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(2)}>{squares[2]}</button>
      <br></br>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(3)}>{squares[3]}</button>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(4)}>{squares[4]}</button>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(5)}>{squares[5]}</button>
      <br></br>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(6)}>{squares[6]}</button>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(7)}>{squares[7]}</button>
      <button className = "square" style = {{
        width: 50,
        height: 50,
      }} onClick = {() => change(8)}>{squares[8]}</button>
      <br></br>
      <button onClick = {() => newGame()}>Click to start a new game</button>
    </div>
  );
}

function Map(){
  const list = products.map((product) => (
    <li key = {product.id} style = {{
      color: product.isfruit ? 'red' : 'green',
    }}>{product.title}</li>
  ));

  return (
    <ul>{list}</ul>
  );
}

function MyBotton() {
  const [count, setCount] = useState(0);

  function handleCount(){
    setCount(count + 1);
  }

  return (
    <button onClick = {handleCount}>You have clicked {count} times</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  )
}

export default App;
