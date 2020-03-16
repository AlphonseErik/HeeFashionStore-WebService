import { ADD_TO_CART } from '../action/actionType';

let initialState = []

const CartItemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            // console.log(payload)
            let cartItem = [...state];
            cartItem.push(payload);
            state = cartItem;
            return [...state];
        }
        default:
            return state;
    }
}

export default CartItemReducer;
