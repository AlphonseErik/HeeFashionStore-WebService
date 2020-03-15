import React, { useEffect } from 'react';
import Header from '../../layouts/header/Header';
import { connect } from 'react-redux';
import ProductService from '../../services/productService.jsx';
import { FETCH_PRODUCT_NEW_STYLE } from '../../redux/action/actionType';
import Carousel from '../../components/carousel/Carousel';
import HotProduct from '../../components/product/hotProduct/HotProduct';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const productService = new ProductService();

const HomeScreen = props => {

    const timer = React.useRef();
    let [state, setState] = React.useState({
        isLoading: true,
    });

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    React.useEffect(() => {
        productService.fetchProductNewStyle().then(res => {
            props.dispatch({
                type: FETCH_PRODUCT_NEW_STYLE,
                payload: res.data,
            })
        }).catch(err => {
            console.log(err);
        })
        timer.current = setTimeout(() => setState({ isLoading: false }), 200);
    }, [])

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                {state.isLoading ? (
                    <Container fixed>
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
                        <Header />
                        <LoadingScreen />
                    </Container>
                ) : (
                        <Container fixed>
                            <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
                            <Header />
                            <Carousel item={props.productNewStyle} />
                            <HotProduct />
                        </Container>
                    )}
            </React.Fragment>
        </div>
    )
}

const mapStateToProps = state => ({
    credentials: state.user.credentials,
    productNewStyle: state.product.productItemNew
})

export default connect(mapStateToProps)(HomeScreen);