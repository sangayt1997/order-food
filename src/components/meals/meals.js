import React, { Fragment } from "react";
import MealSummary from "./meal-summary/meal-summary";
import AvailableMeal from "./available-meal/available-meal";

const Meals = () => {
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeal />
        </Fragment>
    );
};

export default Meals;
