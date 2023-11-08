import React from 'react';
import Image from 'next/image';
import styles from "./cart.module.css";
import carts from "../../../../public/images/carts.png"

const Cart = () => {
  return (
    <div className={styles.container}>
         <span>Items in Cart</span>

         <div className={styles.cart}>
            <Image src={carts} width={350} height={200} alt='img' />
            <p>Looks Like Your Cart Is Empty</p>
         </div>
        
    </div>
  )
}

export default Cart;