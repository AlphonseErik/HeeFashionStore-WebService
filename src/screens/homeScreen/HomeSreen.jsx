import React from 'react';
import { connect } from 'react-redux';
import ProductService from '../../services/productService.jsx';
import { FETCH_PRODUCT_NEW_STYLE } from '../../redux/action/actionType';
import Carousel from '../../components/carousel/Carousel';
import HotProduct from '../../components/product/hotProduct/hotProduct';
import LoadingScreen from '../loadingScreen/loadingScreen';

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

    const renderHomeScreen = () => {
        return (
            state.isLoading ? (
                <React.Fragment>
                    <LoadingScreen />
                </React.Fragment>
            ) : (
                    <React.Fragment>
                        <Carousel item={props.productNewStyle} />
                        <HotProduct />
                    </React.Fragment>
                )
        )
    }

    return (
        <div>
            {renderHomeScreen()}
        </div>
    )
}

const mapStateToProps = state => ({
    credentials: state.user.credentials,
    productNewStyle: state.product.productItemNew
})

export default connect(mapStateToProps)(HomeScreen);