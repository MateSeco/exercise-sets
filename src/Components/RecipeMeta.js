import React from 'react';

function RecipeMeta(props) {
    return (
        <div className="recipe-meta">
            <h1>{props.title}</h1>
            <div>
                <p>Time: {props.time}</p>
                <p>Servings: {props.servings}</p>
            </div>
        </div>
    )
}

export default RecipeMeta