import React from 'react';
import Comments from './Comments'

function RecipeIngredients(props) {
    const ingredients = props.ingredients.map((ingredient, index) => {
        return (
            <li className="ingredient" key={index}>
                <strong>{ingredient.name}</strong>: {ingredient.amount} {ingredient.measure}
                <Comments type='ingredients' index={index} />
            </li>
        )
    })
    return (
        <div className="recipe-ingredients">
            <h1>Ingredients</h1>
            <ul>
                {ingredients}
            </ul>
        </div>
    )
}

export default RecipeIngredients