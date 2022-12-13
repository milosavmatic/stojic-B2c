import React from 'react';
import classes from '../../assets/css/StaticPages.module.scss';

function ExchangeOfItems() {
  return (
    <div className={`${classes.staticPages}`}>
      <div className="container">
        <h3>Zamena artikala</h3>
        <div className={`${classes.staticPagesContent}`}></div>
      </div>
    </div>
  );
}

export default ExchangeOfItems;
