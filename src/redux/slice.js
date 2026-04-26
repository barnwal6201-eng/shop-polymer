import { createSlice } from "@reduxjs/toolkit"


const initialState={
     items: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
     showPopup: false
}

const Cart= createSlice({
    name:'cart',
    initialState,
    reducers:{
       addToCart:(state, action)=>{
        state.items.push(action.payload)
        localStorage.setItem('cart', JSON.stringify(state.items) )
        state.showPopup = true 
       },
      hidePopup: (state) => {
      state.showPopup = false  
     },
     removeFromCart:(state, action) => {
        const index = state.items.findIndex(item=> item.id === action.payload.id)
        if(index !== -1) state.items.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(state.items) )
     },
     updateQuantity: (state, action) => {
        const item = state.items.find(item=> item.id === action.payload.id)
        if(item) item.quantity = action.payload.quantity
        localStorage.setItem('cart', JSON.stringify(state.items) )
     },

     clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
     },

    }
})

export const {addToCart, hidePopup, removeFromCart, updateQuantity, clearCart} = Cart.actions
export default Cart.reducer