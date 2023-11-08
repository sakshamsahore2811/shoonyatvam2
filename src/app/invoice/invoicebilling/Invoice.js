import React from 'react';
import styles from "./invoice.module.css";

const Invoice = () => {
    return (
        <div className={styles.container}>
            <span>Invoice #RJ125354563582025</span>
            <div className={styles.address}>
                <div>
                    <p>Dealer’s Name/Shoonyatam</p>
                    <p>Address</p>
                    <p>Email and contact number</p>
                </div>
                <div>
                    <p>Mer. Ref. No. : INV12345</p>
                    <p>Issued Date: 27-07-2023</p>
                </div>
            </div>
            <div className={styles.line}>
               <hr/>
               <hr />
            </div>
            <div className={styles.shiping}>
                <div>
                    <h4>Invoice to</h4>
                    <p style={{ marginBottom: "20px" }}>Customer Name</p>
                    <p>Address Line 1, Address Line 2</p>
                    <p>City, District, State</p>
                    <p>Pincode</p>
                    <p>Phone Number</p>
                </div>
                <div>
                    <h4>Shipping Details</h4>
                    <p>Address Line 1, Address Line 2</p>
                    <p>City, District, State</p>
                    <p>Pincode</p>
                </div>
            </div>
            <table className={styles.tables}>
                <thead>
                    <tr>
                        <th>ITEM & DESCRIPTION</th>
                        <th>RATE</th>
                        <th>QUANTITY</th>
                        <th>BRAND</th>
                        <th>TAX%</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Calciquick D3 60K</td>
                        <td>50</td>
                        <td>50 </td>
                        <td>Dr. Morepen</td>
                        <td>3%</td>
                        <td>2500</td>
                    </tr>
                    <tr>
                        <td>Amoxil</td>
                        <td>200</td>
                        <td>100 </td>
                        <td>Zydus</td>
                        <td></td>
                        <td>20000</td>

                    </tr>
                    <tr>
                        <td>Trulicity</td>
                        <td>200</td>
                        <td>10 </td>
                        <td>Eli Lily Co. India</td>
                        <td></td>
                        <td>2000</td>

                    </tr>
                    <tr>
                        <td>Bon Pure Whey Protein (1 kg, Belgian Chocolate)</td>
                        <td>200</td>
                        <td>5 </td>
                        <td>Zydus</td>
                        <td></td>
                        <td>1000</td>

                    </tr>
                    <tr>
                        <td>Dulcoflex 5mg</td>
                        <td>200</td>
                        <td>20 </td>
                        <td>Zydus</td>
                        <td></td>
                        <td>400</td>

                    </tr>
                    <tr>
                        <td>Glutone</td>
                        <td>200</td>
                        <td>25 </td>
                        <td>Zydus</td>
                        <td></td>
                        <td>5000</td>

                    </tr>
                </tbody>
            </table>

            <div className={styles.total}>
                <h4>SubTotal:   Rs. 34,500 </h4>
                <h4>Tax: Rs. 0</h4>
                <hr/>
                <h4>  Total:     Rs. 34,500 </h4>    
            </div>

            <footer>
        <p>  NOTE: This invoice is computer generated and therefore does not require any signature    </p>

            </footer>
        </div>
    )
}

export default Invoice;