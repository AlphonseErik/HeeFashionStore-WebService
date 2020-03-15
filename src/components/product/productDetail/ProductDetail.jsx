import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProductDetail } from '../../../redux/action/productAction';
import classes from './ProductDetail.module.scss'

const ProductDetail = props => {

    useEffect(() => {
        const { id } = props.match.params;
        props.dispatch(fetchProductDetail(id));
    }, []);

    return (
        <div>
            {props.productDetail ? (
                <div className={classes.productDetail}>
                    <img src={props.productDetail.image} alt="" />
                </div>
            ) : (
                    <div>

                    </div>
                )}
        </div>
    )
}

const mapStateToProps = state => ({
    productDetail: state.product.productDetail,
})

export default connect(mapStateToProps)(ProductDetail);
