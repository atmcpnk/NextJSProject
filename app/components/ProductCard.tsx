import React from 'react'
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css';
// going to use tailwind instead of css modules, so we can delete the styles.card object and replace it with the tailwind classes



const ProductCard = () => {
  return (
    <div>
        <AddToCart />
    </div>
  )
}

export default ProductCard