import { Link } from 'react-router-dom';
import './AddToCartAlert.scss'
import { MdOutlineClose } from "react-icons/md";

const AddToCartAlert = ({ visible, onClose }) => {
    if (!visible) return null;
  return (
    <div>
      <div className="alert-container">
        <div className="alert">
        <img src="/Images/add to cart.png" alt="" />
          <p>Item Added to Cart</p>
          <Link className='gotocart'>Go To Cart</Link>
          <MdOutlineClose  className="close-btn" onClick={onClose} />
        </div>
      </div>
    </div>
  )
}

export default AddToCartAlert
