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
            <span>Search & Filter</span>
            <div>
                <div className={styles.info}>
                    <div className={styles.medicine}>
                        <p>Order ID</p>
                        <input type='text' placeholder='Enter order ID' />

                        <p style={{marginTop:"20px"}}>Date-of-order</p>
                        <input type='date' />
                    </div>

                    <div className={styles.medicine}>
                        <p>Name</p>
                        <input type='text' placeholder='Enter medicine name' />

                        <p style={{marginTop:"20px"}}>Order Status</p>
                        <select>
                            <option>Conformed</option>
                            <option>Awaiting</option>
                            <option>Delivered</option>
                            <option>Dispatched</option>
                            <option>Canceled</option>

                        </select>

                    </div>
                    <div className={styles.medicine}>
                        <p>Phone Number</p>
                        {/* <input  id="datePicker" value={selectedDate}  onChange={handleDateChange} /> */}
                        <input type='number' placeholder='Enter Mobile Number'/>
                    </div>
                    <div >


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