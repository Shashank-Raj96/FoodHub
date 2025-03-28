import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
       addItem: (state , action ) => {
        // mutating the state here
            state.items.push(action.payload);
       } ,
       removeItem: (state) => {
        state.items.pop();
       },
       clearCart: (state) => {
        state.items.length = 0; // make our item=[] empty array
       },
    },
});
 

export const {addItem , removeItem , clearCart }= cartSlice.actions;

export default cartSlice.reducer;