import { AMOUNT_PRODUCT } from '../action/actionType';

let initialState = []

const AmountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AMOUNT_PRODUCT: {
            console.log(payload.value, payload.ID)
            let amountItem = [...state];
            let index = amountItem.findIndex(product => product.ID === payload.ID);
            if (index === -1) {
                amountItem.push(payload);
            }
            else {
                amountItem.splice(index, 1, payload)
            }
            state = amountItem
            return [...state];
        }
        default:
            return state;
    }
}

export default AmountReducer;
