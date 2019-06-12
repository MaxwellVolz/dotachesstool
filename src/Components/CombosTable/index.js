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

import Beasts from './ComboTables/beast';
import Demons from './ComboTables/demon';
import Dwarf from './ComboTables/dwarf';
import Dragon from './ComboTables/dragon';
import Element from './ComboTables/element';
import Elf from './ComboTables/elf';
import Goblin from './ComboTables/goblin';
import God from './ComboTables/god';
import Human from './ComboTables/human';
import Naga from './ComboTables/naga';
import Ogre from './ComboTables/ogre';
import Orc from './ComboTables/orc';
import Troll from './ComboTables/troll';
import Undead from './ComboTables/undead';


import autochesspieces from '../../chessPieces';

import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        position: 'absolute',
        bottom: '1vh',
        left: '1vw',
        width: '98vw',
        height: '25vh',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'hidden',
    },
    table: {
        width: '19%',
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
    nopadding: {
        padding: '0 24px 0 0',
        borderBottom: 'none !important'
    }
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
    }

    toggleHoverEnter(e) {
        console.log("toggleHoverEnter")
    }

    toggleHoverExit(e) {
        console.log("toggleHoverExit")

    }

    pieceClicked = (e) => {

        let piece = autochesspieces.find(function (element) {
            return element.name == e.target.innerHTML;
        });

        this.props.chessPieceUnchosenFired(piece);
        // console.log(piece);
    }

    refresh() {
        this.forceUpdate()
    }


    render() {
        const { classes } = this.props;


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






        return (
            <Paper id="piecesSection" className={`sectionContainer ${classes.root}`}>

                <table className="comboTable">
                    <thead>
                        <tr>
                           <th className="comboIconTD">
                                <img src={require(`./Combos/beast.png`)} alt={`beastIcon`} />
                            </th>
                            <th className="beast">Beasts</th>

                        </tr>
                    </thead>
                    <tbody>

                                <tr>
                                    <td className="comboAmount">2</td>
                                    <td className="comboDesc">All allies have +10% attack damage, including summoned units.</td>
                                </tr>

                                <tr>
                                    <td className="comboAmount">4</td>
                                    <td className="comboDesc">All allies have +20% attack damage, including summoned units.</td>
                                </tr>

                  
                    </tbody>
                </table>


                {/* < Beasts />
                < Demons />
                < Dwarf />
                < Dragon />
                < Element />
                < Elf />
                < Goblin />
                < God />
                < Human />
                < Naga />
                < Ogre />
                < Orc />
                < Troll />
                < Undead /> */}
            </Paper>

        );
    }
}

Combos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Combos);