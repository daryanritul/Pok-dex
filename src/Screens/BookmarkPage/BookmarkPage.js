import React from 'react';
import sty from './BookmarkPage.module.css';

import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Dropdown from '../../Components/Dropdown/Dropdown';

const BookmarkPage = () => {
  return (
    <div className="body">
      <div className={sty.filterTitle}>My Bookmarks</div>
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

export default BookmarkPage;
