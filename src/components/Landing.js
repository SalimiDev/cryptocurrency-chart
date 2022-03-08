import React, { useEffect, useState } from 'react';
//Api
import { getCoin } from '../services/api';
//Components
import Coin from './Coin';
import Loader from './Loader';

const Landing = () => {
      //States
      const [coins, setCoins] = useState([]);
      const [search, setSearch] = useState('');
      useEffect(() => {
            const fetchAPI = async () => {
                  setCoins(await getCoin());
            };
            fetchAPI();
      }, []);
      //Handling search
      const searchOnChange = e => {
            setSearch(e.target.value);
      };
      const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

      return (
            <>
                  <input type='text' placeholder='Search' value={search} onChange={searchOnChange} />
                  {coins.length ? searchedCoins.map(coin => <Coin key={coin.id} coin={coin} />) : <Loader />}
            </>
      );
};

export default Landing;
