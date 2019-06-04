import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Paper from '@material-ui/core/Paper';

import autochesspieces from '../../chessPieces';

import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        marginLeft: '0.5%',
        position: 'absolute',
        top: '1vh',
        left: '78vw',
        width: '21vw',
        height: '63vh',
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
    }
});


const table1 = autochesspieces.slice(0, 15);



class CurrentTeam extends React.Component {

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

        let pieceName = e.target.parentNode.getAttribute("piecename")


        let piece = autochesspieces.find(function(element) { 
            return element.name == pieceName; 
          }); 


        this.props.chessPieceUnchosenFired(piece);
        // console.log(piece);
    }

    refresh() {
        this.forceUpdate()
    }

    render() {
        const { classes } = this.props;

        // let currentPieces = ;

        return (


            <Paper className={classes.root}>


                <Table className={classes.table} id="currentTeamTable" padding="dense">
                    <TableHead>
                        <TableRow className={classes.row}>
                            <TableCell></TableCell>

                            <TableCell>Chess</TableCell>
                            <TableCell>Spec</TableCell>
                            <TableCell>Class</TableCell>
                            {/* <TableCell align="right">Cost</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.currentChessPieces.map(row => (
                                <TableRow key={row.id} className={classes.row} onClick={this.pieceClicked} pieceName={row.name}>
                                    <TableCell scope="row" className="pieceIcon" >
                                        <img src={require(`./heroes/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} />
                                    </TableCell>
                                    <TableCell
                                        
                                        component="th"
                                        className="chessName">{row.name}
                                    </TableCell>

                                    <TableCell
                                        className={row.species.join(" ").toLowerCase()}
                                        onMouseEnter={this.toggleHoverEnter}
                                        onMouseLeave={this.toggleHoverExit}>{row.species.join(" ")}
                                    </TableCell>
                                    <TableCell
                                        className={row.class.join(" ").toLowerCase()}
                                        onMouseEnter={this.toggleHoverEnter}
                                        onMouseLeave={this.toggleHoverExit}>{row.class.join(" ")}
                                    </TableCell>
                                    {/* <TableCell align="right" className="pieceCost">{row.cost}</TableCell> */}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>

            </Paper>
        );
    }
}

CurrentTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentTeam);