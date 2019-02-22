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
        textAlign:'right',
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
                        
                        {(function() {
                            switch(self.props.beastPieces) {
                            case 6:
                            case 5:
                                return 'Attack damage increased by an additional 20% for all allies.';
                            case 4:
                            case 3:
                                return 'Attack damage increased by an additional 15% for all allies.';
                            case 2:
                                return 'Attack damage increased by 10% for all allies.';
                            default:
                                return null;
                            }
                        })()}
                        
                    </Grid>
                    <Grid item sm={12}>beast: {this.props.beastPieces}</Grid>
                    <Grid item sm={12}>demon: {this.props.demonPieces}</Grid>
                    <Grid item sm={12}>dwarf: {this.props.dwarfPieces}</Grid>
                    <Grid item sm={12}>dragon: {this.props.dragonPieces}</Grid>
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