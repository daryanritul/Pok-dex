import React, { useState } from 'react';
import sty from './PokemonCard.module.css';

import data from '../../DummyPokemon.json';

import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';

const PokemonCard = () => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div className={sty.card}>
      <img
        className={sty.cardImage}
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
      />
      <div className={sty.info}>
        <h4>
          <span>#{data.id}</span> {data.name}
        </h4>
        <div className={sty.stats}>
          <strong>Type</strong>
          {data.types.map(type => (
            <div className="">{type.type.name}</div>
          ))}
        </div>
        <div className={sty.stats}>
          <strong>Base Experience</strong> {data.base_experience}
        </div>
        <div className={sty.stats}>
          <strong>Weight </strong>
          {data.weight}
        </div>
        <div className={sty.stats}>
          <strong>Height </strong>
          {data.height}
        </div>
        <div
          className={`${sty.bookmark} ${bookmark && sty.bookAdded}`}
          onClick={() => setBookmark(!bookmark)}
        >
          {bookmark ? <MdBookmarkAdded /> : <MdBookmarkAdd />}
        </div>
      </div>
      <div className={sty.image}>
        <div className={sty.back}></div>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
