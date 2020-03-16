import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProductDetail } from '../../../redux/action/productAction';
import classes from './ProductDetail.module.scss'
import LoadingScreen from '../../../screens/loadingScreen/LoadingScreen';

const ProductDetail = props => {

    useEffect(() => {
        const { id } = props.match.params;
        props.dispatch(fetchProductDetail(id));
    }, []);

    const renderProductDetail = () => {
        return (
            props.productDetail ? (
                <div className={classes.productDetail}>
                    <img src={props.productDetail.image} alt="" />
                </div>
            ) : (
                    <div>
                        <LoadingScreen />
                    </div>
                )
        )
    }

    return (
        <div>
            <React.Fragment>
                {renderProductDetail()}
            </React.Fragment>
        </div>
    )
}

const mapStateToProps = state => ({
    productDetail: state.product.productDetail,
})

export default connect(mapStateToProps)(ProductDetail);
