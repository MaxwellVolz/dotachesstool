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
        top: '0.2vh',
        right: '0',
        width: '37.6vw',
        height: '99.4vh',
        marginTop: 0,
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
        let classNames = e.target.className.split(" ");

        let classToHighlight = classNames[classNames.length - 1]

        let elemsToHighlight = document.getElementsByClassName(classToHighlight);

        let i;
        for (i = 0; i < elemsToHighlight.length; i++) {
            elemsToHighlight[i].style.backgroundColor = "#1319";
        }
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
            if (this.props.currentChessPieces[i].class.indexOf('DemonHunter') >= 0)++demonhunterCount;
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
            <Paper id="comboSection" className={`sectionContainer ${classes.root}`}>

                <div className="comboContainer">
                    <h5 className="shortHeader">Species</h5>

                    <table className={`comboTable beast`}>
                        <thead>
                            <tr className="beast">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/beast.png`)} alt={`beastIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="beast">Beasts</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={beastCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">All allies have +10% attack damage.</td>
                            </tr>

                            <tr className={beastCount >= 4 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">All allies have +20% attack damage.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable dragon`}>
                        <thead>
                            <tr
                                className="dragon">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/dragon.png`)} alt={`dragonIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="dragon">Dragons</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={dragonCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">All friendly dragons have 100 mana when battle starts.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable dwarf`}>
                        <thead>
                            <tr
                                className="dwarf">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/dwarf.png`)} alt={`dwarfIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="dwarf">Dwarves</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={dwarfCount >= 1 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">1</td>
                                <td className="comboDesc">Attack range increased by 300.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable demon`}>
                        <thead>
                            <tr
                                className="demon">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/demon.png`)} alt={`demonIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="demon">Demons</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={'dimmed'}>
                                <td className="comboAmount"></td>
                                <td className="comboDesc">Active whens only one demon in play.</td>
                            </tr>
                            <tr className={demonCount == 1 ? 'highlit' : (demonCount > 1 && demonhunterCount > 1) ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">1</td>
                                <td className="comboDesc">Deal 50% extra pure damage to the target.</td>
                            </tr>

                        </tbody>
                    </table>
                    <table className={`comboTable elf`}>
                        <thead>
                            <tr
                                className="elf">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/elf.png`)} alt={`elfIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="elf">Elves</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={elfCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">Your elves get +20% evasion.</td>
                            </tr>

                            <tr className={elfCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">Your elves get +25% evasion.</td>
                            </tr>

                            <tr className={elfCount >= 9 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">9</td>
                                <td className="comboDesc">Your elves get +30% evasion.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable goblin`}>
                        <thead>
                            <tr
                                className="goblin">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/goblin.png`)} alt={`goblinIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="goblin">Goblins</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={goblinCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">Grants a random ally +15 armor and +10 regen.</td>
                            </tr>

                            <tr className={goblinCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">Grants all allies with +15 armor and +10 regen.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable element`}>
                        <thead>
                            <tr
                                className="element">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/element.png`)} alt={`elementIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="element">Elementals</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={elementCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">30% chance to stun 4s melee attacks on hit.</td>
                            </tr>

                            <tr className={elementCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">30% chance to stun 4 seconds to melee attackers on hit.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable human`}>
                        <thead>
                            <tr
                                className="human">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/human.png`)} alt={`humanIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="human">Humans</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={humanCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">Your humans get 20% chance to silence target for 4s on attack.</td>
                            </tr>

                            <tr className={humanCount >= 4 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">Your humans get 25% chance to silence target for 4s on attack.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable naga`}>
                        <thead>
                            <tr
                                className="naga">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/naga.png`)} alt={`nagaIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="naga">Nagas</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={nagaCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">All allies have +35% magic resistance.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable orc`}>
                        <thead>
                            <tr
                                className="orc">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/orc.png`)} alt={`orcIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="orc">Orc</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={orcCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">Your orcs get +250 max HP.</td>
                            </tr>
                            <tr className={orcCount >= 4 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">Your orcs get +350 max HP.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable troll`}>
                        <thead>
                            <tr
                                className="troll">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/troll.png`)} alt={`trollIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="troll">Trolls</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={trollCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">Your trolls get +35 attack speed.</td>
                            </tr>
                            <tr className={trollCount >= 4 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">All allies get +30 attack speed.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable god`}>
                        <thead>
                            <tr
                                className="god">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/god.png`)} alt={`godIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="god">God</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={godCount >= 1 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">1</td>
                                <td className="comboDesc">All allies cooldown get reduced by 50%.</td>
                            </tr>
                            <tr className={godCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">All allies cooldown get reduced by 50%.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="comboContainer">
                    <h5 className="shortHeader">Classes</h5>

                    <table className={`comboTable assassin`}>
                        <thead>
                            <tr
                                className="assassin">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/assassin.png`)} alt={`assassinIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="assassin">Assassins</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={assassinCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">Your assassins get 15% chance to critical hit for 350%.</td>
                            </tr>
                            <tr className={assassinCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">Your assassins get 15% chance to critical hit for 450%.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable demonhunter`}>
                        <thead>
                            <tr
                                className="demonhunter">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/demonhunter.png`)} alt={`demonhunterIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="demonhunter">Demon Hunters</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={demonhunterCount >= 1 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">1</td>
                                <td className="comboDesc">Negate enemy demon power.</td>
                            </tr>
                            <tr className={demonhunterCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">Your demons retain their Fel Power.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable druid`}>
                        <thead>
                            <tr className="druid">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/druid.png`)} alt={`druidIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="druid">Druids</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={druidCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">Two Druid★ can upgrade to a Druid★★.</td>
                            </tr>
                            <tr className={druidCount >= 4 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">Two Druid★★ can upgrade to a Druid★★★.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable hunter`}>
                        <thead>
                            <tr
                                className="hunter">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/hunter.png`)} alt={`hunterIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="hunter">Hunters</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={hunterCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">Your hunters get +30 base attack damage and +30% chance to pierce through evasion.</td>
                            </tr>
                            <tr className={hunterCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">Your hunters get +40 base attack damage and +40% chance to pierce through evasion.</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={`comboTable knight`}>
                        <thead>
                            <tr
                                className="knight">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/knight.png`)} alt={`knightIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="knight">Knights</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={'dimmed'}>
                                <td className="comboAmount"></td>
                                <td className="comboDesc">Shield gives 80% magic res and 30 armor for 3 seconds.</td>
                            </tr>
                            <tr className={knightCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">Your knights get 40% chance to proc a shield.</td>
                            </tr>
                            <tr className={knightCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">All allies get 40% chance to proc a shield.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable mage`}>
                        <thead>
                            <tr
                                className="mage">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/mage.png`)} alt={`mageIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="mage">Mages</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={mageCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">All enemies have magic resistance reduced by 35%.</td>
                            </tr>
                            <tr className={mageCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">All enemies have magic resistance reduced by 45%.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable mech`}>
                        <thead>
                            <tr
                                className="mech">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/mech.png`)} alt={`mechIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="mech">Mechs</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={mechCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">Your mechs have +15 HP regeneration.</td>
                            </tr>
                            <tr className={mechCount >= 4 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">Your mechs have an additional +25 HP regeneration.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable priest`}>
                        <thead>
                            <tr
                                className="priest">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/priest.png`)} alt={`priestIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="priest">Priests</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={priestCount >= 1 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">Reduce damage to your courier by 20%.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable shaman`}>
                        <thead>
                            <tr
                                className="shaman">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/shaman.png`)} alt={`shamanIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="shaman">Shaman</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={shamanCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">Hexes a random enemy for 6s when battle starts.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable warlock`}>
                        <thead>
                            <tr
                                className="warlock">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/warlock.png`)} alt={`warlockIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="warlock">Warlock</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={warlockCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">Allies get +15% lifesteal and spell lifesteal.</td>
                            </tr>
                            <tr className={warlockCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">Allies get +25% lifesteal and spell lifesteal.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={`comboTable warrior`}>
                        <thead>
                            <tr
                                className="warrior">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/warrior.png`)} alt={`warriorIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="warrior">Warrior</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={warriorCount >= 3 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">3</td>
                                <td className="comboDesc">All friendly warriors have +5 armor.</td>
                            </tr>
                            <tr className={warriorCount >= 6 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">6</td>
                                <td className="comboDesc">All friendly warriors have an additional +7 armor.</td>
                            </tr>
                            <tr className={warriorCount >= 9 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">9</td>
                                <td className="comboDesc">All friendly warriors have an additional +9 armor.</td>
                            </tr>

                        </tbody>
                    </table>
                    <table className={`comboTable undead`}>
                        <thead>
                            <tr
                                className="undead">
                                <th className="comboIconTD">
                                    <img src={require(`./Combos/undead.png`)} alt={`undeadIcon`} />
                                </th>
                                <th onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit} className="undead">Undead</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className={undeadCount >= 2 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">All enemies have -4 armor.</td>
                            </tr>
                            <tr className={undeadCount >= 4 ? 'highlit' : 'dimmed'}>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">All enemies have -6 armor.</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
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