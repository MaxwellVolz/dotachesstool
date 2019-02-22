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
import ComboList from './ComboList'
import chessPieces from './chessPieces'


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

  useEffect(() => {
    document.title = pieces.length;

    if (pieces) checkSpecies(pieces);
    // console.log(pieces);

    console.log(beastPieces)
  })


  const { classes } = props;


  function chessClicked(item) {
    setPieces([...pieces, item]);
  }

  function checkSpecies(pieces) {
    console.log(pieces);


    console.log(pieces.filter(x => x.species.find((x) => x === 'Beast')).length)

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


    // pieces.map(function (item, i) {

    //   switch(item.species){

    //   }
    // }
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


                <ChessPiecesList chesspieces={chessPieces} chessClicked={chessClicked} />
 
                 {
                   pieces ?
                     pieces.map(function (item, i) {
                        // console.log(item);

                       let species = item.species.join(" ") || item.species;
                        // let classes = item.classes.join(" ") || item.classes; 

                       return <ChessPieceButton item={item} name={item.name} chessClicked={chessClicked} className={`${species.toLowerCase()} ${item.class.toLowerCase()}`} key={i} />

                     })
                     : 'Select pieces below to add to your team'
                 }
              </Grid>

              <Grid item xs={12}>

                <Typography variant="h2" gutterBottom>
                  Chess Pieces
              </Typography>
              </Grid>


              {
                chessPieces.map(function (item, i) {
                  // console.log(item); 

                  let species = item.species.join(" ") || item.species;
                  let classes = item.species.join(" ") || item.species; // unnecessary because each piece can only have 1 class

                  return <ChessPieceButton item={item} name={item.name} chessClicked={chessClicked} className={`${species.toLowerCase()} ${classes.toLowerCase()}`} key={i} />

                })
              }
            </Grid>


          </Grid>
          <Grid item xs={3}>


            <Typography variant="h2" gutterBottom>
              Combo List
              </Typography>

              <ComboList 
                beastPieces={beastPieces}
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
                
                />

          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default withStyles(styles)(App);