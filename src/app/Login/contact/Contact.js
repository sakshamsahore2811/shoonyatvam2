import React from 'react';
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <h2>File a query</h2>
                <form>
                    <label>Order Number</label><br />
                    <input type="text" /><br />
                    <label>Description</label><br />
                    <textarea name="text" rows="13" cols="50"> </textarea> <br />
                    <button>Submit</button>
                </form>
            </div>


            <div className={styles.right}>
                <h3>Connect with a medical professional</h3>
                <form>
                    <label>Name</label><br />
                    <input type="text" /><br />
                    <label>Phone Number</label><br />
                    <input type="number" /> <br />
                    <label>Age</label><br />
                    <input type="number" /> <br />
                    <label>Description of your health condition</label><br />
                    <input type="text" /><br />
                    <label>Preferred time of contact</label><br />
                   
                    <div   style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', marginTop:"20px" }}>
                        <span>
                            <p>Date</p>
                            <input style={{width:"200px"}} type="date" />
                        </span>
                        <span>
                            <p>Time</p>
                            <input  style={{width:"200px"}} type="time" />
                        </span>
                    </div>

                    <button>Submit</button>
                </form>

            </div>

        </div>
    )
}

export default Contact;