import { AMOUNT_PRODUCT, DELETED_FROM_CART, GET_PRODUCT, ADD_TO_CART } from '../action/actionType';
import { settings } from '../../configs/settings';

let initialState = {
    amountItem: []
};

const AmountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            console.log(payload)
            console.log(payload.value, payload.ID)
            let amountItem = [...state.amountItem];
            console.log(amountItem)
            let index = amountItem.findIndex(product => product.ID === payload.ID);
            if (index === -1) {
                amountItem.push(payload);
            }
            else {
                amountItem.splice(index, 1, payload)
            }
            state.amountItem = amountItem;
            localStorage.setItem(settings.product, JSON.stringify(state.amountItem));
            return { ...state };

        }
        case DELETED_FROM_CART: {
            console.log(payload)
            let amountItem = [...state.amountItem];
            let index = amountItem.findIndex(product => product.ID === payload);
            console.log(index);
            amountItem.splice(index, 1);
            state.amountItem = amountItem;
            localStorage.setItem(settings.product, JSON.stringify(state.amountItem));
            return { ...state };
        }
        case GET_PRODUCT: {
            // let amountItem = [...state.amountItem];
            // amountItem.push(payload);
            console.log('get', payload)
            state.amountItem = payload;
            return { ...state };
        }
        default:
            return state;
    }
}

export default AmountReducer;
