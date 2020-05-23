import { FETCH_ALL_ORDERS } from '../action/actionType';

let initialState = {
    orders: null
}

const OrderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_ORDERS: {
            console.log('payload', payload);
            state.orders = payload;
            return { ...state };
        }
        default:
            return state;
    }
}

export default OrderReducer;