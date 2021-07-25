import React, { useEffect, useState } from "react";
import "./App.css";
import RecipeMeta from "./Components/RecipeMeta";
import RecipeIngredients from "./Components/RecipeIngredients";
import RecipeSteps from "./Components/RecipeSteps";

function App() {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/recipe`)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <React.Fragment>
      {recipe.servings && (
        <div className="App">
          <RecipeMeta
            title={recipe.title}
            time={recipe.timeToMake}
            servings={recipe.servings}
          />
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipeSteps steps={recipe.steps} />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
