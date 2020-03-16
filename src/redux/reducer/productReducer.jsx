import { FETCH_PRODUCT_NEW_STYLE, FETCH_PRODUCT_DETAIL, FETCH_PRODUCT_BY_CATEGORY_NAME } from '../action/actionType';

let initialState = {
    productItemNew: null,
    productDetail: null,
    productGetByCategory: null,
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
        case FETCH_PRODUCT_BY_CATEGORY_NAME: {
            state.productGetByCategory = payload;
            return { ...state };
        }
        default:
            return state;
    }
}

export default ProductReducer;
