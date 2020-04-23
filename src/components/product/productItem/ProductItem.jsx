import React from 'react'
import { connect } from 'react-redux';
import { Grid, Button, makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import { ADD_TO_CART, ADD_AMOUNT } from '../../../redux/action/actionType';
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    paper: {
        height: 380,
        width: 280,
        textAlign: 'center',
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const ProductItem = props => {

    const classes = useStyles();

    const { image, productName, ID, price } = props.item;

    const addToCart = (product, ID) => {
        props.dispatch({
            type: ADD_TO_CART,
            payload: { value: 1, ID, productName, price, image },
        })
        props.dispatch({
            type: ADD_AMOUNT,
            payload: { value: 1, ID, price, total: price },
        })
    }

    const renderProductItem = () => {
        if (props.item) {
            return (
                <Card className={classes.paper}>
                    <CardActionArea>
                        <CardMedia component="img" image={image} height="220" width="200" margin="0 auto" alt={productName} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{productName}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="secondary" onClick={() => { addToCart(props.item, ID) }}>Add</Button>
                        <Button size="small" color="primary" href={`/products/${ID}`}>Detail</Button>
                    </CardActions>
                </Card>
            )
        }
        return <LoadingScreen />
    }

    return (
        <Grid>
            {renderProductItem()}
        </Grid>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ProductItem);