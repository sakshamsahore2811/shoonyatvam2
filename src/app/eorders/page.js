
import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import NavBar from "./navbar/Navbar";
import Medicines from "./medicines/Medicine";
import OrderSummary from "./ordersummary/OrderSummary";
import box from "../../../public/images/box.png";
import circle from "../../../public/images/circle.png";

const page = () => {
  return (
    <div  style={{backgroundColor:"#002C4B"}}>
        <NavBar />

        
      {/* <div className={styles.mid}>
        <div className={styles.mid_1}>
          <Image src={box} alt="img" />
          <span>Place Order</span>
        </div>
        <div>
          <Image src={circle} alt="img" />
          <span>My Orders</span>
        </div>
      </div> */}


        <div style={{ backgroundColor: "#f6f3f3", padding: "1% 0 1% 0", marginTop: "50px", marginBottom:"50px" }} >
        <Medicines />
        <OrderSummary />
      </div>
     
    </div>
  )
}

export default page