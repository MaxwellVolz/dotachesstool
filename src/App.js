import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChessPieceTable from './Components/ChessPieceTable';
import CurrentTeam from './Components/CurrentTeamTable';
import Combos from './Components/CombosTable';

let currentChessPieces = [];

let currentCombos = []


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPieces: [],
      combos: []
    };

    // beastPieces
    // demonPieces
    // dwarfPieces
    // dragonPieces
    // elementPieces
    // elfPieces
    // goblinPieces
    // humanPieces
    // nagaPieces
    // ogrePieces
    // orcPieces
    // trollPieces
    // undeadPieces
  }

  chessPieceChosen = (chessPiece) => {
    if (this.state.currentPieces.includes(chessPiece)) return;

    this.state.currentPieces.push(chessPiece);

    this.checkCombos(this.state.currentPieces)

    console.log(this.state.currentPieces);


    // this.forceUpdate();
    this.child.refresh()

  }

  checkCombos = (currentPieces) => {

    let species = currentPieces.map(piece => piece.species)


    console.log("species")
    console.log(species)

    // this.state.combos = currentCombos;

    // this.setState({combos: currentCombos})



    this.childCombo.refresh()
  }

  chessPieceUnchosen = (chessPiece) => {
    if (!this.state.currentPieces.includes(chessPiece)) return;
    let nowPieces = this.state.currentPieces.filter(function (piece) {
      return piece !== chessPiece;
    })

    this.setState({ currentPieces: nowPieces })

    // this.forceUpdate();
    this.child.refresh()
    this.childCombo.refresh()


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
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
