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
        width: '77vw',
        position: 'absolute',
        top: '1vh',
        left: '1vw',
        height: '88vh',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        width: '31%',
        float: 'left',
        margin: '0 1%'
    },
    row:{
        height: '28px'
    }
});


const table1 = autochesspieces.slice(0, 20);
const table2 = autochesspieces.slice(20, 40);
const table3 = autochesspieces.slice(40, 60);


class SimpleTable extends React.Component {

    constructor(props) {
        super(props);
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

        this.props.chessPieceChosenFired(piece);
    }

    render() {
        const { classes } = this.props;

        return (


            <Paper className={classes.root}>

            <h5 style={{'margin':0}}>Chess Pieces</h5>

                <Table className={classes.table} padding="dense">
                    <TableHead>
                        <TableRow className={classes.row}>
                            <TableCell></TableCell>

                            <TableCell>Chess</TableCell>
                            <TableCell>Spec</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell align="right">Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table1.map(row => (
                            <TableRow key={row.id} className={classes.row} onClick={this.pieceClicked} piecename={row.name}>
                                <TableCell scope="row" className="pieceIcon" >
                                    <img src={require(`./Pieces/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} />
                                </TableCell>
                                <TableCell 
                                    component="th" 
                                    className="chessName"
                                    >{row.name}</TableCell>

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
                                <TableCell align="right" className="pieceCost">{row.cost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Table className={classes.table} padding="dense">
                    <TableHead>
                        <TableRow className={classes.row}>
                            <TableCell></TableCell>

                            <TableCell>Chess</TableCell>
                            <TableCell>Spec</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell align="right">Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table2.map(row => (
                            <TableRow key={row.id} className={classes.row} onClick={this.pieceClicked} piecename={row.name}>
                                <TableCell scope="row" className="pieceIcon" >
                                    <img src={require(`./Pieces/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} />
                                </TableCell>
                                <TableCell component="th" className="chessName">{row.name}</TableCell>

                                <TableCell className={row.species.join(" ").toLowerCase()} onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}>{row.species.join(" ")}</TableCell>
                                <TableCell className={row.class.join(" ").toLowerCase()} onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}>{row.class.join(" ")}</TableCell>
                                <TableCell align="right" className="pieceCost">{row.cost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Table className={classes.table} padding="dense">
                    <TableHead>
                        <TableRow className={classes.row}>
                            <TableCell></TableCell>

                            <TableCell>Chess</TableCell>
                            <TableCell>Spec</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell align="right">Cost</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table3.map(row => (
                            <TableRow key={row.id} className={classes.row} onClick={this.pieceClicked} piecename={row.name}>
                                <TableCell scope="row" className="pieceIcon" >
                                    <img src={require(`./Pieces/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} />
                                </TableCell>
                                <TableCell component="th" className="chessName">{row.name}</TableCell>

                                <TableCell className={row.species.join(" ").toLowerCase()} onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}>{row.species.join(" ")}</TableCell>
                                <TableCell className={row.class.join(" ").toLowerCase()} onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}>{row.class.join(" ")}</TableCell>
                                <TableCell align="right" className="pieceCost">{row.cost}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);