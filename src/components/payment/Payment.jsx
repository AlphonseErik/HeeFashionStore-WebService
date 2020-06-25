import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Grid } from '@material-ui/core';
import ListCart from '../cart/listCart/ListCart';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RenderCheck from './view/renderCheck/RenderCheck';
import { ADD_TOTAL } from '../../redux/action/actionType';

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

const Payment = props => {
    const classes = useStyles();

    const renderListCart = () => {
        return (
            <ListCart />
        )
    }

    const handleChange = (price, value, ID) => {
        props.dispatch({
            type: ADD_TOTAL,
            payload: { price, value, ID }
        })
    }

    const renderItemPayment = () => {
        console.log('cart', props.cart)
        return (
            <FormControl className={classes.formControl}>
                <Typography>Order Detail</Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell align="left">Product Name</TableCell>
                                <TableCell align="center">Amount</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.cart.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{index + 1}
                                    </TableCell>
                                    <TableCell align="left">{item.productName}</TableCell>
                                    <TableCell align="center">{item.value}</TableCell>
                                    <TableCell align="center">{item.price}</TableCell>
                                    <TableCell align="center" onChange={handleChange(item.price, item.value, item.ID)}>{item.price * item.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </FormControl>
        )
    }

    const renderCheck = () => {
        return (
            <div>
                <RenderCheck item={props.cart} history={props.history}/>
            </div>
        )
    }

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={7}>
                    {renderListCart()}
                </Grid>
                <Grid item xs={5}>
                    {renderItemPayment()}
                    {renderCheck()}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cartItem,
})

export default connect(mapStateToProps)(Payment);
