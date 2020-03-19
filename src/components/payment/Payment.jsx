import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField, Typography, Grid } from '@material-ui/core';
import ListCart from '../cart/listCart/ListCart';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 40,
        maxWidth: 90
    },
}));

const Payment = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState('');
    console.log('Payment', props.cartItem)

    const handleChange = event => {
        setAmount(Number(event.target.value) || '');
    };

    const renderListCart = () => {
        return (
            <ListCart />
        )
    }

    const renderPayment = () => {
        return (
            <FormControl className={classes.formControl}>
                <Typography>Payment</Typography>
                <TextField style={{ margin: 2 }} />
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
    cartItem: state.cartItem
})

export default connect(mapStateToProps)(Payment);
