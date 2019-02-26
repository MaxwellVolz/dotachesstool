import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';

import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import Grid from '@material-ui/core/Grid';

import chessPieces from '../chessPieces'

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        textAlign: 'right',
        backgroundColor: theme.palette.background.paper,
    },
    grid: {
        flexGrow: 1,
        maxWidth: '90vw',
        margin: '20px auto 20px auto',
        alignItems: 'center'
    },
    nested: {
        textAlign: 'left'
    }

});

class SelectedListItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        selectedIndex: 1,

        assassinOpen: false,
        demonhunterOpen: false,
        druidOpen: false,
        hunterOpen: false,
        knightOpen: false,
        mageOpen: false,
        mechOpen: false,
        shamanOpen: false,
        warlockOpen: false,
        warriorOpen: false,

        beastOpen: false,
        demonOpen: false,
        dwarfOpen: false,
        dragonOpen: false,
        elementOpen: false,
        elfOpen: false,
        goblinOpen: false,
        humanOpen: false,
        nagaOpen: false,
        ogreOpen: false,
        orcOpen: false,
        trollOpen: false,
        undeadOpen: false
    };




    // componentDidMount() {
    //     console.log(uniqueClasses)
    //     console.log([...new Set(chessPieces.class)])
    //     console.log([...new Set(chessPieces)])
    // }

    componentDidUpdate() {
        // if(this.props.assassinPieces > 2 && !this.state.assassinOpen) this.setState(state => ({assassinOpen: true}))
        // if(this.props.demonhunterPieces > 0 && !this.state.demonhunterOpen) this.setState(state => ({demonhunterOpen:true})) 

        // if(this.props.druidPieces > 1 && !this.state.druidOpen) this.setState(state => ({druidOpen:true})) 
        // if(this.props.hunterPieces > 2 && !this.state.hunterOpen) this.setState(state => ({hunterOpen:true})) 
        // if(this.props.knightPieces > 2 && !this.state.knightOpen) this.setState(state => ({knightOpen:true})) 
        // if(this.props.magePieces > 2 && !this.state.mageOpen) this.setState(state => ({mageOpen:true})) 
        // if(this.props.mechPieces > 2 && !this.state.mechOpen) this.setState(state => ({mechOpen:true})) 
        // if(this.props.shamanPieces > 2 && !this.state.shamanOpen) this.setState(state => ({shamanOpen:true})) 
        // if(this.props.warlockPieces > 2 && !this.state.warlockOpen) this.setState(state => ({warlockOpen:true})) 
        // if(this.props.warriorPieces > 2 && !this.state.warriorOpen) this.setState(state => ({warriorOpen:true})) 

        // if(this.props.beastPieces > 2 && !this.state.beastOpen) this.setState(state => ({beastOpen:true})) 
        // if(this.props.demonPieces > 2 && !this.state.demonOpen) this.setState(state => ({demonOpen:true})) 
        // if(this.props.dwarfPieces > 2 && !this.state.dwarfOpen) this.setState(state => ({dwarfOpen:true})) 
        // if(this.props.dragonPieces > 2 && !this.state.dragonOpen) this.setState(state => ({dragonOpen:true})) 
        // if(this.props.elementPieces > 2 && !this.state.elementOpen) this.setState(state => ({elementOpen:true})) 
        // if(this.props.elfPieces > 2 && !this.state.elfOpen) this.setState(state => ({elfOpen:true})) 
        // if(this.props.goblinPieces > 2 && !this.state.goblinOpen) this.setState(state => ({goblinOpen:true})) 
        // if(this.props.humanPieces > 2 && !this.state.humanOpen) this.setState(state => ({humanOpen:true})) 
        // if(this.props.nagaPieces > 2 && !this.state.nagaOpen) this.setState(state => ({nagaOpen:true})) 
        // if(this.props.ogrePieces > 2 && !this.state.ogreOpen) this.setState(state => ({ogreOpen:true})) 
        // if(this.props.orcPieces > 2 && !this.state.orcOpen) this.setState(state => ({orcOpen:true})) 
        // if(this.props.trollPieces > 2 && !this.state.trollOpen) this.setState(state => ({trollOpen:true})) 
        // if(this.props.undeadPieces > 2 && !this.state.undeadOpen) this.setState(state => ({undeadOpen:true})) 
    }

    handleListItemClick = (item) => {
        this.props.chessClicked(item)
    };

    handleClick = (key, value) => {
        this.setState(state => ({ [key]: value }));
    };

    render() {
        const { classes } = this.props;
        // const { chessPieces } = this.props.chessPieces;
        let self = this;
        let assassinPieces = this.props.assassinPieces;
        let demonhunterPieces = this.props.demonhunterPieces;
        let druidPieces = this.props.druidPieces;
        let hunterPieces = this.props.hunterPieces;
        let knightPieces = this.props.knightPieces;
        let magePieces = this.props.magePieces;
        let mechPieces = this.props.mechPieces;
        let shamanPieces = this.props.shamanPieces;
        let warlockPieces = this.props.warlockPieces;
        let warriorPieces = this.props.warriorPieces;

        let beastPieces = this.props.beastPieces;
        let demonPieces = this.props.demonPieces;
        let dwarfPieces = this.props.dwarfPieces;
        let dragonPieces = this.props.dragonPieces;
        let elementPieces = this.props.elementPieces;
        let elfPieces = this.props.elfPieces;
        let goblinPieces = this.props.goblinPieces;
        let humanPieces = this.props.humanPieces;
        let nagaPieces = this.props.nagaPieces;
        let ogrePieces = this.props.ogrePieces;
        let orcPieces = this.props.orcPieces;
        let trollPieces = this.props.trollPieces;
        let undeadPieces = this.props.undeadPieces;

        return (
            <div className={classes.root}>


                <List

                    component="nav"
                    subheader={<ListSubheader component="div"></ListSubheader>}
                    className={classes.root}
                >

                    <ListItem button onClick={() => this.handleClick('assassinOpen', !this.state['assassinOpen'])} >
                        <ListItemText>{assassinPieces}</ListItemText>
                        <ListItemText inset primary="Assassins" />
                        {this.state.assassinOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.assassinOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(assassinPieces > 2 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="3" />
                                    <ListItemText inset secondary="All friendly assassins have 10% chance to deal 3.5x damage." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="3" />
                                    <ListItemText inset secondary="All friendly assassins have 10% chance to deal 3.5x damage." />
                                </ListItem>
                            )}

                            {(assassinPieces > 5 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="6" />
                                    <ListItemText inset secondary="All friendly assassins have 20% chance to deal 4.5x damage." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="6" />
                                    <ListItemText inset secondary="All friendly assassins have 20% chance to deal 4.5x damage." />
                                </ListItem>
                            )}

                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('demonhunterOpen', !this.state.demonhunterOpen)}>
                        <ListItemText>
                            {demonhunterPieces}
                        </ListItemText>
                        <ListItemText inset primary="Demon Hunters" />
                        {this.state.demonhunterOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.demonhunterOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(demonhunterPieces > 0 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="1" />
                                    <ListItemText inset secondary="Negates enemy Demon's Fel Power." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="1" />
                                    <ListItemText inset secondary="Negates enemy Demon's Fel Power." />
                                </ListItem>
                            )}

                            {(demonhunterPieces > 1 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="2" />
                                    <ListItemText inset secondary="All ally demons keep their power" />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="2" />
                                    <ListItemText inset secondary="All ally demons keep their power" />
                                </ListItem>
                            )}

                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('druidOpen', !this.state['druidOpen'])} >
                        <ListItemText>{druidPieces}</ListItemText>
                        <ListItemText inset primary="Druids" />
                        {this.state.druidOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.druidOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(druidPieces > 1 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="Two ★ druids can upgrade to a ★★druid" />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="Two ★ druids can upgrade to a ★★druid" />
                                </ListItem>
                            )}

                            {(druidPieces > 3 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="4"/>
                                    <ListItemText inset secondary="Two ★★ druids can upgrade to a ★★★ druid." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="4"/>
                                    <ListItemText inset secondary="Two ★★ druids can upgrade to a ★★★ druid." />
                                </ListItem>
                            )}

                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('hunterOpen', !this.state['hunterOpen'])} >
                        <ListItemText>{hunterPieces}</ListItemText>
                        <ListItemText inset primary="Hunters" />
                        {this.state.hunterOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.hunterOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(hunterPieces > 2 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Attack damage increased by 25% for all friendly hunters." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Attack damage increased by 25% for all friendly hunters." />
                                </ListItem>
                            )}

                            {(hunterPieces > 5 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Attack damage increased by 35% for all friendly hunters." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Attack damage increased by 35% for all friendly hunters." />
                                </ListItem>
                            )}

                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('knightOpen', !this.state['knightOpen'])} >
                        <ListItemText>{knightPieces}</ListItemText>
                        <ListItemText inset primary="Knights" />
                        {this.state.knightOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.knightOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(knightPieces > 1 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="All friendly knights +25% chance to get a shield." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="All friendly knights +25% chance to get a shield." />
                                </ListItem>
                            )}

                            
                            {(knightPieces > 3 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="4"/>
                                    <ListItemText inset secondary="All friendly knights +35% chance to get a shield." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="4"/>
                                    <ListItemText inset secondary="All friendly knights +35% chance to get a shield." />
                                </ListItem>
                            )}      

                            {(knightPieces > 5 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="All friendly knights +45% chance to get a shield." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="All friendly knights +45% chance to get a shield." />
                                </ListItem>
                            )}

                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('mageOpen', !this.state['mageOpen'])} >
                        <ListItemText>{magePieces}</ListItemText>
                        <ListItemText inset primary="Mages" />
                        {this.state.mageOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.mageOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(magePieces > 2 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Magic resistance decreased by 40% for all enemies." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Magic resistance decreased by 40% for all enemies." />
                                </ListItem>
                            )}      

                            {(magePieces > 5 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Magic resistance decreased by 40% for all enemies." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Magic resistance decreased by 40% for all enemies." />
                                </ListItem>
                            )}

                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('mechOpen', !this.state['mechOpen'])} >
                        <ListItemText>{mechPieces}</ListItemText>
                        <ListItemText inset primary="Mechs" />
                        {this.state.mechOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.mechOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(mechPieces > 1 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="HP regeneration increased by 15 for all friendly mechs." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="HP regeneration increased by 15 for all friendly mechs." />
                                </ListItem>
                            )}      

                            {(mechPieces > 3 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="4"/>
                                    <ListItemText inset secondary="HP regeneration increased by 25 for all friendly mechs." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="4"/>
                                    <ListItemText inset secondary="HP regeneration increased by 25 for all friendly mechs." />
                                </ListItem>
                            )}

                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('shamanOpen', !this.state['shamanOpen'])} >
                        <ListItemText>{shamanPieces}</ListItemText>
                        <ListItemText inset primary="Shamans" />
                        {this.state.shamanOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.shamanOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(shamanPieces > 1 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="Hex an enemy when battle starts." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="2"/>
                                    <ListItemText inset secondary="Hex an enemy when battle starts." />
                                </ListItem>
                            )}      

                           
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('warlockOpen', !this.state['warlockOpen'])} >
                        <ListItemText>{warlockPieces}</ListItemText>
                        <ListItemText inset primary="Warlocks" />
                        {this.state.warlockOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.warlockOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(warlockPieces > 2 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Lifesteal increased by 20% for all allies." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Lifesteal increased by 20% for all allies." />
                                </ListItem>
                            )}      
                             {(warlockPieces > 5 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Lifesteal increased by 30% for all allies." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Lifesteal increased by 30% for all allies." />
                                </ListItem>
                            )}      

                           
                        </List>
                    </Collapse>

                    <ListItem button onClick={() => this.handleClick('warriorOpen', !this.state['warriorOpen'])} >
                        <ListItemText>{warriorPieces}</ListItemText>
                        <ListItemText inset primary="Warriors" />
                        {this.state.warriorOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.warriorOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            {(warriorPieces > 2 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Armor increased by 7 for all friendly warriors." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="3"/>
                                    <ListItemText inset secondary="Armor increased by 7 for all friendly warriors." />
                                </ListItem>
                            )}      
                             {(warriorPieces > 5 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Armor increased by 8 for all friendly warriors." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="6"/>
                                    <ListItemText inset secondary="Armor increased by 8 for all friendly warriors." />
                                </ListItem>
                            )}      
                             {(warriorPieces > 8 ?
                                <ListItem button className={classes.nested} selected>
                                    <ListItemText secondary="9"/>
                                    <ListItemText inset secondary="Armor increased by 9 for all friendly warriors." />
                                </ListItem>
                                :
                                <ListItem button className={classes.nested}>
                                    <ListItemText secondary="9"/>
                                    <ListItemText inset secondary="Armor increased by 9 for all friendly warriors." />
                                </ListItem>
                            )}      

                           
                        </List>
                    </Collapse>


                </List>


                <List

                    component="nav"
                    subheader={<ListSubheader component="div"></ListSubheader>}
                    className={classes.root}
                >
                    {(function () {
                        let val = self.props.beastPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'beast' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Attack damage increased by 45% for all allies.
                                </ListItem>


                        );
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'beast' + val}
                                button
                            >
                                Attack damage increased by 25% for all allies.
                                </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'beast' + val}
                                button
                            >
                                Attack damage increased by 10% for all allies.
                                </ListItem>
                        );
                    })()}



                    {(function () {
                        let val = self.props.demonPieces;

                        if (val === null || val === 0) return null
                        else if (val > 0) return (
                            <ListItem
                                dense
                                key={'demon' + val}
                                button
                            >
                                Fel Power
                                    </ListItem>
                        )
                    })()}


                    {(function () {
                        let val = self.props.dwarfPieces;

                        if (val === null || val === 0) return null
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'dwarf' + val}
                                button
                            >
                                Attack range increased by 300.
                                    </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.dragonPieces;

                        if (val === null || val === 0) return null
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'dragon' + val}
                                button
                            >
                                All friendly dragons have 100 mana when battle starts.
                                    </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.elementPieces;

                        if (val === null || val === 0) return null
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'element' + val}
                                button
                            >
                                All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses.
                                    </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'element' + val}
                                button
                            >
                                All friendly elements have 30% chance to turn attacker into stone for 4s when attacked by melee chesses.
                                    </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.elfPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'elf' + val}
                                button
                            >
                                Evasion increased by an additional 25% for all friendly elves.
                                    </ListItem>
                        );
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'elf' + val}
                                button
                            >
                                Evasion increased by 25% for all friendly elves.
                                    </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.goblinPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'goblin' + val}
                                button
                            >
                                Armor and hp regeneration increased by 15 for all friendly goblins.
                                    </ListItem>
                        );
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'goblin' + val}
                                button
                            >
                                Armor and hp regeneration increased by 15 for a random ally.
                                    </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.humanPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'human' + val}
                                button
                            >
                                All friendly humans have 30% chance to silence target for 4s on damage deal.
                                    </ListItem>
                        );
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'human' + val}
                                button
                            >
                                All friendly humans have 25% chance to silence target for 4s on damage deal.
                                    </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'human' + val}
                                button
                            >
                                All friendly humans have 20% chance to silence target for 4s on damage deal.
                                    </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.nagaPieces;

                        if (val === null || val === 0) return null
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'naga' + val}
                                button
                            >
                                Magic resistance increased by 60 for all allies.
                                    </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'naga' + val}
                                button
                            >
                                Magic resistance increased by 20 for all allies.
                                    </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.ogrePieces;

                        if (val === null || val === 0) return null
                        else if (val > 0) return (
                            <ListItem
                                dense
                                key={'ogre' + val}
                                button
                            >
                                Ogre max hp increased by 5% per head.
                                    </ListItem>
                        );
                    })()}




                    {(function () {
                        let val = self.props.orcPieces;

                        if (val === null || val === 0) return null
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'orc' + val}
                                button
                            >
                                Max HP increased by 600 for all friendly orcs.
                                    </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'orc' + val}
                                button
                            >
                                Max HP increased by 250 for all friendly orcs.
                                    </ListItem>
                        );
                    })()}



                    {(function () {
                        let val = self.props.trollPieces;

                        if (val === null || val === 0) return null
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'troll' + val}
                                button
                            >
                                Attack speed increased by 35 for all friendly units, and another 35 for all friendly trolls.
                                    </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'troll' + val}
                                button
                            >
                                Attack speed increased by 35 for all friendly trolls.
                                    </ListItem>
                        );
                    })()}



                    {(function () {
                        let val = self.props.undeadPieces;

                        if (val === null || val === 0) return null
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'undead' + val}
                                button
                            >
                                Armor decreased by 12 for all enemies.
                                    </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'undead' + val}
                                button
                            >
                                Armor decreased by 5 for all enemies.
                                    </ListItem>
                        );
                    })()}



                </List>
                {/* <Divider />
        <List component="nav">
          <ListItem
            button
            selected={this.state.selectedIndex === 2}
            onClick={event => this.handleListItemClick(event, 2)}
          >
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem
            button
            selected={this.state.selectedIndex === 3}
            onClick={event => this.handleListItemClick(event, 3)}
          >
            <ListItemText primary="Spam" />
          </ListItem>
        </List> */}
            </div>
        );
    }
}

SelectedListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);