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

import Tooltip from '@material-ui/core/Tooltip';


import autochesspieces from '../../chessPieces';

import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        position: 'absolute',
        bottom: '1vh',
        left: '1vw',
        width: '98vw',
        height: '20vh',
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
    customWidth: {
        maxWidth: 500,
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
let godCount = 0;
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
let priestCount = 0;
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
        godCount = 0;
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
        priestCount = 0;
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
            if (this.props.currentChessPieces[i].species.indexOf('God') >= 0)++godCount;
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
            if (this.props.currentChessPieces[i].class.indexOf('Priest') >= 0)++priestCount;
            if (this.props.currentChessPieces[i].class.indexOf('Shaman') >= 0)++shamanCount;
            if (this.props.currentChessPieces[i].class.indexOf('Warlock') >= 0)++warlockCount;
            if (this.props.currentChessPieces[i].class.indexOf('Warrior') >= 0)++warriorCount;
        }







        console.log("beastCount: " + beastCount);



        console.log(beastCount)
        return (


            <Paper id="piecesSection" className={`sectionContainer ${classes.root}`}>
                <h5 style={{ 'margin': 0 }}>Combos</h5>

                <div id="combosTable">
                    {
                        beastCount > 0 ? <Badge key={0} className={classes.margin} badgeContent={beastCount}
                            color="primary">
                            <Tooltip title={beastCount == 4 ? '(4) Wild Power: Attack damage increased by 30% for all allies.' : '(2) Wild Power: Attack damage increased by 10% for all allies.'} classes={{ tooltip: classes.customWidth }}>

                                <Chip
                                    avatar={<Avatar alt="Natacha" src={require(`./Combos/beast.png`)} />}
                                    label={`Beasts`}
                                    // onDelete={handleDelete}
                                    className={`beast ${classes.chip}`}

                                    // className={classes.chip} 
                                    variant="outlined"
                                />
                            </Tooltip>
                        </Badge>
                            : ''
                    }

                    {
                        demonCount > 0 ?
                            <Badge key={1} className={classes.margin} badgeContent={demonCount}
                                color="primary">
                                <Tooltip title={demonCount == 1 ? '(1) Fel Power: Deal 50% extra pure damage to its target.' : '(1+) Fel Power: Deal 50% extra pure damage to its target. Must have 2 Demon Hunters.'} classes={{ tooltip: classes.customWidth }}>

                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/demon.png`)} />}
                                        label={`Demons`}
                                        // onDelete={handleDelete}
                                        className={`demon ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>

                            </Badge>
                            : ''
                    }

                    {
                        dwarfCount > 0 ?
                            <Badge key={2} className={classes.margin} badgeContent={dwarfCount}
                                color="primary">
                                <Tooltip title={dwarfCount == 1 ? '' : '(2) Far Sight: Attack range increased by 300'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/dwarf.png`)} />}
                                        label={`Dwarves`}
                                        // onDelete={handleDelete}
                                        className={`dwarf ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        dragonCount > 0 ?
                            <Badge key={3} className={classes.margin} badgeContent={dragonCount}
                                color="primary">
                                <Tooltip title={demonCount >= 1 ? '(3) All friendly dragons have 100 mana when the battle starts.' : ''} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/dragon.png`)} />}
                                        label={`Dragons`}
                                        // onDelete={handleDelete}
                                        className={`dragon ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        elementCount > 0 ?
                            <Badge key={4} className={classes.margin} badgeContent={elementCount}
                                color="primary">
                                <Tooltip title={elementCount < 2 ? '' : elementCount >= 4 ? '(4) Natural Resist: All allies have a 30% chance to turn the attacker into stone for 4 seconds when attacked by melee chess pieces.' : '(2) Natural Resist: All friendly elements have a 30% chance to turn the attacker into stone for 4 seconds when attacked by melee chess pieces.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/element.png`)} />}
                                        label={`Elementals`}
                                        // onDelete={handleDelete}
                                        className={`element ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        elfCount > 0 ?
                            <Badge key={5} className={classes.margin} badgeContent={elfCount}
                                color="primary">
                                <Tooltip title={elfCount < 2 ? '' : elfCount >= 9 ? '(9) Hide: Evasion increased by 75% for all friendly elves.' : elfCount >= 6 ? '(6) Hide: Evasion increased by 45% for all friendly elves.' : '(3) Hide: Evasion increased by 20% for all friendly elves.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/elf.png`)} />}
                                        label={`Elves`}
                                        // onDelete={handleDelete}
                                        className={`elf ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        goblinCount > 0 ?
                            <Badge key={6} className={classes.margin} badgeContent={goblinCount}
                                color="primary">

                                <Tooltip title={goblinCount < 2 ? '' : goblinCount >= 3 ? '(6) Armor and HP regeneration increased by 15 for a all allies.' : '(3) Armor and HP regeneration increased by 15 for a random ally.'} classes={{ tooltip: classes.customWidth }}>

                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/goblin.png`)} />}
                                        label={`Goblins`}
                                        // onDelete={handleDelete}
                                        className={`goblin ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        godCount > 0 ?
                            <Badge key={6} className={classes.margin} badgeContent={godCount}
                                color="primary">
                                <Tooltip title={godCount == 1 ? '(1) Cooldown of all allied units decreased by 50%.' : '(2) Cooldown of all allied units decreased by 75%.'} classes={{ tooltip: classes.customWidth }}>

                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/god.png`)} />}
                                        label={`Gods`}
                                        // onDelete={handleDelete}
                                        className={`god ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        humanCount > 0 ?
                            <Badge key={7} className={classes.margin} badgeContent={humanCount}
                                color="primary">
                                <Tooltip title={humanCount < 2 ? '' : humanCount >= 6 ? '(6) Persuasion: All friendly humans have 75% chance to silence target for 4s on damage deal' : humanCount >= 4 ? '(4) Persuasion: All friendly humans have 45% chance to silence target for 4s on damage deal' : '(2) Persuasion: All friendly humans have 20% chance to silence target for 4s on damage deal'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/human.png`)} />}
                                        label={`Humans`}
                                        // onDelete={handleDelete}
                                        className={`human ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        nagaCount > 0 ?
                            <Badge key={8} className={classes.margin} badgeContent={nagaCount}
                                color="primary">
                                <Tooltip title={nagaCount < 2 ? '' : '(2) Magic resistance increased by 35% for all allies.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/naga.png`)} />}
                                        label={`Nagas`}
                                        // onDelete={handleDelete}
                                        className={`naga ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        ogreCount > 0 ?
                            <Badge key={9} className={classes.margin} badgeContent={ogreCount}
                                color="primary">
                                <Tooltip title={demonCount >= 2 ? '(2) Max health points increased by 5% for all allies.' : ''} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/ogre.png`)} />}
                                        label={`Ogres`}
                                        // onDelete={handleDelete}
                                        className={`ogre ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        orcCount > 0 ?
                            <Badge key={10} className={classes.margin} badgeContent={orcCount}
                                color="primary">
                                <Tooltip title={orcCount < 1 ? '' : orcCount >= 4 ? '(4) Max health points increased by an additional 600 for all friendly orcs.' : '(2) Max health points increased by an additional 250 for all friendly orcs.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/orc.png`)} />}
                                        label={`Orcs`}
                                        // onDelete={handleDelete}
                                        className={`orc ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        trollCount > 0 ?
                            <Badge key={11} className={classes.margin} badgeContent={trollCount}
                                color="primary">
                                <Tooltip title={trollCount < 2 ? '' : trollCount >= 4 ? '(4) Attack speed increased by 30% for all allies, and 35% for all friendly trolls.' : '(2) Attack speed increased by 35% for all friendly trolls.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/troll.png`)} />}
                                        label={`Trolls`}
                                        // onDelete={handleDelete}
                                        className={`troll ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }

                    {
                        undeadCount > 0 ?
                            <Badge key={12} className={classes.margin} badgeContent={undeadCount}
                                color="primary">
                                <Tooltip title={undeadCount < 2 ? '' : undeadCount >= 6 ? '(6) Armor decreased by 18 for all enemies.' : undeadCount >= 4 ? '(4) Armor decreased by 11 for all enemies.' : '(2) Armor decreased by 6 for all enemies.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/undead.png`)} />}
                                        label={`Undead`}
                                        // onDelete={handleDelete}
                                        className={`undead ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }


                    {
                        assassinCount > 0 ?
                            <Badge key={13} className={classes.margin} badgeContent={assassinCount}
                                color="primary">
                                <Tooltip title={assassinCount < 3 ? '' : assassinCount >= 6 ? '(3) All friendly assassins have a 15% chance to deal 3.5x damage.' : '(6) All friendly assassins have a 15% chance to deal 3.5x damage. All friendly assassins have an additional 15% chance to deal 4.5x damage.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/assassin.png`)} />}
                                        label={`Assassins`}
                                        // onDelete={handleDelete}
                                        className={`assassin ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        demonhunterCount > 0 ?
                            <Badge key={14} className={classes.margin} badgeContent={demonhunterCount}
                                color="primary">
                                <Tooltip title={demonhunterCount == 1 ? '(1) Negates an enemy demon’s power.' : '(2)  All friendly demons keep their power.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/demonhunter.png`)} />}
                                        label={`Demonhunters`}
                                        // onDelete={handleDelete}
                                        className={`demonhunter ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        druidCount > 0 ?
                            <Badge key={15} className={classes.margin} badgeContent={druidCount}
                                color="primary">
                                <Tooltip title={druidCount < 2 ? '' : druidCount >= 4 ? '(4) Two two-stars druids can upgrade to a three-stars druid.' : '(2) Two one-star druids can upgrade to a two-stars druid.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/druid.png`)} />}
                                        label={`Druids`}
                                        // onDelete={handleDelete}
                                        className={`druid ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        hunterCount > 0 ?
                            <Badge key={16} className={classes.margin} badgeContent={hunterCount}
                                color="primary">
                                <Tooltip title={hunterCount < 3 ? '' : hunterCount >= 6 ? '(6) All friendly hunters have an additional +70 base attack damage and +70% chance to pierce through evasion.' : '(3) All friendly hunters have +30 base attack damage and +30% chance to pierce through evasion.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/hunter.png`)} />}
                                        label={`Hunters`}
                                        // onDelete={handleDelete}
                                        className={`hunter ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        knightCount > 0 ?
                            <Badge key={17} className={classes.margin} badgeContent={knightCount}
                                color="primary">
                                <Tooltip title={knightCount < 3 ? '' : knightCount >= 6 ? '(6) All friendly knights have a 80% chance to trigger a damage-reduction shield when attacked.' : '(3) All allies knights have a 40% chance to trigger a damage-reduction shield when attacked.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/knight.png`)} />}
                                        label={`Knights`}
                                        // onDelete={handleDelete}
                                        className={`knight ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        mageCount > 0 ?
                            <Badge key={18} className={classes.margin} badgeContent={mageCount}
                                color="primary">
                                <Tooltip title={mageCount < 3 ? '' : mageCount >= 6 ? '(6) Magic resistance decreased by an additional 80% for all enemies.' : '(3) Magic resistance decreased by 35% for all enemies.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/mage.png`)} />}
                                        label={`Mages`}
                                        // onDelete={handleDelete}
                                        className={`mage ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        mechCount > 0 ?
                            <Badge key={19} className={classes.margin} badgeContent={mechCount}
                                color="primary">


                                <Tooltip title={mechCount < 2 ? '' : mechCount >= 4 ? '(4) HP regeneration increased by 40 for all friendly mechs.' : '(2) HP regeneration increased by an additional 15 for all friendly mechs.'} classes={{ tooltip: classes.customWidth }}>

                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/mech.png`)} />}
                                        label={`Mechs`}
                                        // onDelete={handleDelete}
                                        className={`mech ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        priestCount > 0 ?
                            <Badge key={19} className={classes.margin} badgeContent={priestCount}
                                color="primary">


                                <Tooltip title="20% less damage to the courier." classes={{ tooltip: classes.customWidth }}>

                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/priest.png`)} />}
                                        label={`Priests`}
                                        // onDelete={handleDelete}
                                        className={`mech ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        shamanCount > 0 ?
                            <Badge key={20} className={classes.margin} badgeContent={shamanCount}
                                color="primary">
                                <Tooltip title={shamanCount < 2 ? '' :'(2) Hex affects a random enemy when the battle starts.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/shaman.png`)} />}
                                        label={`Shamans`}
                                        // onDelete={handleDelete}
                                        className={`shaman ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        warlockCount > 0 ?
                            <Badge key={21} className={classes.margin} badgeContent={warlockCount}
                                color="primary">
                                <Tooltip title={warlockCount < 3 ? '' : warlockCount >= 6 ? '(6) Provides 40% lifesteal and 40% spell lifesteal to all allies.' : '(3) Provides 15% lifesteal and 15% spell lifesteal to all allies.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/warlock.png`)} />}
                                        label={`Warlocks`}
                                        // onDelete={handleDelete}
                                        className={`warlock ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </Badge>
                            : ''
                    }
                    {
                        warriorCount > 0 ?
                            <Badge key={22} className={classes.margin} badgeContent={warriorCount}
                                color="primary">
                                <Tooltip title={warriorCount < 3 ? '' : warriorCount >= 9 ? '(9) Armor increased by an additional 21 for all friendly warriors.' : warriorCount >= 6 ? '(6) Armor increased by an additional 12 for all friendly warriors.' : '(3) Armor increased by an additional 5 for all friendly warriors.'} classes={{ tooltip: classes.customWidth }}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={require(`./Combos/warrior.png`)} />}
                                        label={`Warriors`}
                                        // onDelete={handleDelete}
                                        className={`warrior ${classes.chip}`}

                                        // className={classes.chip} 
                                        variant="outlined"
                                    />
                                </Tooltip>
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