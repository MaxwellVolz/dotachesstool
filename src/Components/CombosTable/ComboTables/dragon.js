import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import autochesspieces from '../../../chessPieces';

const styles = theme => ({
    root: {
        position: 'absolute',
        bottom: '1vh',
        left: '1vw',
        width: '98vw',
        height: '25vh',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'hidden',
    },
    table: {
        width: '19%',
        float: 'left',
        margin: '0 1%'
    },
    row: {
        height: '28px',
        width: '100%',
    },
    margin: {
        margin: '12px 12px 0 0',
    },
    customWidth: {
        maxWidth: 500,
    },
    nopadding: {
        padding: '0 24px 0 0',
        borderBottom: 'none !important'
    }
});



class Combos extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.onRef(this)
    // }
    // componentWillUnmount() {
    //     this.props.onRef(undefined)
    // }


    toggleHoverEnter(e) {
        console.log("toggleHoverEnter")
    }

    toggleHoverExit(e) {
        console.log("toggleHoverExit")

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


        return (

            <Table className={classes.table} id="comboTeamTable" padding="dense">
                <TableHead>
                    <TableRow className={classes.row}>
                        <TableCell className={classes.nopadding}>Dragon</TableCell>

                        <TableCell className={classes.nopadding}>Attunement</TableCell>
                        <TableCell className={classes.nopadding}>#</TableCell>
                        {/* <TableCell align="right">Cost</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow className={classes.row}>
                        <TableCell scope="row" className={classes.nopadding}>
                            <img src={require(`./Combos/dragon.png`)} alt={`dragonIcon`} />
                        </TableCell>
                        <TableCell
                            component="th"
                            className={classes.nopadding}>All friendly dragons have 100 mana when battle starts.
                                    </TableCell>
                        <TableCell
                            className={classes.nopadding}
                            onMouseEnter={this.toggleHoverEnter}
                            onMouseLeave={this.toggleHoverExit}>3
                                    </TableCell>
                        {/* <TableCell align="right" className="pieceCost">{row.cost}</TableCell> */}
                    </TableRow>
                    
                </TableBody>
            </Table>



        );
    }
}

Combos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Combos);