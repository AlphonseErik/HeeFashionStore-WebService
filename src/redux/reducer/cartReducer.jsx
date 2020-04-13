import { AMOUNT_PRODUCT, DELETED_FROM_CART, GET_PRODUCT, ADD_TO_CART } from '../action/actionType';
import { settings } from '../../configs/settings';

let initialState = {
    // amountItem: [],
    cartItem: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            console.log(payload)
            console.log(payload.value, payload.ID)
            let cartItem = [...state.cartItem];
            console.log(cartItem)
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
            console.log(payload)
            let cartItem = [...state.cartItem];
            let index = cartItem.findIndex(product => product.ID === payload);
            console.log(index);
            cartItem.splice(index, 1);
            state.cartItem = cartItem;
            localStorage.setItem(settings.product, JSON.stringify(state.cartItem));
            return { ...state };
        }
        case GET_PRODUCT: {
            // let cartItem = [...state.cartItem];
            // cartItem.push(payload);
            console.log('get', payload)
            state.cartItem = payload;
            return { ...state };
        }
        default:
            return state;
    }
}

export default CartReducer;
