import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="singleRecipe">
      <h1>{title}</h1>
      <img className="image" src={image} alt="" />
      <p>Total Calories: {Math.round(calories)}</p>
      <br></br>
      <h3>Ingredients: </h3>

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
