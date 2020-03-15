import { FETCH_CATEGORY } from '../action/actionType';

let initialState = {
    categoryItem: null
}

const CategoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CATEGORY: {
            state.categoryItem = payload;
            return { ...state };
        }
        default:
            return state;
    }
}

export default CategoryReducer;
