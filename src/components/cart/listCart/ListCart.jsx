import React from 'react'
import { connect } from 'react-redux';
import { Grid, makeStyles, Typography, Slider, Input } from '@material-ui/core';
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';
import { createStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import { AMOUNT_PRODUCT } from '../../../redux/action/actionType';
import PaymentRenderPoduct from '../../payment/paymentRenderProduct/PaymentRenderPoduct';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: 250,
        },
        input: {
            width: 42,
        },
        alert: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

const ListCart = props => {
    const [spacing, setSpacing] = React.useState(10);

    const renderListCart = () => {
        if (props.cartItem) {
            return <Grid container spacing={spacing} justify="center">
                {props.cartItem.map((item, index) => {
                    return (
                        <Grid key={index} item>
                            <PaymentRenderPoduct item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        }
        return <LoadingScreen />
    }

    return (
        <React.Fragment>
            {renderListCart()}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    cartItem: state.cartItem,
    amount: state.amount.productToPayload,
})

export default connect(mapStateToProps)(ListCart);
