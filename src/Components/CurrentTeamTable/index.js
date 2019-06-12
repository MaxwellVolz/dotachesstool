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
import Tooltip from '@material-ui/core/Tooltip';

import autochesspieces from '../../chessPieces';

import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        position: 'absolute',
        top: '1vh',
        right: '1vw',
        width: '20.5vw',
        height: '72vh',
        marginTop: 0,
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


        this.props.chessPieceUnchosenFired(piece);
        // console.log(piece);
    }

    refresh() {
        this.forceUpdate()
    }

    render() {
        const { classes } = this.props;

        return (


            <Paper id="piecesSection" className={`sectionContainer ${classes.root}`}>

                <table className="currentTeamTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Chess</th>
                            <th>Spec</th>
                            <th>Class</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.currentChessPieces.map(row => (
                            <tr key={row.id} onClick={this.pieceClicked} piecename={row.name}>
                                {/* <div className="maxHeightRowLimiter"> */}
                                <td className="iconTD"><img src={require(`./heroes/${row.name.toLowerCase().replace(/\s+/g, '')}.png`)} alt={`${row.name.toLowerCase()}Icon`} /></td>
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

CurrentTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentTeam);