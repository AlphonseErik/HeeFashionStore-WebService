import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CategoryReducer from './categoryReducer';
import ProductReducer from './productReducer';
import CartItemReducer from './cartItemReducer';
import AmountReducer from './amountReducer';

const RootReducer = combineReducers({
    user: UserReducer,
    category: CategoryReducer,
    product: ProductReducer,
    cartItem: CartItemReducer,
    amount: AmountReducer,
});

export default RootReducer;