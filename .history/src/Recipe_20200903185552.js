import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="singleRcipe">
      <h1>{title}</h1>
      <img className="image" src={image} alt="" />
      <p className="totalCalories">Total Calories: {Math.round(calories)}</p>
      <h5 className="ingredients">Ingredients: </h5>

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
