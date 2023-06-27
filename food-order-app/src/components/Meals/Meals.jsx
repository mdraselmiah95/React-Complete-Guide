import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <AvailableMeals />
      <MealsSummary />
    </Fragment>
  );
};

export default Meals;
