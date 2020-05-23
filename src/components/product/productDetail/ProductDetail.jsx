import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProductDetail } from '../../../redux/action/productAction';
import classes from './ProductDetail.module.scss'
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';
import { ADD_TO_CART, ADD_AMOUNT } from '../../../redux/action/actionType';

const ProductDetail = props => {

    let [state, setState] = React.useState({
        isLoading: true,
    });

    let timerHandle = () => {
        if (timerHandle) {
            clearTimeout(timerHandle);
            timerHandle = 0;
        }
    }

    useEffect(() => {
        const { id } = props.match.params;
        props.dispatch(fetchProductDetail(id));
        timerHandle = setTimeout(() => setState({ isLoading: false }), 500);
    }, []);

    const addToCart = (product, ID) => {
        let { productName, image, price, } = product
        props.dispatch({
            type: ADD_TO_CART,
            payload: { value: 1, ID, productName, price, image },
        })
        props.dispatch({
            type: ADD_AMOUNT,
            payload: { value: 1, ID, price, total: price },
        })
    }

    const renderDetail = () => {
        if (props.productDetail) {
            let { ID, productName, image, price, } = props.productDetail;
            return (
                <div>
                    <div className={classes.landingPage}>
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                </div>
                                <div className="col-2">
                                    <div className={classes.landingPage_gift}>
                                        <i className="fa fa-gift"></i>
                                        <span className="ml-2 mb-2">Coupon</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.textcourse}>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="productName">
                                            <h2>{productName}</h2>
                                        </div>
                                        <div className="moTa">
                                            <div className="cartRight text-center pt-1">
                                                <img src={image} height="500px" />
                                            </div>
                                        </div>
                                        <p className="mt-2"></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="whatYouLearn">
                        <div className="row">
                            <div className="col-8 col-lg-8 col-md-8 col-sm-6 ">
                            </div>
                            <div className="col-4 col-lg-4 col-md-4 col-sm-6 ">
                                <div className={classes.right_course}>
                                    <div className="cartRight text-center pt-1">
                                        {/* <img src={image} /> */}
                                    </div>
                                    <h1 className="text-danger">{productName}</h1>
                                    <div className="container">
                                        <div className="container">
                                            <div className={classes.righttext}>
                                                <h5>This Coure in clude</h5>
                                                <i className="incentives__icon incentives__icon--bold udi udi-video-design" />
                                                <div className="pl-3">
                                                    <p>7 hours on-demand video</p>
                                                    <p> 3 articles</p>
                                                    <p>4 downloadable resources</p>
                                                    <p>Full lifetime access</p>
                                                    <p> Access on mobile and TV</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.cartRightItem}>
                                            <h2 className="text-right">{price}$</h2>
                                            <button className="btn btn-danger"
                                                onClick={() => { addToCart(props.productDetail, ID) }}
                                            >Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div></div>
        )
    }

    return (
        <div>
            {state.isLoading ? (
                <LoadingScreen />
            ) : (
                    <div>
                        {renderDetail()}
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = state => ({ productDetail: state.product.productDetail, });

export default connect(mapStateToProps)(ProductDetail);