import React from 'react'
import { connect } from 'react-redux';
import ProductItem from '../../product/productItem/ProductItem';
import { Grid, makeStyles } from '@material-ui/core';
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const ListCart = props => {

    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();

    const renderListCart = () => {
        if (props.cartItem) {
            return <Grid container spacing={spacing} justify="center">
                {props.cartItem.map((item, index) => {
                    return (
                        <Grid key={index} item>
                            <ProductItem item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        }
        return <LoadingScreen />
    }

    const renderPayment = () => {
        
    }

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={7}>
                    {renderListCart()}
                </Grid>
                <Grid item xs={5}>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    cartItem: state.cartItem
})

export default connect(mapStateToProps)(ListCart);
