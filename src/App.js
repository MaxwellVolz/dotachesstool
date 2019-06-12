import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChessPieceTable from './Components/ChessPieceTable';
import CurrentTeam from './Components/CurrentTeamTable';
import Combos from './Components/CombosTable';
import autochesspieces from './chessPieces';

let currentChessPieces = [];

let currentCombos = [];

let binaryHash = "000000000000000000000000000000000000000000000000000000000000";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPieces: [],
      combos: []
    };
  }

  componentDidMount() {
      let cleanHash = window.location.hash.split("#")[1] || "";

      for (let i = 0; i < cleanHash.length; i++) {
        if (cleanHash[i] == 1) {
          this.chessPieceChosen(autochesspieces.find((x) => x.id === i,true))
        }
      }
  }

  componentDidUpdate() {

  }


  chessPieceChosen = (chessPiece,deferUpdate) => {
    if (this.state.currentPieces.includes(chessPiece)) return;

    if(this.state.currentPieces.length > 18) return;

    this.state.currentPieces.push(chessPiece);

    // console.log(this.state.currentPieces);

    if(deferUpdate) this.updateHash(this.state.currentPieces);

    this.childCombo.refresh()
    this.child.refresh()
  }

  updateHash(currentPieces) {

    let pieceIDs = currentPieces.map(a => a.id);

    let binaryHash = "000000000000000000000000000000000000000000000000000000000000";

    for (let i = 0; i < pieceIDs.length; i++) {
      binaryHash = binaryHash.substr(0, pieceIDs[i]) + "1" + binaryHash.substr(pieceIDs[i] + 1);
    }

    window.location.hash = binaryHash;

    console.log('window.location.hash');
    console.log(window.location.hash);
  }

  chessPieceUnchosen = (chessPiece) => {
    if (!this.state.currentPieces.includes(chessPiece)) return;

    let nowPieces = this.state.currentPieces.filter(function (piece) {
      return piece !== chessPiece;
    })


    this.setState({ currentPieces: nowPieces })
    this.updateHash(nowPieces);

    this.child.refresh()
    this.childCombo.refresh()
  }

  render() {
    return (
      <div className="App">
        <div id="mainContent">

          < ChessPieceTable chessPieceChosenFired={this.chessPieceChosen} />
          < CurrentTeam chessPieceUnchosenFired={this.chessPieceUnchosen} currentChessPieces={this.state.currentPieces} onRef={ref => (this.child = ref)} />
          < Combos currentChessPieces={this.state.currentPieces} onRef={ref => (this.childCombo = ref)} />

        </div>
      </div>
    );
  }
}

export default App;
