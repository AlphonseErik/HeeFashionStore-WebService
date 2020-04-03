import ProductService from '../../services/productService';
import { FETCH_PRODUCT_DETAIL, FETCH_PRODUCT_BY_CATEGORY_NAME } from './actionType';
import reduxAction from './action';

const productService = new ProductService();

//async action
export const fetchProductDetail = (productid) => {
    return dispatch => {
        productService.fetchProductByID(productid).then(res => {
            dispatch(reduxAction(FETCH_PRODUCT_DETAIL, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
};

export const fetchProductByCategoryName = (categoryname) => {
    return dispatch => {
        productService.fetchProductByCategoryName(categoryname).then(res => {
            dispatch(reduxAction(FETCH_PRODUCT_BY_CATEGORY_NAME, res.data));
        }).catch(err => {
            console.log(err)
        })
    }
}

// export const 