import React, { useEffect, useState } from "react";
import classes from "./available-meal.module.css";
import Card from "../../ui/card/card";
import MealItem from "../meal-item/meal-item";

/*
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
*/

const AvailableMeal = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeal = async () => {
          const response = await fetch('https://order-food-eb0b9-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
          const responseData = await response.json();
          const loadedMeals = [];
          for (const key in responseData) {
              loadedMeals.push({
                  id: key,
                  name: responseData[key].name,
                  description: responseData[key].description,
                  price: responseData[key].price
              })
          }
          setMeals(loadedMeals);
        };

        fetchMeal();
    }, []);

    const mealList = meals.map(item =>
        <MealItem
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
        />
    );

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    );
};
export default AvailableMeal;
