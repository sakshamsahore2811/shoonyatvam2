import React from 'react';
import NavBar from "./navbar/Navbar";
import Medicines from './medicines/Medicine';
import Contact from "./contact/Contact";

const page = () => {
    return (
        <div>
            <div style={{ backgroundColor: "#002C4B" }}>
                <NavBar />
                <div style={{ backgroundColor: "#f6f3f3", padding: "1% 0 1% 0", marginTop: "50px" }} >
                    <Medicines />
                </div>
                <Contact />
            </div>
        </div>
    )
}

export default page