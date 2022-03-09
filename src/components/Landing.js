import React, { useEffect, useState } from 'react';
// Styles
import styles from './Landing.module.css';
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
                  <input className={styles.input} type='text' placeholder='Search' value={search} onChange={searchOnChange} />
                  {coins.length ? 
                        <div className={styles.coinContainer}>
                              {searchedCoins.map(coin => (
                                    <Coin key={coin.id} coin={coin} />
                                     ))}
                        </div>
                   : 
                        <Loader />
                  }
            </>
      );
};

export default Landing;
