/* eslint-disable */

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';
const GET_COIN_DATA = 'GET_COIN_DATA';

export const fetchCoinsDetailsApi = async(coin) => {
  const response = await fetch(`${BASE_URL}${coin}`);
  const data = await response.json();
  const details =[data].map(coin => ({
    id: coin.id,
    name: coin.name,
    image: coin.image.large,
    price: coin.market_data.current_price.usd,
    rank: coin.market_cap_rank,
    priceChange1h: coin.market_data.price_change_percentage_1h_in_currency.usd,
    priceChange1d: coin.market_data.price_change_24h_in_currency.usd,
    priceChange1w: coin.market_data.price_change_percentage_7d_in_currency.usd
   }))
   return details;
} 

const coinDataReducer = (state = [] , action ={} ) => {
  switch (action.type) {
    case GET_COIN_DATA:
     return action.payload

    default: 
      return state  
  }
}

export default coinDataReducer;



export const fetchCoinsDetails = (coin) => async (dispatch) => {
  const coinData = await fetchCoinsDetailsApi(`${coin}`);
  dispatch({type: GET_COIN_DATA , payload: coinData });
}


