import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CategoryReducer from './categoryReducer';
import ProductReducer from './productReducer';
import CartItemReducer from './cartItemReducer';

const RootReducer = combineReducers({
    user: UserReducer,
    category: CategoryReducer,
    product: ProductReducer,
    cartItem: CartItemReducer,
});

export default RootReducer;