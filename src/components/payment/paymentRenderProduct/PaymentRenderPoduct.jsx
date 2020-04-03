import React from 'react'
import { connect } from 'react-redux';
import { CardActionArea, Card, CardMedia, CardContent, Button, makeStyles, Typography, CardActions, createStyles, Grid, Input } from '@material-ui/core';
import { AMOUNT_PRODUCT, DELETED_FROM_CART, ADD_TO_CART } from '../../../redux/action/actionType';
import { Alert } from '@material-ui/lab';
import { settings } from '../../../configs/settings';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            minWidth: 540,
            maxWidth: 540
        },
        input: {
            width: 42,
        },
        inputAmount: {
            width: 250,
        },
        alert: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
        cardAction: {

        }
    }));

const PaymentRenderPoduct = props => {

    const [value, setValue] = React.useState(1);
    const classes = useStyles();

    const { image, price, productName, ID } = props.item;

    //Action
    const addAmount = (value, ID, productName, price, image) => {
        props.dispatch({
            type: ADD_TO_CART,
            payload: { value, ID, productName, price, image }
        })
    }

    const deleteFromCart = (ID) => {
        props.dispatch({
            type: DELETED_FROM_CART,
            payload: ID
        })
    }
    const handleInputChange = event => {
        setValue(event.target.value === value ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 10) {
            setValue(10);
        }
    };

    //Render
    const renderErr = () => {
        if (value === 10) {
            return (
                <div>
                    <Alert severity="success">Maximum Amount</Alert>
                </div>
            )
        }
        if (value > 10) {
            return (
                <div className={classes.alert}>
                    <Alert severity="error">Maximum is 10</Alert>
                </div>
            )
        }
        if (value < 1) {
            return (
                <div className={classes.alert}>
                    <Alert severity="error">Minimum is 1</Alert>
                </div>
            )
        }

    }

    const renderUpDownAmount = () => {
        return (
            <div>
                <Grid item className={classes.inputAmount}>
                    x<Input className={classes.input} value={value} margin="dense" onChange={handleInputChange} onBlur={handleBlur} disableUnderline={true}
                        inputProps={{ step: 1, min: 1, max: 10, type: 'number', 'aria-labelledby': 'input-slider' }} onClick={() => { addAmount(value, ID, productName, price, image) }}
                    />
                </Grid>
                <Grid>{renderErr()}</Grid>
            </div>
        )
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={productName}
                    height="140"
                    image={image}
                    title={productName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {productName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" disableFocusRipple={true} disableElevation={true} disableRipple={true}>
                    {renderUpDownAmount()}
                </Button>
                <Button size="medium" disableFocusRipple={true} disableElevation={true} disableRipple={true} onClick={() => { deleteFromCart(ID) }}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

const mapStateToProps = state => ({
    amount: state.amount.amountItem,
})

export default connect(mapStateToProps)(PaymentRenderPoduct);
