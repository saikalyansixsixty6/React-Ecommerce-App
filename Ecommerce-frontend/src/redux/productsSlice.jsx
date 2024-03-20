import { createSlice } from '@reduxjs/toolkit'
const initialState = [];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsCart(state, action) {
            state.push(...action.payload)
        },
    }
})

export const { productsCart } = productsSlice.actions;
export default productsSlice.reducer;