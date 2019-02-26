import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

// Components
import AppBar from './AppBar';
import ChessPieceButton from './ChessPieceButton'
import ChessPiecesList from './ChestPiecesList'
import ChessPiecesListItem from './ChestPiecesListItem'
import ComboList from './ComboList'
import chessPieces from './chessPieces'

import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '90vw',
    margin: '20px auto 20px auto',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function App(props) {

  const [pieces, setPieces] = useState('');

  const [beastPieces, setBeastPieces] = useState(0);
  const [demonPieces, setDemonPieces] = useState(0);
  const [dwarfPieces, setDwarfPieces] = useState(0);
  const [dragonPieces, setDragonPieces] = useState(0);
  const [elementPieces, setElementPieces] = useState(0);
  const [elfPieces, setElfPieces] = useState(0);
  const [goblinPieces, setGoblinPieces] = useState(0);
  const [humanPieces, setHumanPieces] = useState(0);
  const [nagaPieces, setNagaPieces] = useState(0);
  const [ogrePieces, setOgrePieces] = useState(0);
  const [orcPieces, setOrcPieces] = useState(0);
  const [trollPieces, setTrollPieces] = useState(0);
  const [undeadPieces, setUndeadPieces] = useState(0);

  const [assassinPieces, setAssassinPieces] = useState(0);
  const [demonhunterPieces, setDemonhunterPieces] = useState(0);
  const [druidPieces, setDruidPieces] = useState(0);
  const [hunterPieces, setHunterPieces] = useState(0);
  const [knightPieces, setKnightPieces] = useState(0);
  const [magePieces, setMagePieces] = useState(0);
  const [mechPieces, setMechPieces] = useState(0);
  const [shamanPieces, setShamanPieces] = useState(0);
  const [warlockPieces, setWarlockPieces] = useState(0);
  const [warriorPieces, setWarriorPieces] = useState(0);

  const [sortClass, setSortClass] = useState(false);

  useEffect(() => {
    document.title = pieces.length;

    if (pieces) checkSpecies([...new Set(pieces)]);
    // console.log(pieces);
  })


  const { classes } = props;


  function chessClicked(item) {
    setPieces([...pieces, item]);
  }

  function removeChessClicked(item,i) {

    pieces.splice(i-1,1)

    setPieces([...pieces]);
  }

  function checkSpecies(pieces) {
    console.log(pieces);

    // Species
    setBeastPieces(pieces.filter(x => x.species.find((x) => x === 'Beast')).length);
    setDemonPieces(pieces.filter(x => x.species.find((x) => x === 'Demon')).length);
    setDwarfPieces(pieces.filter(x => x.species.find((x) => x === 'Dwarf')).length);
    setDragonPieces(pieces.filter(x => x.species.find((x) => x === 'Dragon')).length);
    setElementPieces(pieces.filter(x => x.species.find((x) => x === 'Element')).length);
    setElfPieces(pieces.filter(x => x.species.find((x) => x === 'Elf')).length);
    setGoblinPieces(pieces.filter(x => x.species.find((x) => x === 'Goblin')).length);
    setHumanPieces(pieces.filter(x => x.species.find((x) => x === 'Human')).length);
    setNagaPieces(pieces.filter(x => x.species.find((x) => x === 'Naga')).length);
    setOgrePieces(pieces.filter(x => x.species.find((x) => x === 'Ogre')).length);
    setOrcPieces(pieces.filter(x => x.species.find((x) => x === 'Orc')).length);
    setTrollPieces(pieces.filter(x => x.species.find((x) => x === 'Troll')).length);
    setUndeadPieces(pieces.filter(x => x.species.find((x) => x === 'Undead')).length);

    // Classes
    setAssassinPieces(pieces.filter(x => x.class.find((x) => x === 'Assassin')).length);
    setDemonhunterPieces(pieces.filter(x => x.class.find((x) => x === 'Demon Hunter')).length);
    setDruidPieces(pieces.filter(x => x.class.find((x) => x === 'Druid')).length);
    setHunterPieces(pieces.filter(x => x.class.find((x) => x === 'Hunter')).length);
    setKnightPieces(pieces.filter(x => x.class.find((x) => x === 'Knight')).length);
    setMagePieces(pieces.filter(x => x.class.find((x) => x === 'Mage')).length);
    setMechPieces(pieces.filter(x => x.class.find((x) => x === 'Mech')).length);
    setShamanPieces(pieces.filter(x => x.class.find((x) => x === 'Shaman')).length);
    setWarlockPieces(pieces.filter(x => x.class.find((x) => x === 'Warlock')).length);
    setWarriorPieces(pieces.filter(x => x.class.find((x) => x === 'Warrior')).length);

  }

  function toggleSort (e) {
    console.log(e);

    setSortClass(!sortClass);


  }


  return (
    <div className="App">
      <AppBar />

      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={9}>

            <Grid container spacing={24}>

              <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                  Current Squad
              </Typography>
              <Grid container spacing={24} id="currentSquad">

                  {
                   pieces ?
                     pieces.map(function (item, i) {
                        // console.log(item);

                       let species = item.species.join(" ") || item.species;
                       let classes = item.class.join(" ") || item.class;
                        // let classes = item.classes.join(" ") || item.classes; removeChessClicked

              
              return <Grid item xs={3} key={i}>
                       <ChessPiecesListItem item={item} itemIndex={i} name={item.name} chessClicked={removeChessClicked} className={`${species.toLowerCase()} ${classes.toLowerCase()}`} key={i} />
                      </Grid>
                     })
                     : 'Select pieces below to add to your team'
                 }
                </Grid>
                 


                <Typography variant="h2" gutterBottom>
                  Chess Pieces
                  <Button variant="contained" className={classes.button} onClick={toggleSort}>
                    Re-sort
                  </Button>
                </Typography>

                <ChessPiecesList chesspieces={chessPieces} chessClicked={chessClicked} sortClass={sortClass}/>
 
                 
              </Grid>


            </Grid>


          </Grid>
          <Grid item xs={3}>


            <Typography variant="h2" gutterBottom>
              Combo List

              </Typography>

              <ComboList 
                beastPieces={beastPieces}
                demonPieces={demonPieces}
                dwarfPieces={dwarfPieces}
                dragonPieces={dragonPieces}
                elementPieces={elementPieces}
                elfPieces={elfPieces}
                goblinPieces={goblinPieces}
                humanPieces={humanPieces}
                nagaPieces={nagaPieces}
                ogrePieces={ogrePieces}
                orcPieces={orcPieces}
                trollPieces={trollPieces}
                undeadPieces={undeadPieces}

                assassinPieces={assassinPieces}
                demonhunterPieces={demonhunterPieces}
                druidPieces={druidPieces}
                hunterPieces={hunterPieces}
                knightPieces={knightPieces}
                magePieces={magePieces}
                mechPieces={mechPieces}
                shamanPieces={shamanPieces}
                warlockPieces={warlockPieces}
                warriorPieces={warriorPieces}
                />

          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default withStyles(styles)(App);