/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

export const fetchCoins = createAsyncThunk(
  'coins/fetchCoins',
  async () => {
    const response = await fetch(BASE_URL);
    
    const data = await response.json();
    const coins = data.map((coin, i) => ({
      id: coin.id,
      name: coin.name,
      logo: coin.image,
      index: i,
    }));
    return coins;
  },
);

const data = {
  name: 'coins',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => action.payload,
  },
};

const coinSlice = createSlice(data);

export default coinSlice.reducer;
