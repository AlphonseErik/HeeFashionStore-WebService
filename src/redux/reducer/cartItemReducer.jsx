import { ADD_TO_CART, DELETED_FROM_CART } from '../action/actionType';

let initialState = []

const CartItemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            console.log(payload)
            let cartItem = [...state];
            let index = cartItem.findIndex(item => item.ID === payload.ID);
            if (index !== -1) {
                cartItem[index].i += 1;
            } else {
                cartItem.push(payload);
            }
            state = cartItem;
            return [...state];
        }
        case DELETED_FROM_CART: {
            console.log(payload)
            let index = state.findIndex(item => item.ID === payload);
            state.splice(index, 1)
            return [...state];
        }
        default:
            return state;
    }
}

export default CartItemReducer;
