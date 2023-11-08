"useClient"
import React from 'react';
import styles from './style.module.css'; // Import the CSS module

const Medicine = () => {
    return (
        <div className={styles.container}>
            
            <table className={styles.tables}>
                <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>ORDER STATUS</th>
                        <th>PRICE (IN Rs.)</th>
                        <th>ORDER ON</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>552552522114</td>
                    <td><span style={{ backgroundColor: "#f0dddd", color: "#FF0000", border: "none",padding: "10px",borderRadius: "20px"}}> Awaiting order confirmation </span></td>
                    <td>--</td>
                    <td>07-07-2023</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>552552522114</td>
                    <td><span style={{ backgroundColor: "#f0dddd", color: "#FF0000", border: "none",padding: "10px",borderRadius: "20px"}}>Order confirmed pricing awaited </span></td>
                    <td>--</td>
                    <td>07-07-2023</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>552552522114</td>
                    <td><span style={{ backgroundColor: "#EBF3F8", color: "#1400FF", border: "none",padding: "10px",borderRadius: "20px"}}>Dispatched </span></td>
                    <td>50000</td>
                    <td>07-07-2023</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>552552522114</td>
                    <td><span style={{ backgroundColor: "#EBF3F8", color: "#1400FF", border: "none",padding: "10px",borderRadius: "20px"}}>Canceled</span></td>
                    <td>50000</td>
                    <td>07-07-2023</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>552552522114</td>
                    <td><span style={{ backgroundColor: "#EBF8F5", color:"#059C42", border: "none",padding: "10px",borderRadius: "20px"}}>Delivered</span></td>
                    <td>50000</td>
                    <td>07-07-2023</td>
                    <td>Order invoice</td>
                </tr>
                <tr>
                    <td>552552522114</td>
                    <td><span style={{ backgroundColor: "#f0dddd", color: "#FF0000", border: "none",padding: "10px",borderRadius: "20px"}}> Awaiting payment from you</span></td>
                    <td>50000</td>
                    <td>07-07-2023</td>
                    <td>Make payment</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Medicine;
