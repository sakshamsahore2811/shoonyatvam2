import React from 'react';
import Image from 'next/image';
import styles from "./nav.module.css";
import logo from "../../../../public/images/logoshoonyatam.svg";
import person from "../../../../public/images/person.png";
import select  from "../../../../public/images/select.png";


const Login = () => {
  return (
    <div className={styles.container}>

      <div className={styles.nav}>

        <div className={styles.left}>
          <Image src={logo}  alt='img' />
          <div className={styles.location}>
            <p>Location <span><Image src={select} /> </span> </p>
            <p style={{ color: " #016B32" }}>431513 Powai</p>
          </div>
         
        </div>
        <div className={styles.right}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">My Orders</a> </li>
            <li> <Image src={person} width={30} height={30} alt='img' /> </li>
          </ul>
        </div>
      </div>

     
    </div>
  )
}

export default Login;