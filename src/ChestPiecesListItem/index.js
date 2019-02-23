import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function ChessPieceListItem(props) {
    const { classes } = props;

    let multiclass = classes.fab + " " + props.className;



    return (

        <ListItem
            dense
            
            button
            className={multiclass}
            // selected={this.state.selectedIndex === 0}
            onClick={() => props.chessClicked(props.item)}
        >
            <ListItemIcon>
                <img src={require(`./heroes/${props.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${props.name.toLowerCase()}Icon`} />
            </ListItemIcon>
            <ListItemText primary={props.item.name} secondary={
                <React.Fragment>
                    <Typography component="span" className={classes.inline} color="textPrimary">
                        {props.item.class} | {props.item.species.length > 1 ? props.item.species.join(" ") : props.item.species}
                    </Typography>
                    {/* {' — Do you have Paris recommendations? Have you ever…'} */}
                </React.Fragment>
            } />
        </ListItem>

        // <div className={props.className}>
      
    // </div>
  );
}

ChessPieceListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChessPieceListItem);