import React from 'react';
import Comments from './Comments'

function RecipeSteps(props) {
    const steps = props.steps.map((step, index) => {
        return (
            <li className="step" key={index}>
                {step}
                <Comments type='steps' index={index} />
            </li>
        )
    })
    return (
        <div className="recipe-steps">
            <h1>Steps</h1>
            <ol>
                {steps}
            </ol>
        </div>
    )
}

export default RecipeSteps