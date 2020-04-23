import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CategoryReducer from './categoryReducer';
import ProductReducer from './productReducer';
import CartReducer from './cartReducer';
import AmountReducer from './amountReducer';

const RootReducer = combineReducers({
    user: UserReducer,
    category: CategoryReducer,
    product: ProductReducer,
    cart: CartReducer,
    amount: AmountReducer,
});

export default RootReducer;