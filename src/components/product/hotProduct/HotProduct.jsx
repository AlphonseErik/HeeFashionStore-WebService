import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';
import ProductItem from '../productItem/ProductItem';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const HotProduct = props => {

    const [spacing] = React.useState(10);
    const classes = useStyles();

    let renderPagination = () => {
        if (props.productHotItem) {
            return (
                <Grid container justify="center" spacing={spacing}>
                    <Pagination count={props.productHotItem.pages} />
                </Grid>
            )
        }
    }

    const renderProduct = () => {
        console.log(props.productHotItem)
        if (props.productHotItem) {
            return <Grid container spacing={spacing} justify="center">
                {props.productHotItem.docs.map((item, index) => {
                    if (index < 6) {
                        return (
                            <Grid key={index} item>
                                <ProductItem item={item} />
                            </Grid>
                        )
                    }
                })
                }
            </Grid>
        }
        return <LoadingScreen />
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <p>This is Hot Propduct</p>
                {renderProduct()}
                {renderPagination()}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    productHotItem: state.product.productItemNew,
})

export default connect(mapStateToProps)(HotProduct);
