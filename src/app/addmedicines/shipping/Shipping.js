"use client";

import React, { useState } from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import star from "../../../../public/images/star.png";


const Shipping = () => {

    const [toggle, setToggle] = useState(false)



    return (
        <div className={styles.container}>
            <div style={{ display: "flex" }}>
                <h2>Shipping Address</h2>
                <h2 style={{ marginLeft: "45%" }}>Previous Address</h2>
            </div>
            
            <div className={styles.toggleParent}>
                    <div style={{left:toggle ? "5px": "145px", top:"5px"}} onClick={ () => {setToggle(!toggle)}} className={styles.slide}>{toggle? "Individual" : "Entity"}</div>
                    <div  style={{left:toggle ? "145px": "5px", top:"5px"}} onClick={ () => {setToggle(!toggle)}} className={styles.slide_2}>{!toggle? "Individual" : "Entity"}</div>
            </div>
    
        

            <div>
                <div className={styles.main}>
                    {!toggle ? (
                        <div className={styles.left}>
                        <div className={styles.dev_1}>
                            <span>
                                <p>Name of the Entity <Image src={star} alt='img' /> </p>
                                <input type="text" />
                            </span>
                            <span>
                                <p>Name of the Contact Person<Image src={star} alt='img' /> </p>
                                <input type="text" />
                            </span>
                            <span style={{ marginTop: "10px" }}>
                                <p>GSTIN <Image src={star} alt='img' /></p>
                                <input type="text" />
                            </span>
                        </div>
                        <div className={styles.dev_2}>
                            <span>
                                <p>Address <Image src={star} alt='img' /></p>
                                <input type="text" />
                            </span>
                            <span>
                                <p>Landmark </p>
                                <input type="text" />
                            </span>
                        </div>
                        <div className={styles.dev_3}>
                            <span>
                                <p>Pincode <Image src={star} alt='img' /></p>
                                <input type="number" />
                            </span>
                            <span>
                                <p>City <Image src={star} alt='img' /></p>
                                <input type="text" />
                            </span>
                            <span>
                                <p>State <Image src={star} alt='img' /></p>
                                <input type="text" />
                            </span>
                        </div>
                        <div className={styles.dev_4}>
                            <span>Types of Address :</span>
                            <input type="checkbox" name="office" value="office" />
                            <label htmlFor="office">Home</label>
                            <input type="checkbox" name="office" value="office" />
                            <label htmlFor="office"> Office</label>
                            <input type="checkbox" name="other" value="other" />
                            <label htmlFor="other"> Other</label>
                        </div>

                    </div>
                    ):
                    ( <div className={styles.Entity}>
                        <div className={styles.dev_1}>
                            <span>
                                <p>Name <Image src={star} alt='img' /> </p>
                                <input type="text" />
                            </span>
                        </div>
                        <div className={styles.dev_2}>
                            <span>
                                <p>Address <Image src={star} alt='img' /></p>
                                <input type="text" />
                            </span>
                            <span>
                                <p>Landmark</p>
                                <input type="text" />
                            </span>
                        </div>
                        <div className={styles.dev_3}>
                            <span>
                                <p>Pincode <Image src={star} alt='img' /></p>
                                <input type="number" />
                            </span>
                            <span>
                                <p>City <Image src={star} alt='img' /></p>
                                <input type="text" />
                            </span>
                            <span>
                                <p>State <Image src={star} alt='img' /></p>
                                <input type="text" />
                            </span>
                        </div>
                        <div className={styles.dev_4}>
                            <span>Types of Address :</span>
                            <input type="checkbox" name="office" value="office" />
                            <label htmlFor="office">Home</label>
                            <input type="checkbox" name="office" value="office" />
                            <label htmlFor="office"> Office</label>
                            <input type="checkbox" name="other" value="other" />
                            <label htmlFor="other"> Other</label>
                        </div>
        
                    </div>)
                    }

                    <div className={styles.right}>


                        <div className={styles.card}>
                            <p> <input type="checkbox" name="office" value="office" /></p>
                            <p><label htmlFor="office"> P No 17, Jai Vighaneharta,Colony, Ashoka Recadinc,Katolroad,Nagpur, Maharashtra - 440013</label> </p>
                        </div>
                        <div className={styles.card}>
                            <p> <input type="checkbox" name="office" value="office" /></p>
                            <p><label htmlFor="office"> P No 17, Jai Vighaneharta,Colony, Ashoka Recadinc,Katolroad,Nagpur, Maharashtra - 440013</label> </p>
                        </div>
                        <div className={styles.card}>
                            <p> <input type="checkbox" name="office" value="office" /></p>
                            <p><label htmlFor="office"> P No 17, Jai Vighaneharta,Colony, Ashoka Recadinc,Katolroad,Nagpur, Maharashtra - 440013</label> </p>
                        </div>

                    </div>

                </div>
               
            </div>

           

            <div className={styles.address}>
                    <button>Add Address</button>
             </div>
        </div>
    )
}

export default Shipping;
