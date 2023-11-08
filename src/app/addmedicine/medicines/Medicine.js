import React from 'react';
import styles from "./medicine.module.css";
import Image from 'next/image';
import star from "../../../../public/images/star.png";

const Medicine = () => {
    return (
        <div className={styles.container}>
            <span>Add Medicine</span>
            <div>
                <div className={styles.info}>
                    <div className={styles.medicine}>
                        <p>Medicine Name <Image src={star} alt='img' /> </p>
                        <input type='text' placeholder='Name of the medicine' />
                    </div>
                    <div>
                        <p>Quantity  <Image src={star} alt='img' /></p>
                        <select>
                            <option>-- pcs </option>
                        </select>
                    </div>
                    <div>
                        <p>Medicine Type  <Image src={star} alt='img' /></p>
                        <select>
                            <option>Select Medicine Type </option>
                        </select>
                    </div>
                </div>

                <div className={styles.upload}>
                    <div>
                        <p>Add Prescription</p>
                        <input type="text" placeholder='Upload documnent' />
                    </div>
                     <button>Upload</button> 
                </div>
                <div className={styles.bottom}>
                <button>Add Medicne</button>
                </div>
            </div>
        </div>
    )
}

export default Medicine