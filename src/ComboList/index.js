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

});

class SelectedListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        selectedIndex: 1,
    };

    // componentDidMount() {
    //     console.log(uniqueClasses)
    //     console.log([...new Set(chessPieces.class)])
    //     console.log([...new Set(chessPieces)])
    // }

    handleListItemClick = (item) => {
        this.props.chessClicked(item)
    };

    render() {
        const { classes } = this.props;
        // const { chessPieces } = this.props.chessPieces;
        let self = this;

        return (
            <div className={classes.root}>



                <List

                    component="nav"
                    subheader={<ListSubheader component="div"></ListSubheader>}
                    className={classes.root}
                >
                    {(function () {
                        let val = self.props.assassinPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'assassin' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                All friendly assassins have 10% chance to deal 3.5x damage.
                                </ListItem>


                        );
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'assassin' + val}
                                button
                            >
                                All friendly assassins have 20% chance to deal 4.5x damage.
                                </ListItem>
                        );
                    })()}

                    {(function () {
                        let val = self.props.demonhunterPieces;

                        if (val === null || val === 0) return null
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'demonhunter' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                All ally demons keep their power

                                </ListItem>


                        );
                        else if (val > 0) return (
                            <ListItem
                                dense
                                key={'demonhunter' + val}
                                button
                            >
                                Negates enemy Demon's Fel Power.
                                </ListItem>
                        );
                    })()}

                    {(function () {
                        let val = self.props.druidPieces;

                        if (val === null || val === 0) return null
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'druid' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Two ★★druids can upgrade to a ★★★druid.
                                </ListItem>


                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'druid' + val}
                                button
                            >
                                Two ★druids can upgrade to a ★★druid
                                </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.hunterPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'hunter' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Attack damage increased by 60% for all friendly hunters.
                                </ListItem>


                        );
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'hunter' + val}
                                button
                            >
                                Attack damage increased by 25% for all friendly hunters.
                                </ListItem>
                        );
                    })()}


                    {(function () {
                        let val = self.props.knightPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'knight' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                All friendly knights +45% chance to get a shield.
            </ListItem>


                        );
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'knight' + val}
                                button
                            >
                                All friendly knights +35% chance to get a shield.
            </ListItem>
                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'knight' + val}
                                button
                            >
                                All friendly knights +25% chance to get a shield.
            </ListItem>
                        );
                    })()}

                    {(function () {
                        let val = self.props.magePieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'mage' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Magic resistance decreased by 80% for all enemies.
            </ListItem>


                        );
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'mage' + val}
                                button
                            >
                                Magic resistance decreased by 40% for all enemies.
            </ListItem>
                        );

                    })()}

                    {(function () {
                        let val = self.props.mechPieces;

                        if (val === null || val === 0) return null
                        else if (val > 3) return (
                            <ListItem
                                dense
                                key={'mech' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                HP regeneration increased by 25 for all friendly mechs.
            </ListItem>


                        );
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'mech' + val}
                                button
                            >
                                HP regeneration increased by 15 for all friendly mechs.
            </ListItem>
                        );

                    })()}

                    {(function () {
                        let val = self.props.shamanPieces;

                        if (val === null || val === 0) return null
                        else if (val > 1) return (
                            <ListItem
                                dense
                                key={'shaman' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Hex an enemy when battle starts.
            </ListItem>


                        );


                    })()}

                    {(function () {
                        let val = self.props.warlockPieces;

                        if (val === null || val === 0) return null
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'warlock' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Lifesteal increased by 50% for all allies.
            </ListItem>
                        );
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'warlock' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Lifesteal increased by 20% for all allies.
            </ListItem>


                        );


                    })()}

                    {(function () {
                        let val = self.props.warriorPieces;

                        if (val === null || val === 0) return null
                        else if (val > 8) return (
                            <ListItem
                                dense
                                key={'warrior' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Armor increased by 24 for all friendly warriors.
            </ListItem>
                        );
                        else if (val > 5) return (
                            <ListItem
                                dense
                                key={'warrior' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Armor increased by 15 for all friendly warriors.
            </ListItem>


                        );
                        else if (val > 2) return (
                            <ListItem
                                dense
                                key={'warrior' + val}
                                button
                            // selected={this.state.selectedIndex === 0}
                            // onClick={() => self.handleListItemClick(piece)}
                            >
                                Armor increased by 7 for all friendly warriors.
            </ListItem>


                        );

                    })()}

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