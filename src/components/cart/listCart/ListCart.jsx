import React from 'react'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';
import PaymentRenderPoduct from '../../payment/view/renderProduct/RenderPoduct';

const ListCart = props => {
    const [spacing] = React.useState(10);

    const renderListCart = () => {
        if (props.cart) {
            return <Grid container spacing={spacing} justify="center">
                {props.cart.map((item, index) => {
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
    cart: state.cart.cartItem,
})

export default connect(mapStateToProps)(ListCart);
