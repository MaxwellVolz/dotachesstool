import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Badge from '@material-ui/core/Badge';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import Paper from '@material-ui/core/Paper';

import autochesspieces from '../../chessPieces';

import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        marginLeft: '0.5%',
        position: 'absolute',
        top: '65vh',
        left: '78vw',
        width: '21vw',
        height: '24vh',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'hidden',
    },
    table: {
        // width: '18%',
        float: 'left',
        margin: '0 1%'
    },
    row: {
        height: '28px',
        width: '100%',
    },
    margin: {
        margin: '12px 12px 0 0',
    },
});


const table1 = autochesspieces.slice(0, 4);

let currCombos = {};

let beastCount = 0;
let demonCount = 0;
let dwarfCount = 0;
let dragonCount = 0;
let elementCount = 0;
let elfCount = 0;
let goblinCount = 0;
let humanCount = 0;
let nagaCount = 0;
let ogreCount = 0;
let orcCount = 0;
let trollCount = 0;
let undeadCount = 0;

let assassinCount = 0;
let demonhunterCount = 0;
let druidCount = 0;
let hunterCount = 0;
let knightCount = 0;
let mageCount = 0;
let mechCount = 0;
let shamanCount = 0;
let warlockCount = 0;
let warriorCount = 0;

class Combos extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    toggleHoverEnter(e) {

        let classNames = e.target.className.split(" ");

        let classToHighlight = classNames[classNames.length - 1]

        let elemsToHighlight = document.getElementsByClassName(classToHighlight);

