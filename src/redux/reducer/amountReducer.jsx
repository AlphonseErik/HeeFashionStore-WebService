import { ADD_AMOUNT } from "../action/actionType";
import { settings } from "../../configs/settings";


let initialState = {
    amountItem: [],
};

const AmountReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_AMOUNT: {
            console.log('add_amount', payload);
            let amountItem = [...state.amountItem];
            let index = amountItem.findIndex(product => product.ID === payload.ID);
            if (index === -1) {
                amountItem.push(payload);
            }
            else {
                amountItem.splice(index, 1, payload)
            }
            state.amountItem = amountItem;
            localStorage.setItem(settings.amount, JSON.stringify(state.amountItem));
            return { ...state }
        }
        default:
            return state;
    }
}

export default AmountReducer;