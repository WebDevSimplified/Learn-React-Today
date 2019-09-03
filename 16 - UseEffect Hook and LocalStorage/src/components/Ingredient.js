import React from 'react'

export default function Ingredient({ name, amount }) {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  )
}
