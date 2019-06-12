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

            <table className="comboTable">
                    <thead>
                        <tr>
                            <th className="beast">Beast</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  className="comboIconTD">
                                <img src={require(`./Combos/beast.png`)} alt={`beastIcon`} />
                            </td>
                            <td>
                            <tr>
                                <td className="comboAmount">2</td>
                                <td className="comboDesc">All allies have +10% attack damage, including summoned units.</td>
                            </tr>
                            
                            <tr>
                                <td className="comboAmount">4</td>
                                <td className="comboDesc">All allies have +20% attack damage, including summoned units.</td>
                            </tr>
                            </td>

                        </tr>
                    </tbody>
                </table>

           


        );
    }
}

Combos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Combos);