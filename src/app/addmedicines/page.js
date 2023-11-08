"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.css";
import Navbar from "./navbar/Navbar";
import Medicines from "./medicines/Medicine";
import OrderSummary from "./ordersummary/OrderSummary";
import Shipping from './shipping/Shipping';
// import Contact from "./contact/Contact";
import close from "../../../public/images/close.png";
import box from "../../../public/images/box.png";
import circle from "../../../public/images/circle.png";

const Page = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [medicines, setMedicines] = useState([]);

  // Define a function to add a medicine to the order
  const addMedicineToOrder = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
  };

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  const closeModal = () => {
    setShowMessage(false);
  };

  const editMedicine = (index, updatedMedicine) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[index] = updatedMedicine;
    setMedicines(updatedMedicines);
  };

  const removeMedicine = (index) => {
    const updatedMedicines = [...medicines];
    updatedMedicines.splice(index, 1);
    setMedicines(updatedMedicines);
  };


  return (
    <div style={{ backgroundColor: "#002C4B", paddingBottom: "20px" }}>
      <Navbar />

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

      <div style={{ backgroundColor: "#f6f3f3", padding: "1% 0 1% 0", marginTop: "30px" }}>
        <Medicines addMedicineToOrder={addMedicineToOrder} />
        <OrderSummary medicines={medicines}
          editMedicine={editMedicine}
          removeMedicine={removeMedicine}
        />
        <Shipping />
        <button className={styles.button} onClick={handleButtonClick}>Confirm Order</button>
      </div>

      {/* <Contact /> */}

      {showMessage && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <Image onClick={closeModal} src={close} />
            <p><span> Thank you! </span> <br />  Our team will review your order and will contact you soon.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page;
