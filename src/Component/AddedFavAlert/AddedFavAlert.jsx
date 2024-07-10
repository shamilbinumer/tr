import React from 'react';
import './AddedFavAlert.scss';
import { SiTicktick } from "react-icons/si";
import { MdOutlineClose } from "react-icons/md";

const AddedFavAlert = ({ visible, onClose }) => {
  if (!visible) return null;
console.log("asedfsefsef");
  return (
    <div className='AddedFavAlertMainWrapper'>
      <div className="alert-container">
        <div className="alert">
        <SiTicktick className='filled-fav-icon' />
          <p>Product Moved to Wishlist</p>
          <MdOutlineClose  className="close-btn" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default AddedFavAlert;
