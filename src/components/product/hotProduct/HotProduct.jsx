import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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

const HotProduct = props => {

    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();

    const renderProduct = () => {
        if (props.productHotItem) {
            return <Grid container justify="center" spacing={spacing}>
                {props.productHotItem.map((e, index) => {
                    if (index < 6) {
                        return (
                            <Grid key={index} item>
                                <Paper className={classes.paper}>
                                    <img src={e.image} height="220px" width="200" margin="0 auto" />
                                    <p>{e.productName}</p>
                                    <Button variant="contained" color="primary" href={`/products/${e.ID}`}>
                                        Detail
                                    </Button>
                                </Paper>
                            </Grid>
                        )
                    }
                })
                }</Grid>
        }
    }

    return (

        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <p>This is Hot Propduct</p>
                {renderProduct()}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    productHotItem: state.product.productItemNew,
})

export default connect(mapStateToProps)(HotProduct);
