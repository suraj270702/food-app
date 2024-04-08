import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({img,title,id}) => {
  return (
    <Link to={`/single-recipe/${id}`}>
    <div className='w-full lg:w-[200px] h-full bg-white shadow-2xl p-1'>
       <div>
        <img src={img} className='w-full h-[150px]' />
        <div className='mt-2'>
            <h1 className='text-sm'>{title}</h1>
        </div>
       </div>
    </div>
    </Link>
  )
}

export default RecipeCard