import React from 'react'
import style from './Recipe.module.css'
const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
            </ol>
            <img className={style.image} src={image} alt="" />
            <p>Calories: {calories}</p>
        </div>
    )
}

export default Recipe