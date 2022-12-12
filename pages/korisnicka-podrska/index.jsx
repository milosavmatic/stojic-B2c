import React from 'react';
import classes from '../../assets/css/StaticPages.module.scss';

function CustomerSupport() {
  return (
    <div className={`${classes.staticPages}`}>
      <div className="container">
        <h3>Korisnička podrška</h3>
        <div className={`${classes.staticPagesContent}`}></div>
      </div>
    </div>
  );
}

export default CustomerSupport;
