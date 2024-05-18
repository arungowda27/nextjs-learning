import React from 'react'
import AddToCart from './AddToCart'
import styles from './Productcard.module.css'

const Productcard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-700'>
        <AddToCart />
    </div>
  )
}

export default Productcard