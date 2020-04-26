import SHOP_DATA from '../pages/shoppinglist-page/shop-data';
import {updateFilterItems} from './itemActions';

const initialState = {
    SHOP_DATA
};

const itemsReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'UPDATE_SHOP_ITEMS':
            return {
                ...state,
                SHOP_DATA: updateFilterItems(state, action.payload)
            }

         default:
            return state;
    }
};

export default itemsReducer;