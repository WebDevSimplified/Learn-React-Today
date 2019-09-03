import React from 'react'

export default function RecipeIngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete
  } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        className="recipe-edit__input"
        type="text"
        onChange={(e) => handleChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  )
}
