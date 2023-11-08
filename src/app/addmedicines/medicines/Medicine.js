// "use client"
// import React from 'react';
// import { useState } from 'react';
// import styles from "./medicine.module.css";
// import Image from 'next/image';
// import star from "../../../../public/images/star.png";

// const Medicine = () => {



//     return (
//         <div className={styles.container}>
//             <span>Add Medicine</span>
//             <div>
//                 <div className={styles.info}>
//                     <div className={styles.medicine}>
//                         <p>Medicine Name <Image src={star} alt='img' /> </p>
//                         <input type='text' placeholder='Dolo 650' />
//                     </div>
//                     <div>
//                         <p>Quantity <Image src={star} alt='img' /></p>
//                         <select>
//                             <option>12 </option>
//                         </select>
//                     </div>
//                     <div>
//                         <p>Medicine Type <Image src={star} alt='img' /></p>
//                         <select>
//                             <option>Select Medicine Type </option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className={styles.upload}>
//                     <div>
//                         <p>Add Prescription</p>
//                         <input type="text" placeholder='Upload documnent' />
//                     </div>
//                      <button>Upload</button> 
//                 </div>
//                 <div className={styles.bottom}>
//                 <button>Add Medicne</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Medicine;


import React, { useState, useRef } from 'react';
import styles from "./medicine.module.css";
import Image from 'next/image';
import star from "../../../../public/images/star.png";

const Medicine = ({ addMedicineToOrder }) => {
    const [inputValueForName, setInputValueForName] = useState('');
    const [inputValueForQuantity, setInputValueForQuantity] = useState('0'); // Default value
    const [inputValueForType, setInputValueForType] = useState('Select Medicine Type'); // Default value

    // const [selectedFile, setSelectedFile] = useState(null); // Track the selected file
    // const [selectedFileName, setSelectedFileName] = useState('')

    // const fileInputRef = useRef(null);

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setSelectedFile(file);
    //         setSelectedFileName(file.name); // Update the selected file name
    //     } else {
    //         setSelectedFile(null);
    //         setSelectedFileName('');
    //     }
    // };


    const addMedicine = () => {
        if (inputValueForName.trim() === '') {
            // You can add validation here to ensure the name is not empty
            return;
        }

        const newMedicine = {
            name: inputValueForName,
            quantity: inputValueForQuantity,
            type: inputValueForType,
            // prescription: selectedFile ? selectedFile.name : '',
        };

        // Call the parent component's function to add the medicine
        addMedicineToOrder(newMedicine);

        // Clear input fields
        setInputValueForName('');
        setInputValueForQuantity('0'); // Reset to the default value
        setInputValueForType('Select Medicine Type'); // Reset to the default value

        // setSelectedFile(null);
        // setSelectedFileName('');
    };

    return (
        // <div className={styles.container}>
        //     <span>Add Medicine</span>
        //     <div>
        //         <div className={styles.info}>
        //             <div className={styles.medicine}>
        //                 <p>Medicine Name <Image src={star} alt='img' /> </p>
        //                 <input
        //                     type='text'
        //                     placeholder='Dolo 650'
        //                     value={inputValueForName}
        //                     onChange={(e) => setInputValueForName(e.target.value)}
        //                 />
        //             </div>
        //             <div>
        //                 <p>Quantity <Image src={star} alt='img' /></p>
        //                 <select
        //                     value={inputValueForQuantity}
        //                     onChange={(e) => setInputValueForQuantity(e.target.value)}
        //                 >
        //                     <option value='1'>1</option>
        //                     <option value='2'>2</option>
        //                     <option value='3'>3</option>
        //                     <option value='4'>4</option>
        //                     <option value='5'>5</option>
        //                     <option value='6'>6</option>
        //                     <option value='7'>7</option>
        //                     <option value='8'>8</option>
        //                     <option value='9'>9</option>
        //                     <option value='10'>10</option>
        //                     <option value='11'>11</option>
        //                     <option value='12'>12</option>

        //                     {/* Add more quantity options if needed */}
        //                 </select>
        //             </div>
        //             <div>
        //                 <p>Medicine Type <Image src={star} alt='img' /></p>
        //                 <select
        //                     value={inputValueForType}
        //                     onChange={(e) => setInputValueForType(e.target.value)}
        //                 >
        //                     <option>Select Medicine Type</option>
        //                     <option>Tablet</option>
        //                     <option>Powder</option>
        //                     <option>Capsule</option>
        //                     <option>Powder</option>
        //                     <option>Liquid Solutions</option>
        //                     <option>Suspensions</option>
        //                     <option>Syrups</option>
        //                     <option>Drops</option>
        //                     <option>Injections</option>
        //                     <option>Creams</option>
        //                     <option>Ointments</option>
        //                     <option>Patches</option>
        //                     <option>Suppositories:</option>
        //                     <option>Gels</option>
        //                     <option>Inhalers</option>
        //                     <option>Nebulizers</option>
        //                     <option>Lozenges</option>


        //                     {/* Add more medicine type options if needed */}
        //                 </select>
        //             </div>
        //         </div>

        //         <div className={styles.upload}>
        //             <div>
        //                 <p>Add Prescription</p>
        //                 <input type="text" placeholder='Upload document' />
        //             </div>
        //             <button >Upload</button>

        //             {/* <div>
        //                 <p>Add Prescription</p>
        //                 <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} style={{ display: 'none' }}  ref={fileInputRef} />
        //                 <input type="text" placeholder="Upload document" value={selectedFileName} readOnly />
        //                 <button onClick={() => fileInputRef.current.click()}>Upload</button>
        //             </div> */}

                    
        //         </div>
        //         <div className={styles.bottom}>
        //             <button onClick={addMedicine}>Add Medicine</button>
        //         </div>
        //     </div>
        // </div>
        <div className={styles.container}>
        <span>Add Medicine</span>
        <div>
          <div className={styles.info}>
            <div className={styles.medicine}>
              <p>Medicine Name <Image src={star} alt='img' /> </p>
              <input
                type='text'
                placeholder='Dolo 650'
                value={inputValueForName}
                onChange={(e) => setInputValueForName(e.target.value)}
              />
            </div>
            <div>
              <p>Quantity <Image src={star} alt='img' /></p>
              <select
                value={inputValueForQuantity}
                onChange={(e) => setInputValueForQuantity(e.target.value)}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>Medicine Type <Image src={star} alt='img' /></p>
              <select
                value={inputValueForType}
                onChange={(e) => setInputValueForType(e.target.value)}
              >
                <option value='Select Medicine Type'>Select Medicine Type</option>
                <option value='Tablet'>Tablet</option>
                <option value='Powder'>Powder</option>
                {/* Add more medicine type options if needed */}
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
  
          {/* Add Prescription Input and Upload Button here if needed */}
          
          <div className={styles.bottom}>
            <button onClick={addMedicine}>Add Medicine</button>
          </div>
        </div>
      </div>
    );
};

export default Medicine;
