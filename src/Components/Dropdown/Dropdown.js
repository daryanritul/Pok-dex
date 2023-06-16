import React from 'react';
import sty from './Dropdown.module.css';

const Dropdown = ({ title, options }) => {
  return (
    <div className={sty.dropdown}>
      <select>
        <option className={sty.title} selected disabled hidden>
          Select {title}
        </option>
        {options.map(item => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
