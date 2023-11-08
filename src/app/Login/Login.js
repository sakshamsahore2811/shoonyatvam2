"use client"
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from "./login.module.css";
import logo from "../../../public/images/logoshoonyatam.svg";
import medicine from "../../../public/images/medicine.png";
import search from "../../../public/images/search.png";
import order from "../../../public/images/order.png";
import payment from "../../../public/images/payment.png";
import received from "../../../public/images/delivery.png";
import medibg from "../../../public/images/medibg.png"
import select  from "../../../public/images/select.png";
import uparrow from "../../../public/images/uparrow.png";
import downarrow from "../../../public/images/downarrow.png";
import close  from "../../../public/images/close.png";
import Contact from './contact/Contact';
import box from "../../../public/images/box.png";
import circle from "../../../public/images/circle.png";



const Login = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  const closeModal = () => {
    setShowMessage(false);
  };
  return (
    <div className={styles.container}>

      <div className={styles.nav}>

        <div className={styles.left}>
          <Image src={logo}  alt='img' />
          <div className={styles.location}>
          <p>Location <span><Image src={select} alt='img' /> </span> </p>
            <p style={{ color: " #016B32" }}>431513 Powai</p>
          </div>
        </div>
        <div className={styles.right}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">FAQs</a></li>
            <li> <button onClick={handleButtonClick}>Login</button> </li>
          </ul>
        </div>
        {showMessage && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
           <Image onClick={closeModal} src={close} />
              <h4>Please login to continue</h4>
           <div>
            <p>Mobile Number</p>
            <p><span className={styles.country}><input type='number' placeholder='+91' /> </span> <span> <input type='number' /> </span>  </p>
           </div>
           <div>
            <p>OTP <span className={styles.otp_1}>Send OTP</span> </p>
           <div className={styles.otp}>
              <input type='number' />
              <input type='number' />
              <input type='number' />
              <input type='number' />
              <input type='number' />
           </div>
           </div>
          </div>
        </div>
        )}
      </div>

      <div className={styles.mid}>
        <div className={styles.mid_1}>
          <Image src={box} alt="img" />
          <span>Place Order</span>
        </div>
        <div>
          <Image src={circle} alt="img" />
          <span>My Orders</span>
        </div>
      </div>


      <section className={styles.sec} >
        <h1>Get <span>Medicines</span> delivered <br /> right to your doorstep!</h1>
        <Image src ={ medibg} alt='img'   />
      </section>

      <div className={styles.order}>
        <button>Order Medicines</button>
      </div>

      <div className={styles.main}>
        <div>
          <h4>About Us</h4>
          <p> Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure many diseases and save lives. These days, medicines come from a variety of sources. </p>
        
        </div>
        <div>
          <Image src={medicine} width={300} height={300} alt='img' />
        </div>
      </div>

      <div className={styles.cards_section}>
        <h1>How It Works?</h1>
        <div className={styles.arrows}>
        <div className={styles.uparrow}> <Image src={uparrow} width={100}  alt='img'/> </div>
        <div className={styles.uparrow_2}> <Image src={uparrow} width={100}  alt='img'/> </div>
        </div>

        <div className={styles.cards}>

          <div className={styles.img_1}>
            <Image src={search} />
            <p >Search</p>
          </div>
          <div className={styles.img_2}>
            <Image src={order} />
            <p style={{paddingTop:"20px"}}>Order</p>
          </div>
          <div className={styles.img_3}>
            <Image src={payment} />
            <p>Payment</p>
          </div>
          <div  className={styles.img_2}>
            <Image src={received} />
            <p style={{ paddingTop: "38px" }}>Receive</p>
          </div>

        </div>
        <div className={styles.downarrow}>  <Image src={downarrow}  width={100} alt='img' /> </div>
       
      </div>

      <div style={{ backgroundColor: "#002C4B"}}>
        <Contact/>
      </div>

    </div>
  )
}

export default Login;