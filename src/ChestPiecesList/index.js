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


import alchemistIcon from '../heroes/alchemist.png'

import chessPieces from '../chessPieces'

const uniqueClasses = [...new Set(chessPieces.map(item => item.sortClass))];
const uniqueSpecies = [...new Set(chessPieces.map(item => item.sortSpecies))];

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    grid: {
        flexGrow: 1,
        maxWidth: '90vw',
        margin: '20px auto 20px auto',
        alignItems: 'center'
    },
    inline: {
        fontSize: '0.9em'
    }

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

                <Grid container spacing={8}>
                
                    {
                       self.props.sortClass ? 
                       
                       uniqueSpecies.map(function (item, i) {

                        return (
                            <Grid item sm={6} md={4} lg={3} xl={2} key={i}>

                                <List

                                    component="nav"
                                    subheader={<ListSubheader component="div">{item}</ListSubheader>}
                                    className={classes.root}
                                >
                                    {chessPieces.map(function (piece, p) {
                                        return piece.sortSpecies === item ?
                                            <ListItem
                                                dense
                                                key={p}
                                                button
                                                // selected={this.state.selectedIndex === 0}
                                                onClick={() => self.handleListItemClick(piece)}
                                            >
                                                <ListItemIcon>
                                                    <img src={require(`./heroes/${piece.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${piece.name.toLowerCase()}Icon`} />
                                                </ListItemIcon>
                                                <ListItemText primary={piece.name} secondary={
                                                    <React.Fragment>
                                                        <Typography component="span" className={classes.inline} color="textPrimary">
                                                            {/* <span className={piece.class.toLowerCase().replace(/\s+/g, '')}>{piece.class} </span> */}

                                                            {piece.class.map(function (classes, s) {
                                                                    return <span className={classes.toLowerCase().replace(/\s+/g, '')} key={s}>{classes} </span>
                                                                })
                                                            }

                                                            {piece.species.map(function (species, s) {
                                                                    return <span className={species.toLowerCase()} key={s}>{species} </span>
                                                                })
                                                            }
                                                        </Typography>
                                                        {/* {' — Do you have Paris recommendations? Have you ever…'} */}
                                                    </React.Fragment>
                                                } />
                                            </ListItem>
                                            :
                                            ""
                                    })
                                    }

                                </List>
                            </Grid>
                        )
                    })
                       
                       :

                        uniqueClasses.map(function (item, i) {

                            return (
                                <Grid item sm={6} md={4} lg={3} xl={2} key={i}>

                                    <List

                                        component="nav"
                                        subheader={<ListSubheader component="div">{item}</ListSubheader>}
                                        className={classes.root}
                                    >
                                        {chessPieces.map(function (piece, p) {
                                            return piece.sortClass === item ?
                                                <ListItem
                                                    dense
                                                    key={p}
                                                    button
                                                    // selected={this.state.selectedIndex === 0}
                                                    onClick={() => self.handleListItemClick(piece)}
                                                >
                                                    <ListItemIcon>
                                                        <img src={require(`./heroes/${piece.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${piece.name.toLowerCase()}Icon`} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={piece.name} secondary={
                                                        <React.Fragment>
                                                            <Typography component="span" className={classes.inline} color="textPrimary">
                                                                {/* <span className={piece.class.toLowerCase().replace(/\s+/g, '')}>{piece.class} </span> */}

                                                                {piece.class.map(function (classes, s) {
                                                                        return <span className={classes.toLowerCase().replace(/\s+/g, '')} key={s}>{classes} </span>
                                                                    })
                                                                }

                                                                {piece.species.map(function (species, s) {
                                                                        return <span className={species.toLowerCase()} key={s}>{species} </span>
                                                                    })
                                                                }
                                                            </Typography>
                                                            {/* {' — Do you have Paris recommendations? Have you ever…'} */}
                                                        </React.Fragment>
                                                    } />
                                                </ListItem>
                                                :
                                                ""
                                        })
                                        }

                                    </List>
                                </Grid>
                            )
                        })
                    }
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