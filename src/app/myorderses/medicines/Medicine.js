"use client"
import React from 'react';
import Image from 'next/image';
import styles from "./medicine.module.css";
import dots from "../../../../public/images/dots.png";



const Medicine = () => {

    return (
        <div className={styles.container}>
            <span>Order ID: 552552522114 </span>
            <div>
                <div className={styles.orders}>
                   
                        <div className={styles.medicine}>
                            <p>Date of order placed</p>
                            <input type='date' />
                        </div>

                        <div className={styles.medicine}>
                            <p>Order Status</p>
                            <select>
                                <option>Available</option>
                                <option>Confirm</option>
                                <option>Cancel</option>
                                <option>Dispatched</option>
                            </select>
                        </div>

                        <div className={styles.medicine}>
                            <p>Expected Delivery Date</p>
                            <input type='date'/>
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
                           
                        </tr>


                        <tr>
                            <td>Amoxil</td>
                            <td>100</td>
                            <td>Tablet </td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            
                        </tr>
                      
                        <tr>
                            <td>Trulicity</td>
                            <td>10</td>
                            <td>Solution </td>
                            <td>Eli Lily Co. India</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                           
                        </tr>
                        <tr>
                            <td>Bon Pure Whey Protein (1 kg, Belgian Chocolate)</td>
                            <td>5</td>
                            <td>Powder</td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                           
                        </tr>
                        <tr>
                            <td>Dulcoflex 5mg</td>
                            <td>20</td>
                            <td>Tablet </td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                            
                        </tr>
                        <tr>
                            <td>Glutone</td>
                            <td>25</td>
                            <td>Tablet </td>
                            <td>Zydus</td>
                            <td> <span><Image src={dots} alt='img' />Available</span></td>
                            <td>200</td>
                           
                        </tr>

                        
                    </tbody>
                </table>


                <div className={styles.bottom}>
                    <p>Total Amount to be paid: 34,500</p>
                    <button>Pay Now Rs. 34,500</button>
                </div>
            </div>
        </div>
    )
}

export default Medicine