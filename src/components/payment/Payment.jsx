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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Payment = props => {
    const classes = useStyles();

    const renderListCart = () => {
        return (
            <ListCart />
        )
    }

    const renderPayment = () => {
        return (
            <FormControl className={classes.formControl}>
                <Typography>Order Detail</Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell align="right">Product Name</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.amount.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{index + 1}
                                    </TableCell>
                                    <TableCell align="right">{item.productName}</TableCell>
                                    <TableCell align="right">{item.value}</TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.price * item.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableRow>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">:    0$</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </FormControl>
        )
    }

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={7}>
                    {renderListCart()}
                </Grid>
                <Grid item xs={5}>
                    {renderPayment()}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    amount: state.amount,
})

export default connect(mapStateToProps)(Payment);
