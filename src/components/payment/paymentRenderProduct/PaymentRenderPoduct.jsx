import React from 'react'
import { connect } from 'react-redux';
import { CardActionArea, Card, CardMedia, CardContent, Button, makeStyles, Typography, CardActions, createStyles, Grid, Slider, Input } from '@material-ui/core';
import { AMOUNT_PRODUCT } from '../../../redux/action/actionType';
import { Alert } from '@material-ui/lab';

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
    const addAmount = (value, ID) => {
        props.dispatch({
            type: AMOUNT_PRODUCT,
            payload: { value, ID }
        })
    }

    const handleInputChange = event => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 10) {
            setValue(10);
        }
    };

    const renderErr = () => {
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

    const renderSuccess = () => {
        if (value === 10) {
            return (
                <div>
                    <Alert severity="success">Maximum Amount</Alert>
                </div>
            )
        }
    }

    const renderUpDownAmount = () => {
        return (
            <div>
                <Grid item className={classes.inputAmount}>
                    x<Input className={classes.input} value={value} margin="dense" onChange={handleInputChange} onBlur={handleBlur} disableUnderline={true}
                        inputProps={{ step: 1, min: 1, max: 10, type: 'number', 'aria-labelledby': 'input-slider' }} onClick={() => { addAmount(value, ID) }}
                    />{renderSuccess()}
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
            </CardActions>

        </Card>
    )
}

export default connect()(PaymentRenderPoduct);
