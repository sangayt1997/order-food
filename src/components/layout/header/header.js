import React, { Fragment } from "react";
import classes from "./header.module.css";
import mealsImage from "../../../assets/meals_bannner.jpeg";
import HeaderCartButton from "../header-cart-button/header-cart-button";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="meal image"/>
            </div>
        </Fragment>
    );
}

export default Header;
