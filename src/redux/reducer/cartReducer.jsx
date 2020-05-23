import { DELETED_FROM_CART, GET_PRODUCT, ADD_TO_CART, ORDER_DELETE_PRODUCT, ADD_TOTAL } from '../action/actionType';
import { settings } from '../../configs/settings';

let initialState = {
    cartItem: [],
    totalPrice: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            let cartItem = [...state.cartItem];
            let index = cartItem.findIndex(product => product.ID === payload.ID);
            if (index === -1) {
                cartItem.push(payload);
            }
            else {
                cartItem.splice(index, 1, payload)
            }
            state.cartItem = cartItem;
            localStorage.setItem(settings.product, JSON.stringify(state.cartItem));
            return { ...state };

        }
        case DELETED_FROM_CART: {
            let cartItem = [state.cartItem];
            let index = cartItem.findIndex(product => product.ID === payload);
            cartItem.splice(index, 1);
            state.cartItem = cartItem;
            localStorage.setItem(settings.product, JSON.stringify(state.cartItem));
            return { ...state };
        }
        case GET_PRODUCT: {
            // console.log('get', payload)
            state.cartItem = payload;
            return { ...state };
        }
        case ORDER_DELETE_PRODUCT: {
            localStorage.setItem(settings.product, []);
            return state
        }
        case ADD_TOTAL: {
            // let totalPrice = [...state.totalPrice];
            // let index = totalPrice.findIndex(product => product.ID === payload.ID);
            // console.log(index)
            // if (index === -1) {
            let { price, value } = payload;
            let totalPrice = (price * value)
            // } else {
            //     let { price, value } = payload;
            //     let addNew = (price * value)
            //     totalPrice += addNew
            // }
            state.totalPrice = totalPrice;
            return { ...state }
        }
        default:
            return state;
    }
}

export default CartReducer;
