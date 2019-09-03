import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="cookTime">Cook Time</label>
        <input type="text" name="cookTime" id="cookTime" />
        <label htmlFor="servings">Servings</label>
        <input type="number" min="1" name="servings" id="servings" />
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions"></textarea>
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  )
}
