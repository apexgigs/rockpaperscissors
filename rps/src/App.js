import React, {Component} from 'react';
import PlayerCard from './PlayCard';

class Game extends Component{

  constructor (){
    super();
    this.signs= ["rock", "scissors", "paper"]
    this.state = {
      playerOne:"rock",
      playerTwo:"scissors",
    }
  }

  //this is where our methods are going to live
playGame = () =>{

this.setState({
  playerOne: this.signs[Math.floor(Math.random()*3)],
  playerTwo: this.signs[Math.floor(Math.random()*3)]
})


}

decideWinner = () => {
const playerOne = this.state.playerOne
const playerTwo  = this.state.playerTwo

if(playerOne === playerTwo){
  return = "its a tie"
}
else if ( (playerOne === "rock") && (playerTwo === "scissors") ||
        

)

}
  render(){

    return (

        <div className="container">Place component here
         <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
      </div>
        <div className="winner"> Here is the winner</div>
        <button type="buttom" onClick = {this.playGame}> Play Game </button>

        </div>
    )
  }
}

export default Game;
