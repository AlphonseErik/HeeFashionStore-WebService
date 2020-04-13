import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CategoryReducer from './categoryReducer';
import ProductReducer from './productReducer';
import CartReducer from './cartReducer';

const RootReducer = combineReducers({
    user: UserReducer,
    category: CategoryReducer,
    product: ProductReducer,
    cart: CartReducer,
});

export default RootReducer;