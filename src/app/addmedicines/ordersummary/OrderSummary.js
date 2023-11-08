
import React, { useState } from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../../../../public/images/edit.png";
import remove from "../../../../public/images/remove.png";

const OrderSummary = ({ medicines, editMedicine, removeMedicine }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setSelectedMedicine({ ...medicines[index] }); // Create a copy of the medicine to edit
  };

  const handleSaveClick = (index) => {
    // Call a function to save the edited medicine in the parent component
    editMedicine(index, selectedMedicine);
    setEditingIndex(null); // Reset editing state
    setSelectedMedicine(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.order_summary}>
        <div>
          <h4>Order Summary</h4>
          <p>Order ID: 552552522114</p>
        </div>
      </div>

      <table className={styles.tables}>
        <thead>
          <tr>
            <th>MEDICINE NAME</th>
            <th>QUANTITY</th>
            <th>MEDICINE TYPE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>
                {index === editingIndex ? (
                  <input
                    type="text"
                    value={selectedMedicine.name}
                    onChange={(e) => {
                      setSelectedMedicine({ ...selectedMedicine, name: e.target.value });
                    }}
                    style={{ backgroundColor: 'white', color:"black" }} // Set background color to white
                  />
                ) : (
                  medicine.name
                )}
              </td>
              <td>
                {index === editingIndex ? (
                  <input
                    type="number"
                    value={selectedMedicine.quantity}
                    onChange={(e) => {
                      setSelectedMedicine({ ...selectedMedicine, quantity: e.target.value });
                    }}
                    style={{ backgroundColor: 'white',color:"black" }} // Set background color to white
                  />
                ) : (
                  medicine.quantity
                )}
              </td>
              <td>
                {index === editingIndex ? (
                  <select
                    value={selectedMedicine.type}
                    onChange={(e) => {
                      setSelectedMedicine({ ...selectedMedicine, type: e.target.value });
                    }}
                    style={{ backgroundColor: 'white', color:"black" }} // Set background color to white
                  >
                    <option value="Tablet">Tablet</option>
                    <option value="Powder">Powder</option>
                    {/* Add more medicine type options if needed */}
                  </select>
                ) : (
                  medicine.type
                )}
              </td>
              <td>
                {index === editingIndex ? (
                  <button onClick={() => handleSaveClick(index)}>Save</button>
                ) : (
                  <Image src={edit} alt="Edit" onClick={() => handleEditClick(index)} />
                )}
              </td>
              <td>
                <Image src={remove} alt="Delete" onClick={() => removeMedicine(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
