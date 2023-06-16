import React from 'react';
import sty from './SearchPage.module.css';
import { MdSearch } from 'react-icons/md';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Dropdown from '../../Components/Dropdown/Dropdown';

const SearchPage = () => {
  return (
    <div className={sty.page}>
      <div className={sty.searchBox}>
        <h2>
          What <h1>Pokémon</h1> are you looking for?
        </h2>
        <div className={sty.search}>
          <MdSearch className={sty.searchIcon} />
          <input
            type="text"
            className=""
            placeholder="Search Pokémon, Move, Ability etc "
          />
        </div>
      </div>
      <div className="body">
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
        <div className={sty.filterTitle}>Serach Results : Ditto</div>
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
    </div>
  );
};

export default SearchPage;
