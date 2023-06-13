import React from 'react';
import sty from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={sty.header}>
      <div className={sty.logo}>
        <div className={sty.circle}>
          <div className={sty.innerCircle}></div>
        </div>
        Poké
        <strong>dex</strong>
      </div>
      <div className={sty.menus}>
        <Link to={'/'} className={sty.items}>
          Pokémon's
        </Link>
        <Link to={'/bookmarks'} className={sty.items}>
          Bookmarks
        </Link>
        <Link to={'/search'} className={sty.items}>
          Search
        </Link>
      </div>
    </div>
  );
};

export default Header;