        let i;
        for (i = 0; i < elemsToHighlight.length; i++) {
            elemsToHighlight[i].style.backgroundColor = "#1319";
        }
        //.addClass("highlit");
    }

    toggleHoverExit(e) {

        let classNames = e.target.className.split(" ");

        let classToHighlight = classNames[classNames.length - 1]

        let elemsToHighlight = document.getElementsByClassName(classToHighlight);

        let i;
        for (i = 0; i < elemsToHighlight.length; i++) {
            elemsToHighlight[i].style.backgroundColor = "#13191a";
        }
        //.removeClass("highlit");
    }

    pieceClicked = (e) => {

        let piece = autochesspieces.find(function (element) {
            return element.name == e.target.innerHTML;
        });

        this.props.chessPieceUnchosenFired(piece);
        // console.log(piece);
    }

    refresh() {
        console.log("refreshing")
        console.log(this.props.specCombos)

        this.forceUpdate()
    }


    render() {
        const { classes } = this.props;

        // let combos = this.props.combos || [];
        console.log("this.props.currentChessPieces.filter.. ")
        // console.log(this.unique(this.props.currentChessPieces.map(piece => piece.species === "Beast")))
        // console.log(this.props.currentChessPieces.filter(piece => piece.species.toString === "Beast"))


        let piecesAmount = this.props.currentChessPieces.length;

        beastCount = 0;
        demonCount = 0;
        dwarfCount = 0;
        dragonCount = 0;
        elementCount = 0;
        elfCount = 0;
        goblinCount = 0;
        humanCount = 0;
        nagaCount = 0;
        ogreCount = 0;
        orcCount = 0;
        trollCount = 0;
        undeadCount = 0;

        
        assassinCount = 0;
        demonhunterCount = 0;
        druidCount = 0;
        hunterCount = 0;
        knightCount = 0;
        mageCount = 0;
        mechCount = 0;
        shamanCount = 0;
        warlockCount = 0;
        warriorCount = 0;


        for (let i = 0; i < piecesAmount; i++) {
            console.log(this.props.currentChessPieces[i].species)
            if (this.props.currentChessPieces[i].species.indexOf('Beast') >= 0)++beastCount;
            if (this.props.currentChessPieces[i].species.indexOf('Demon') >= 0)++demonCount;
            if (this.props.currentChessPieces[i].species.indexOf('Dwarf') >= 0)++dwarfCount;
            if (this.props.currentChessPieces[i].species.indexOf('Dragon') >= 0)++dragonCount;
            if (this.props.currentChessPieces[i].species.indexOf('Element') >= 0)++elementCount;
            if (this.props.currentChessPieces[i].species.indexOf('Elf') >= 0)++elfCount;
            if (this.props.currentChessPieces[i].species.indexOf('Goblin') >= 0)++goblinCount;
            if (this.props.currentChessPieces[i].species.indexOf('Human') >= 0)++humanCount;
            if (this.props.currentChessPieces[i].species.indexOf('Naga') >= 0)++nagaCount;
            if (this.props.currentChessPieces[i].species.indexOf('Ogre') >= 0)++ogreCount;
            if (this.props.currentChessPieces[i].species.indexOf('Orc') >= 0)++orcCount;
            if (this.props.currentChessPieces[i].species.indexOf('Troll') >= 0)++trollCount;
            if (this.props.currentChessPieces[i].species.indexOf('Undead') >= 0)++undeadCount;

            if (this.props.currentChessPieces[i].class.indexOf('Assassin') >= 0)++assassinCount;
            if (this.props.currentChessPieces[i].class.indexOf('Demonhunter') >= 0)++demonhunterCount;
            if (this.props.currentChessPieces[i].class.indexOf('Druid') >= 0)++druidCount;
            if (this.props.currentChessPieces[i].class.indexOf('Hunter') >= 0)++hunterCount;
            if (this.props.currentChessPieces[i].class.indexOf('Knight') >= 0)++knightCount;
            if (this.props.currentChessPieces[i].class.indexOf('Mage') >= 0)++mageCount;
            if (this.props.currentChessPieces[i].class.indexOf('Mech') >= 0)++mechCount;
            if (this.props.currentChessPieces[i].class.indexOf('Shaman') >= 0)++shamanCount;
            if (this.props.currentChessPieces[i].class.indexOf('Warlock') >= 0)++warlockCount;
            if (this.props.currentChessPieces[i].class.indexOf('Warrior') >= 0)++warriorCount;
        }


    




        console.log("beastCount: " + beastCount);



        console.log(beastCount)
        return (


            <Paper className={classes.root}>

                <div id="combosTable">
                    {
                        beastCount > 0 ? <Badge key={0} className={classes.margin} badgeContent={beastCount}
                            color="primary">
                            <Chip
                                avatar={<Avatar alt="Natacha" src={require(`./Combos/beast.png`)} />}
                                label={`Beasts`}
                                // onDelete={handleDelete}
                                className={`beast ${classes.chip}`}

                                // className={classes.chip} 
                                variant="outlined"
                            />
                        </Badge>
                            : ''
                    }

                    {
                        demonCount > 0 ?
                            <Badge key={1} className={classes.margin} badgeContent={demonCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/demon.png`)} />}
                                    label={`Demons`}
                                    // onDelete={handleDelete}
                                    className={`demon ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        dwarfCount > 0 ?
                            <Badge key={2} className={classes.margin} badgeContent={dwarfCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/dwarf.png`)} />}
                                    label={`Dwarves`}
                                    // onDelete={handleDelete}
                                    className={`dwarf ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        dragonCount > 0 ?
                            <Badge key={3} className={classes.margin} badgeContent={dragonCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/dragon.png`)} />}
                                    label={`Dragons`}
                                    // onDelete={handleDelete}
                                    className={`dragon ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        elementCount > 0 ?
                            <Badge key={4} className={classes.margin} badgeContent={elementCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/element.png`)} />}
                                    label={`Elementals`}
                                    // onDelete={handleDelete}
                                    className={`element ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        elfCount > 0 ?
                            <Badge key={5} className={classes.margin} badgeContent={elfCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/elf.png`)} />}
                                    label={`Elves`}
                                    // onDelete={handleDelete}
                                    className={`elf ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        goblinCount > 0 ?
                            <Badge key={6} className={classes.margin} badgeContent={goblinCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/goblin.png`)} />}
                                    label={`Goblins`}
                                    // onDelete={handleDelete}
                                    className={`goblin ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        humanCount > 0 ?
                            <Badge key={7} className={classes.margin} badgeContent={humanCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/human.png`)} />}
                                    label={`Humans`}
                                    // onDelete={handleDelete}
                                    className={`human ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        nagaCount > 0 ?
                            <Badge key={8} className={classes.margin} badgeContent={nagaCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/naga.png`)} />}
                                    label={`Nagas`}
                                    // onDelete={handleDelete}
                                    className={`naga ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        ogreCount > 0 ?
                            <Badge key={9} className={classes.margin} badgeContent={ogreCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/ogre.png`)} />}
                                    label={`Ogres`}
                                    // onDelete={handleDelete}
                                    className={`ogre ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        orcCount > 0 ?
                            <Badge key={10} className={classes.margin} badgeContent={orcCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/orc.png`)} />}
                                    label={`Orcs`}
                                    // onDelete={handleDelete}
                                    className={`orc ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        trollCount > 0 ?
                            <Badge key={11} className={classes.margin} badgeContent={trollCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/troll.png`)} />}
                                    label={`Trolls`}
                                    // onDelete={handleDelete}
                                    className={`troll ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }

                    {
                        undeadCount > 0 ?
                            <Badge key={12} className={classes.margin} badgeContent={undeadCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/undead.png`)} />}
                                    label={`Undead`}
                                    // onDelete={handleDelete}
                                    className={`undead ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }


        {
            assassinCount > 0 ?
                            <Badge key={13} className={classes.margin} badgeContent={assassinCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/assassin.png`)} />}
                                    label={`Assassins`}
                                    // onDelete={handleDelete}
                                    className={`assassin ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            demonhunterCount > 0 ?
                            <Badge key={14} className={classes.margin} badgeContent={demonhunterCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/demonhunter.png`)} />}
                                    label={`Demonhunters`}
                                    // onDelete={handleDelete}
                                    className={`demonhunter ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            druidCount > 0 ?
                            <Badge key={15} className={classes.margin} badgeContent={druidCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/druid.png`)} />}
                                    label={`Druids`}
                                    // onDelete={handleDelete}
                                    className={`druid ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            hunterCount > 0 ?
                            <Badge key={16} className={classes.margin} badgeContent={hunterCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/hunter.png`)} />}
                                    label={`Hunters`}
                                    // onDelete={handleDelete}
                                    className={`hunter ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            knightCount > 0 ?
                            <Badge key={17} className={classes.margin} badgeContent={knightCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/knight.png`)} />}
                                    label={`Knights`}
                                    // onDelete={handleDelete}
                                    className={`knight ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            mageCount > 0 ?
                            <Badge key={18} className={classes.margin} badgeContent={mageCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/mage.png`)} />}
                                    label={`Mages`}
                                    // onDelete={handleDelete}
                                    className={`mage ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            mechCount > 0 ?
                            <Badge key={19} className={classes.margin} badgeContent={mechCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/mech.png`)} />}
                                    label={`Mechs`}
                                    // onDelete={handleDelete}
                                    className={`mech ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            shamanCount > 0 ?
                            <Badge key={20} className={classes.margin} badgeContent={shamanCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/shaman.png`)} />}
                                    label={`Shamans`}
                                    // onDelete={handleDelete}
                                    className={`shaman ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            warlockCount > 0 ?
                            <Badge key={21} className={classes.margin} badgeContent={warlockCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/warlock.png`)} />}
                                    label={`Warlocks`}
                                    // onDelete={handleDelete}
                                    className={`warlock ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }
        {
            warriorCount > 0 ?
                            <Badge key={22} className={classes.margin} badgeContent={warriorCount}
                                color="primary">
                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/warrior.png`)} />}
                                    label={`Warriors`}
                                    // onDelete={handleDelete}
                                    className={`warrior ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Badge>
                            : ''
                    }




                </div>


            </Paper>
        );
    }
}

Combos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Combos);