import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="singleRecipe">
      <h1>{title}</h1>
      <img className="image" src={image} alt="" />
      <p className="totalCalories">Total Calories: {Math.round(calories)}</p>
      <span>
        <p className="Ingredients">Ingredients: </p>
      </span>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
