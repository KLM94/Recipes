import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="singleRecipe">
      <h1>{title}</h1>
      <img className="image" src={image} alt="" />
      <p className="totalRecipes">Total Calories: {Math.round(calories)}</p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
