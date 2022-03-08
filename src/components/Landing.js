import React, { useEffect, useState } from 'react';
//Api
import { getCoin } from '../services/api';
//Components
import Loader from './Loader';

const Landing = () => {
      const [coins, setCoins] = useState([]);
      useEffect(() => {
            const fetchAPI = async () => {
                  setCoins(await getCoin());
            };
            fetchAPI();
      }, []);
      return (
            <>
                  <input type='text' placeholder='Search' />
                  {coins.length ? coins.map(coin => <p key={coin.id}>{coin.name}</p>) : <Loader />}
            </>
      );
};

export default Landing;
