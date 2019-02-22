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
                            let val = self.props.demonPieces;
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
                    <Grid item sm={12}>element: {this.props.elementPieces}</Grid>
                    <Grid item sm={12}>elf: {this.props.elfPieces}</Grid>
                    <Grid item sm={12}>goblin: {this.props.goblinPieces}</Grid>
                    <Grid item sm={12}>human: {this.props.humanPieces}</Grid>
                    <Grid item sm={12}>naga: {this.props.nagaPieces}</Grid>
                    <Grid item sm={12}>ogre: {this.props.ogrePieces}</Grid>
                    <Grid item sm={12}>orc: {this.props.orcPieces}</Grid>
                    <Grid item sm={12}>troll: {this.props.trollPieces}</Grid>
                    <Grid item sm={12}>undead: {this.props.undeadPieces}</Grid>

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