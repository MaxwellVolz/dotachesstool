import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChessPieceTable from './Components/ChessPieceTable';
import CurrentTeam from './Components/CurrentTeamTable';
import Combos from './Components/CombosTable';

import autochesspieces from './chessPieces';

import Button from '@material-ui/core/Button';

import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';

let currentChessPieces = [];

let currentCombos = [];

let binaryHash = "000000000000000000000000000000000000000000000000000000000000";



export default class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    currentPieces: [],
    combos: [],
    runTutorial: false,
    stepIndex: 0,
    steps: [
      {
        target: '#chessPiecesContainer',
        content: 'Click to add pieces to your team',
        disableBeacon: true,
        status: 'running',
      },
      {
        target: '.currentTeamTable',
        content: 'Review and click to remove pieces',
        disableBeacon: true,
        status: 'running',
      },
      {
        target: '#comboSection',
        content: 'Combos will light up when they are activated',
        disableBeacon: true,
        status: 'finished',
      }
    ]
  }

  componentDidMount() {
    let cleanHash = window.location.hash.split("#")[1] || "";

    for (let i = 0; i < cleanHash.length; i++) {
      if (cleanHash[i] == 1) {
        this.chessPieceChosen(autochesspieces.find((x) => x.id === i, true))
      }
    }
  }

  componentDidUpdate() {

  }

  startTutorial =() =>{

    this.setState({ runTutorial: true })

  }


  chessPieceChosen = (chessPiece, deferUpdate) => {
    if (this.state.currentPieces.includes(chessPiece)) return;

    if (this.state.currentPieces.length > 20) return;

    this.state.currentPieces.push(chessPiece);

    // console.log(this.state.currentPieces);

    console.log("defer? " + deferUpdate)

    if (deferUpdate) this.updateHash(this.state.currentPieces);

    this.childCombo.refresh()
    this.child.refresh()
  }

  chessPieceUnchosen = chessPiece => {
    if (!this.state.currentPieces.includes(chessPiece)) return;

    let nowPieces = this.state.currentPieces.filter(function (piece) {
      return piece !== chessPiece;
    })


    this.setState({ currentPieces: nowPieces })
    this.updateHash(nowPieces);

    this.child.refresh()
    this.childCombo.refresh()
  }

  updateHash(currentPieces) {

    console.log('updating Hash');


    let pieceIDs = currentPieces.map(a => a.id);

    let binaryHash = "000000000000000000000000000000000000000000000000000000000000";

    for (let i = 0; i < pieceIDs.length; i++) {
      binaryHash = binaryHash.substr(0, pieceIDs[i]) + "1" + binaryHash.substr(pieceIDs[i] + 1);
    }

    window.location.hash = binaryHash;

    console.log('window.location.hash');
    console.log(window.location.hash);
  }
  handleJoyrideCallback = data => {
    const { action, index, status, type } = data;


    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      this.setState({ stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) });
    }
    else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.

      this.setState({ runTutorial: false, stepIndex: 0 });
    }

    console.groupCollapsed(type);
    console.log(data); //eslint-disable-line no-console
    console.groupEnd();
  }

  render() {
    let customStyles = {
        options: {
        arrowColor: '#fff',
        backgroundColor: '#fff',
        primaryColor: '#f04',
        textColor: '#333',
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        beaconSize: 36,
        zIndex: 100,
      }
    }
    return (
      <div className="App">
          <Joyride 
            run={this.state.runTutorial}
            steps={this.state.steps}
            stepIndex={this.state.stepIndex}
            styles={customStyles}
            callback={this.handleJoyrideCallback}
           />

        <div id="mainContent">

          <Button variant="contained" color="primary" size="small" className="tutorialButton"
            onClick={this.startTutorial}
          >
          Tutorial
          </Button>
          < ChessPieceTable chessPieceChosenFired={this.chessPieceChosen} />

          < Combos currentChessPieces={this.state.currentPieces} onRef={ref => (this.childCombo = ref)} />
          < CurrentTeam chessPieceUnchosenFired={this.chessPieceUnchosen} currentChessPieces={this.state.currentPieces} onRef={ref => (this.child = ref)} />

        </div>
      </div>
    );
  }
}

