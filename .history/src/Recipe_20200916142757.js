import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="singleRecipe">
      <h1>{title}</h1>
      <img className="image" src={image} alt="" />
      <p className="totalCalories">Total Calories: {Math.round(calories)}</p>
      <div className="ingredients">
        <h5 className="ingredientsTitle">Ingredients: </h5>

        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
