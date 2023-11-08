import React from 'react';
import styles from "./style.module.css";
import Navbar from "./navbar/Navbar";
import Invoice from "./invoicebilling/Invoice";





const page = () => {
  return (
    <div style={{backgroundColor:"#002C4B"}}>
        <Navbar />
        <div style={{backgroundColor:"#f6f3f3", padding:"10px", marginTop:"50px"}}>
        <Invoice />
        </div>
    </div>
  )
}

export default page