import React from 'react';
// import { useState } from 'react';
import styles from "./medicine.module.css";

const Medicine = () => {

    // const [selectedDate, setSelectedDate] = useState('');

    // const handleDateChange = (e) => {
    //   setSelectedDate(e.target.value);
    // };

    return (
        <div className={styles.container}>
            <span>Search your order</span>
            <div>
                <div className={styles.info}>
                    <div className={styles.medicine}>
                        <p>Order ID</p>
                        <input type='text' placeholder='Enter order ID' />
                    </div>
                    <div  className={styles.medicine}>
                        <p>Medicine Name</p>
                        <input type='text' placeholder='Enter medicine name' />
                    </div>
                    <div  className={styles.medicine}>
                        <p>Date of Order Placed</p>
                        {/* <input  id="datePicker" value={selectedDate}  onChange={handleDateChange} /> */}
                        <input type='date' />
                    </div>
                    <div >
                        <p>Order Status</p>
                       <select>
                        <option></option>
                       </select>

                    </div>
                </div>

                <div className={styles.bottom}>
                <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Medicine