import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false,
        portfolioData: null,
        reloadDate:false,
    },
    reducers: {
        showLoading: (state, action) => {
            state.loading = true;
        },
        hideLoading: (state, action) => {
            state.loading = false;
        },
        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData:(state, action)=>{
            state.portfolioData = action.payload
        }
    }
});

export const { showLoading, hideLoading, setPortfolioData,ReloadData } = rootSlice.actions;
export default rootSlice.reducer;
