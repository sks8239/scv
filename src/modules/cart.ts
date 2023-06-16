// Action Type
import {decrease, increase} from "./counter";

const ADD_ITEM = 'cart/ADD_ITEM';
const DELETE_ITEM = 'cart/DELETE_ITEM';



interface CartItem {
    id: number;
    productName: string;
    price: number;
}

// Action Creator & Action
export const addItem = (item : CartItem) => ({ type: ADD_ITEM, payload: item });
export const deleteItem = (id : number) => ({ type: DELETE_ITEM, payload: id });

const cartInitialState = [{ id: 1, productName: 'nacho', price: 2000 }];

// Reducer
const cart = (state = cartInitialState, action : { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case DELETE_ITEM:
            return state.filter((product) => product.id !== action.payload);
        default:
            return state;
    }
};

export default cart;