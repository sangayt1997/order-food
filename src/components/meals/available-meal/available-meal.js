import React, { useEffect, useState } from "react";
import classes from "./available-meal.module.css";
import Card from "../../ui/card/card";
import MealItem from "../meal-item/meal-item";

const AvailableMeal = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
          setIsLoading(false);
        };

        fetchMeal();
    }, []);

    if (isLoading) {
        return (
            <section className={classes['meals-loading']}>
                <p>Loading...</p>
            </section>
        )
    }
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
