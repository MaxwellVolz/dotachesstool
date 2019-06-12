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
        width: '62vw',
        position: 'absolute',
        top: '0.2vh',
        left: '0.1vw',
        height: '72.8vh',
        marginTop: 0,
        overflowX: 'auto',
    },
    table: {
        width: '31%',
        float: 'left',
        margin: '0 1%'
    },
    row: {
        height: 0
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
    }
    toggleHoverExit(e) {

        let classNames = e.target.className.split(" ");

        let classToHighlight = classNames[classNames.length - 1]

        let elemsToHighlight = document.getElementsByClassName(classToHighlight);

        let i;
        for (i = 0; i < elemsToHighlight.length; i++) {
            elemsToHighlight[i].style.backgroundColor = "#13191a";
        }
    }
    pieceClicked = (e) => {

        let pieceName = e.target.parentNode.getAttribute("piecename")

        let piece = autochesspieces.find(function (element) {
            return element.name == pieceName;
        });

        this.props.chessPieceChosenFired(piece,true);
    }

    render() {
        const { classes } = this.props;

        return (


            <Paper id="piecesSection" className={`sectionContainer ${classes.root}`}>

                <h5 className="shortHeader">Chess Pieces</h5>

                <table className="simpleTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Chess</th>
                            <th>Spec</th>
                            <th>Class</th>
                            <th>$</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table1.map(row => (
                            <tr key={row.id} onClick={this.pieceClicked} piecename={row.name}>
                                {/* <div className="maxHeightRowLimiter"> */}
                                <td className="iconTD"><img src={require(`./Pieces/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} /></td>
                                <td>{row.name}</td>
                                <td onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}
                                    className={row.species.join(" ").toLowerCase()}>{row.species.join(" ")}</td>
                                <td onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}
                                    className={row.class.join(" ").toLowerCase()}>{row.class.join(" ")}</td>
                                <td>{row.cost}</td>
                                {/* </div> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="simpleTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Chess</th>
                            <th>Spec</th>
                            <th>Class</th>
                            <th>$</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table2.map(row => (
                            <tr key={row.id} onClick={this.pieceClicked} piecename={row.name}>
                                {/* <div className="maxHeightRowLimiter"> */}
                                <td className="iconTD"><img src={require(`./Pieces/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} /></td>
                                <td>{row.name}</td>
                                <td
                                    onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}
                                    className={row.species.join(" ").toLowerCase()}>{row.species.join(" ")}</td>
                                <td
                                    onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}
                                    className={row.class.join(" ").toLowerCase()}>{row.class.join(" ")}</td>
                                <td>{row.cost}</td>
                                {/* </div> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="simpleTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Chess</th>
                            <th>Spec</th>
                            <th>Class</th>
                            <th>$</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table3.map(row => (
                            <tr key={row.id} onClick={this.pieceClicked} piecename={row.name}>
                                {/* <div className="maxHeightRowLimiter"> */}
                                <td className="iconTD"><img src={require(`./Pieces/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} /></td>
                                <td>{row.name}</td>
                                <td onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}
                                    className={row.species.join(" ").toLowerCase()}>{row.species.join(" ")}</td>
                                <td onMouseEnter={this.toggleHoverEnter}
                                    onMouseLeave={this.toggleHoverExit}
                                    className={row.class.join(" ").toLowerCase()}>{row.class.join(" ")}</td>
                                <td>{row.cost}</td>
                                {/* </div> */}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);