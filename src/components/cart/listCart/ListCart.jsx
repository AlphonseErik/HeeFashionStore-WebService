import React from 'react'
import { connect } from 'react-redux';
import { Grid, makeStyles, Typography, Slider, Input } from '@material-ui/core';
import LoadingScreen from '../../../screens/loadingScreen/loadingScreen';
import { createStyles } from '@material-ui/core';
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
        if (props.amount) {
            return <Grid container spacing={spacing} justify="center">
                {props.amount.map((item, index) => {
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
    amount: state.amount.amountItem,
})

export default connect(mapStateToProps)(ListCart);
