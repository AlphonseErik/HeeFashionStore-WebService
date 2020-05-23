import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TableBody, TableRow, TableCell, FormControl, TableContainer, Table, Button } from '@material-ui/core';
import { orderAction } from '../../../../redux/action/orderAction';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        fullWidth: 120
    },
    table: {
        minWidth: 650,
    },
}));

function RenderCheck(props) {

    const classes = useStyles();

    console.log('amount', props.cart);
    console.log('userID', props.userID);
    console.log('history', props.history);
    console.log('cart', props.cart);

    const handleSubmitOrder = e => {
        e.preventDefault();
        let valid = true;
        if (!props.userID) {
            return alert('User Must Login First!!');
        }
        if (valid) {
            let { ID } = props.userID;
            props.dispatch(orderAction(props.cart, ID, props.history))
        }
        else {
            alert('Please Check Again!!');
        }
    }

    const renderReceive = () => {
        return (
            <FormControl>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </FormControl>
        )
    }

    React.useEffect(()=>{

    },[props.cart], [props.total])

    let total = 0

    let renderTotal = () => {
        if (props.total) {
            return (
                <TableCell align="right">Total:{props.total}$</TableCell>
            )
        }
        return (
            <TableCell align="right">Total: 0$</TableCell>
        )
    }

    const renderCheck = () => {
        return (
            <form onSubmit={handleSubmitOrder}>
                <FormControl className={classes.formControl}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    {renderTotal()}
                                    <TableCell align="right">
                                        <Button variant="contained" color="secondary" type="submit">Payment</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </FormControl>
            </form>
        )
    }

    return (
        <div>
            {renderCheck()}
            <br />
            <br />
            {renderReceive()}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cartItem,
    userID: state.user.userDetail,
    total: state.cart.totalPrice
})

export default connect(mapStateToProps)(RenderCheck);
