import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredients}) {
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  })
  return (
    <div>
      {ingredientElements}
    </div>
  )
}
