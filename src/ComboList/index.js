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

                <Grid container spacing={24}>

                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.beastPieces;
                            
                            if (val === null || val === 0) return null
                            else if (val > 5) return 'Attack damage increased by 45% for all allies.';
                            else if (val > 3) return 'Attack damage increased by 25% for all allies.';
                            else if (val > 1) return 'Attack damage increased by 10% for all allies.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.demonPieces;

                            if (val === null || val === 0) return null
                            else if (val > 0) return 'Fel Power';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.dwarfPieces;

                            if (val === null || val === 0) return null
                            else if (val > 1) return 'Attack range increased by 300.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.dragonPieces;
                            
                            if (val === null || val === 0) return null
                            else if (val > 2) return 'All friendly dragons have 100 mana when battle starts.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.elementPieces;

                            if (val === null || val === 0) return null
                            else if (val > 3) return 'All allies have 30% chance to turn attacker into stone for 4s when attacked by melee chesses.';
                            else if (val > 1) return 'All friendly elements have 30% chance to turn attacker into stone for 4s when attacked by melee chesses.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.elfPieces;

                            if (val === null || val === 0) return null
                            else if (val > 5) return 'Evasion increased by an additional 25% for all friendly elves.';
                            else if (val > 2) return 'Evasion increased by 25% for all friendly elves.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.goblinPieces;

                            if (val === null || val === 0) return null
                            else if (val > 5) return 'Armor and hp regeneration increased by 15 for all friendly goblins.';
                            else if (val > 2) return 'Armor and hp regeneration increased by 15 for a random ally.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.humanPieces;

                            if (val === null || val === 0) return null
                            else if (val > 5) return 'All friendly humans have 30% chance to silence target for 4s on damage deal.';
                            else if (val > 3) return 'All friendly humans have 25% chance to silence target for 4s on damage deal.';
                            else if (val > 1) return 'All friendly humans have 20% chance to silence target for 4s on damage deal.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.nagaPieces;

                            if (val === null || val === 0) return null
                            else if (val > 3) return 'Magic resistance increased by 60 for all allies.';
                            else if (val > 1) return 'Magic resistance increased by 20 for all allies.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>
                        {(function () {
                            let val = self.props.ogrePieces;

                            if (val === null || val === 0) return null
                            else if (val > 0) return 'Ogre max hp increased by 5% per head.';
                        })()}

                    </Grid>
                    <Grid item sm={12}>

                        {(function () {
                            let val = self.props.orcPieces;

                            if (val === null || val === 0) return null
                            else if (val > 3) return 'Max HP increased by 600 for all friendly orcs.';
                            else if (val > 1) return 'Max HP increased by 250 for all friendly orcs.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>

                        {(function () {
                            let val = self.props.trollPieces;

                            if (val === null || val === 0) return null
                            else if (val > 3) return 'Attack speed increased by 35 for all friendly units, and another 35 for all friendly trolls.';
                            else if (val > 1) return 'Attack speed increased by 35 for all friendly trolls.';
                        })()}
                    </Grid>
                    <Grid item sm={12}>

                        {(function () {
                            let val = self.props.undeadPieces;

                            if (val === null || val === 0) return null
                            else if (val > 3) return 'Armor decreased by 12 for all enemies';
                            else if (val > 1) return 'Armor decreased by 5 for all enemies';
                        })()}

                    </Grid>

                </Grid>
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