import {combineReducers} from 'redux';
import cartReducer from './cart-reducer';
import itemsReducer from './items-reducer';

export default combineReducers({
   cartReducer,
   itemsReducer
});