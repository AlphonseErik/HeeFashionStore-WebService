import { FETCH_PRODUCT_NEW_STYLE, FETCH_PRODUCT_DETAIL } from '../action/actionType';

let initialState = {
    productItemNew: null,
    productDetail: null,
}

const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PRODUCT_NEW_STYLE: {
            state.productItemNew = payload;
            return { ...state };
        }
        case FETCH_PRODUCT_DETAIL: {
            state.productDetail = payload;
            return { ...state };
        }
        default:
            return state;
    }
}

export default ProductReducer;
