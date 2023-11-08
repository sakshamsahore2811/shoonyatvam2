"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from "./medicine.module.css";
import dots from "../../../../public/images/dots.png";
import close from "../../../../public/images/close.png"


const Medicine = () => {

    // const [selectedDate, setSelectedDate] = useState('');

    // const handleDateChange = (e) => {
    //   setSelectedDate(e.target.value);
    // };

    const [showMessage, setShowMessage] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    const handleCancelClick = () => {
        setConfirm(true)
    };

    const closeButton = () => {
        setConfirm(false)
    };

    return (
        <div className={styles.container}>
            <span>Order ID: 552552522114 </span>
            <div>
                <div className={styles.info}>

                    <div className={styles.orders}>
                        <div className={styles.medicine}>
                            <p>Name/GSTIN</p>
                            <input type='text' placeholder='Kavita Chouhan' />
                        </div>

                        <div className={styles.medicine}>
                            <p>Mobile Number</p>
                            <input type='number' placeholder='9999999999' />
                        </div>

                        <div className={styles.medicine}>
                            <p>Address</p>
                            <input style={{ width: "38rem" }} type='text' placeholder='P No 17, Jai Vighaneharta,Colony, Ashoka Recadinc,Katolroad,Nagpur, Maharashtra - 440013' />
                        </div>
                    </div>

                    <div className={styles.orders}>

                        <div className={styles.medicine}>
                            <p>Date of order placed</p>
                            <input type='date' placeholder='07-07-2023' />
                        </div>

                        <div className={styles.medicine}>
                            <p>Expected Delivery Date</p>
                            <input type='date' placeholder='--' />
                        </div>

                        <div className={styles.medicine}>
                            <p>Order Status</p>
                            <select>
                                <option>Available</option>
                                <option>Confirm</option>
                            </select>
                        </div>

                    </div>

                </div>

                <p style={{ marginTop: "20px" }}>Order Summary</p>

                <table className={styles.tables}>
                    <thead>
                        <tr>
                            <th>MEDICINE NAME</th>
                            <th>QUANTITY</th>
                            <th>MEDICINE TYPE</th>
                            <th>BRAND</th>
                            <th>AVAILABILITY</th>
                            <th>PRICE (per unit)</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Calciquick D3 60K</td>
                            <td>50</td>
                            <td>Capsule </td>
                            <td>Dr. Morepen</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            <td><span onClick={handleButtonClick}>Edit </span> </td>
                        </tr>

                        {showMessage && (
                            <div className={styles.modal}>
                                <div className={styles.modal_content}>
                                    <Image onClick={closeModal} src={close} />

                                    <form>
                                        <label>Medication Name</label> <br />
                                        <input type='text' placeholder='Calciquick D3 60K' /> <br />
                                        <label>Quantity</label> <br />
                                        <input type='text' placeholder='50 Capsules' /> <br />
                                        <label>Brand</label> <br />
                                        <input type='text' />

                                        <div className={styles.price}>
                                            <div>
                                                <label>Price (per unit)</label>
                                                <input type='text' /> <br />
                                            </div>

                                            <div>
                                                <label>Total Price</label>
                                                <input type='text' /> <br />
                                            </div>
                                        </div>
                                    </form>

                                    <div className={styles.save}>
                                        <input type="checkbox" />
                                        <span><label for="vehicle3">Unavailable</label><br /><br />
                                        </span>
                                    </div>

                                    <button>Save</button>

                                </div>
                            </div>
                        )}


                        <tr>
                            <td>Amoxil</td>
                            <td>100</td>
                            <td>Tablet </td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            <td><span>Confirm Availability </span>
                                <input type="checkbox" name="conform" value="cancel" />
                                <label onClick={handleCancelClick} for="conform">Cancel</label>
                            </td>
                        </tr>
                        {confirm && (
                            <div className={styles.modal}>
                                <div className={styles.Cancel}>
                                    <p>Are you sure you want to cancel the following order?</p>
                                    <b>Medication Name: <span>Calciquick D3 60K</span> </b> <br />
                                    <b>Quantity: <span>50</span> </b> <br />
                                    <b>Medicine Type: <span>Capsule</span> </b> <br />

                                    <div className={styles.btns}>
                                        <button className={styles.btn_1} onClick={closeButton}>Yes</button>
                                        <button className={styles.btn_2} onClick={closeButton}>No</button>
                                    </div>

                                </div>

                            </div>
                        )}
                        <tr>
                            <td>Trulicity</td>
                            <td>10</td>
                            <td>Solution </td>
                            <td>Eli Lily Co. India</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            <td><span>Confirm Availability </span>

                                <input type="checkbox" name="conform" value="cancel" />
                                <label for="conform">Cancel</label>


                            </td>
                        </tr>
                        <tr>
                            <td>Bon Pure Whey Protein (1 kg, Belgian Chocolate)</td>
                            <td>5</td>
                            <td>Powder</td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            <td><span>Confirm Availability </span>
                                <input type="checkbox" name="conform" value="cancel" />
                                <label for="conform">Cancel</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Dulcoflex 5mg</td>
                            <td>20</td>
                            <td>Tablet </td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            <td><span>Confirm Availability </span>
                                <input type="checkbox" name="conform" value="cancel" />
                                <label for="conform">Cancel</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Glutone</td>
                            <td>25</td>
                            <td>Tablet </td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            <td><span>Confirm Availability </span>
                                <input type="checkbox" name="conform" value="cancel" />
                                <label for="conform">Cancel</label>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div className={styles.bottom}>
                    <p>Tax:          <b style={{marginLeft:"4.4rem"}}>Rs.</b></p>
                    <p>SubTotal:     <b style={{marginLeft:"1rem"}}>Rs.</b></p>
                    <p>Discount:     <b style={{marginLeft:"1rem"}}>Rs.</b></p>
                    <hr style={{width:"16rem"}} />
                    <p>Total:     <b style={{marginLeft:"3.4rem"}}>Rs. </b> </p>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Medicine