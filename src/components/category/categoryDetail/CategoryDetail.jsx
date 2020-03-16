import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProductByCategoryName } from '../../../redux/action/productAction';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../../layouts/header/Header';
import ProductItem from '../../product/productItem/ProductItem';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        '& > *': {
            marginTop: theme.spacing(2),
        },
    }
}));

const CategoryDetail = props => {

    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(10);

    useEffect(() => {
        const { categoryname } = props.match.params;
        props.dispatch(fetchProductByCategoryName(categoryname))
    }, [])

    let renderPagination = () => {
        if (props.productGetByCategory) {
            return (
                <Grid container justify="center" spacing={spacing}>
                    <Pagination count={props.productGetByCategory.pages} />
                </Grid>
            )
        }
    }

    let renderProductGetByCategory = () => {
        if (props.productGetByCategory) {
            if (props.productGetByCategory.total === 0) {
                return (
                    <Grid container justify="center" spacing={spacing}>
                        <Grid item>
                            <Typography>No Product Content</Typography>
                        </Grid>
                    </Grid>
                )
            } else {
                return <Grid container justify="center" spacing={spacing}>
                    {props.productGetByCategory.docs.map((item, index) => {
                        return (
                            <Grid key={index} item>
                                <ProductItem item={item} />
                            </Grid>
                        )
                    })
                    }
                </Grid>
            }
        }
        return <LoadingScreen />
    }

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    {renderProductGetByCategory()}
                    {renderPagination()}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    productGetByCategory: state.product.productGetByCategory,
})

export default connect(mapStateToProps)(CategoryDetail);
