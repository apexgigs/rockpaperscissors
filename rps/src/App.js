import React, {Component} from 'react';
import PlayerCard from './PlayCard';

class Game extends Component{

  constructor (){
    super();
    this.signs= ["rock", "scissors", "paper"]
    this.state = {
      playerOne:"",
      playerTwo:"",
    }
  }

  render(){

    return (

        <div className="container">Place component here
         <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
      </div>
        <div className="winner"> Here is the winner</div>
        <button type="buttom"> Play Game </button>

        </div>
    )
  }
}

export default Game;
