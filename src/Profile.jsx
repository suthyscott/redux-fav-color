import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavMeal } from './redux/slices/favMealSlice'


const Profile = () => {
    const meal = useSelector(selectFavMeal)
  return (
    <div>
        <p>{meal.appetizer}</p>
        <p>{meal.entree}</p>
        <p>{meal.drink}</p>
        <p>{meal.dessert}</p>
    </div>
  )
}

export default Profile