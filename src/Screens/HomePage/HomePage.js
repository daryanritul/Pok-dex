import React from 'react';
import sty from './HomePage.module.css';
import Dropdown from '../../Components/Dropdown/Dropdown';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
const HomePage = () => {
  return (
    <div>
      <div className={sty.filters}>
        <div className={sty.filterTitle}>Apply Filters</div>
        <Dropdown title={'Colors'} options={['red', 'green', 'blue']} />
        <Dropdown title={'Colors'} options={['red', 'green', 'blue']} />
        <Dropdown title={'Colors'} options={['red', 'green', 'blue']} />
        <Dropdown title={'Colors'} options={['red', 'green', 'blue']} />
        <Dropdown title={'Colors'} options={['red', 'green', 'blue']} />
        <button className={sty.apply}>Apply</button>
        <button>Clear</button>
      </div>
      <div className={sty.pokeBox}>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
};

export default HomePage;
