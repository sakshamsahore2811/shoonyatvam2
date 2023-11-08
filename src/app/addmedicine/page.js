import React from 'react';
import styles from "./page.module.css";
import Navbar from "./navbar/Navbar";
import Medicine from "./medicines/Medicine";
import Cart from './carts/Cart';
import Contact from './contact/Contact';



const page = () => {
  return (
    <div style={{backgroundColor:"#002C4B"}}>
        <Navbar />
        <div style={{backgroundColor:"#f6f3f3", padding:"10px", marginTop:"50px"}}>
        <Medicine />
        <Cart />
        </div>
        <Contact />
    </div>
  )
}

export default page