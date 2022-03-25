import React from 'react';
import { Fragment } from 'react';
import coverImg from '../assets/img/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
      </header>
      <div className={classes['main-image']}>
        <img src={coverImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
