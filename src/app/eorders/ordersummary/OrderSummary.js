"useClient"
import React from 'react';
import Link from 'next/link';
import styles from './style.module.css'; // Import the CSS module

const Medicine = () => {
    return (
        <div className={styles.container}>

            <p>Current Orders</p>

            <table className={styles.tables}>
                <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>ORDER ON</th>
                        <th>PRICE (IN Rs.)</th>
                        <th>Customers Details</th>
                        <th>ORDER STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link href="#">552552522114</Link></td>
                        <td>07-07-2023</td>
                        <td>--</td>
                        <td>Shristi Garg, 9999999999</td>
                        <td><span style={{ backgroundColor: "#f0dddd", color: "#FF0000", border: "none", padding: "10px", borderRadius: "20px" }}> Awaiting order confirmation </span></td>

                    </tr>
                    <tr>
                        <td><Link href="#">552552522114</Link></td>
                        <td>07-07-2023</td>
                        <td>--</td>
                        <td>Sun Pharma, 5555555555</td>
                        <td><span style={{ backgroundColor: "#f0dddd", color: "#FF0000", border: "none", padding: "10px", borderRadius: "20px" }}>Order confirmed pricing awaited </span></td>
                    </tr>
                    <tr>
                        <td><Link href="#">552552522114</Link></td>
                        <td>07-07-2023</td>
                        <td>50000</td>
                        <td>Kavita Chuhan, 7777777777</td>
                        <td><span style={{ backgroundColor: "#EBF3F8", color: "#1400FF", border: "none", padding: "10px", borderRadius: "20px" }}>Dispatched </span></td>
                    </tr>
                    <tr>
                        <td><Link href="#">552552522114</Link></td>
                        <td>07-07-2023</td>
                        <td>50000</td>
                        <td>Harsh Sharama, 7686555555</td>
                        <td><span style={{ backgroundColor: "#EBF3F8", color: "#1400FF", border: "none", padding: "10px", borderRadius: "20px" }}>Canceled</span></td>

                    </tr>
                    <tr>
                        <td><Link href="#">552552522114</Link></td>
                        <td>07-07-2023</td>
                        <td>50000</td>
                        <td>Kritika, 8888888888</td>
                        <td><span style={{ backgroundColor: "#EBF8F5", color: "#059C42", border: "none", padding: "10px", borderRadius: "20px" }}>Delivered</span></td>

                    </tr>
                    <tr>
                        <td><Link href="#">552552522114</Link></td>
                        <td>07-07-2023</td>
                        <td>50000</td>
                        <td>Aryan Agrawal, 7777777777</td>
                        <td><span style={{ backgroundColor: "#f0dddd", color: "#FF0000", border: "none", padding: "10px", borderRadius: "20px" }}> Awaiting payment from you</span></td>

                    </tr>




                    
                </tbody>
            </table>
        </div>
    );
};

export default Medicine;
