import { useState } from 'react';
import './ShoppingCart.scss'
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ShoppingCart = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='shoppingCartMainWrapper'>
      <Navbar />
      <div className="container-fluid">
        <div className="shopping-cart-page row">
          <div className="col-lg-8 shopping-cart-left">
            <h3 className="cart-heading">Your Cart (2)</h3>
            <div className="register-card">
              <div className="reg-card-left">
                <img src="/Images/Vector (1).png" alt="" />
                <p className="save-text">Save up to 15% with Business Account</p>
                <span>You’ll get Wholesale Price & GST Input tax credit</span>
              </div>
              <div className="reg-card-right">
                <button>Register Now</button>
              </div>
            </div>
            {/* =======================cart-items===================== */}
            <div className="cart-items-main">
              <div className="cart-item row">
                <div className="col-lg-8 cart-item-left">
                  <div className="image-description-wrapper">
                    <div className="prod-image"><img src="/Images/trend prod1.svg" alt="" /></div>
                    <div className="discription">
                      <p>Slurrp Farm No Maida No MSG Not Fried, Curry <br /> Masala Millet Hakka Noodles, Pack of 3 Hakka Noodle</p>
                      <span className='brand'>Brand</span>
                      <span className="brand-value">Pisang</span>
                      <span className="orderd-buy">Sold by</span>
                      <span className="ordered-by-value">Thara Online Store</span>
                    </div>
                  </div>
                  <div className="count-section">
                    <div className="calculator">
                      <div className="decrement" onClick={() => setCount(count - 1)}><FaMinus className='count-icon' /></div>
                      <div className="count"><span>{count}</span></div>
                      <div className="increment" onClick={() => setCount(count + 1)}><FaPlus className='count-icon' /></div>
                    </div>
                    <p><FaRegHeart className='fav-icon' />Save for Later</p>
                    <p>Remove</p>
                  </div>
                </div>
                <div className="col-lg-4 cart-item-right">
                  <div>
                    <span className="offer-price">₹150.50</span>
                    <span className="og-price"><strike>₹299.05</strike></span>
                    <span className="gst">Incl. GST</span>
                  </div>
                  <div>
                    <span className='offer-ratio'>25% OFF</span>
                    <span className='saved-amt'>You Save ₹150</span>

                  </div>
                </div>
              </div>
              <div className="cart-item row">
                <div className="col-lg-8 cart-item-left">
                  <div className="image-description-wrapper">
                    <div className="prod-image"><img src="/Images/trend prod1.svg" alt="" /></div>
                    <div className="discription">
                      <p>Slurrp Farm No Maida No MSG Not Fried, Curry <br /> Masala Millet Hakka Noodles, Pack of 3 Hakka Noodle</p>
                      <span className='brand'>Brand</span>
                      <span className="brand-value">Pisang</span>
                      <span className="orderd-buy">Sold by</span>
                      <span className="ordered-by-value">Thara Online Store</span>
                    </div>
                  </div>
                  <div className="count-section">
                    <div className="calculator">
                      <div className="decrement" onClick={() => setCount(count - 1)}><FaMinus className='count-icon' /></div>
                      <div className="count"><span>{count}</span></div>
                      <div className="increment" onClick={() => setCount(count + 1)}><FaPlus className='count-icon' /></div>
                    </div>
                    <p><FaRegHeart className='fav-icon' />Save for Later</p>
                    <p>Remove</p>
                  </div>
                </div>
                <div className="col-lg-4 cart-item-right">
                  <div>
                    <span className="offer-price">₹150.50</span>
                    <span className="og-price"><strike>₹299.05</strike></span>
                    <span className="gst">Incl. GST</span>
                  </div>
                  <div>
                    <span className='offer-ratio'>25% OFF</span>
                    <span className='saved-amt'>You Save ₹150</span>

                  </div>
                </div>
              </div>
            </div>

            {/* ======================================whislist-section================================== */}
            <div className="whishlist-section-main">
              <div className="whist-list-collapse" onClick={() => setIsOpen(!isOpen)}>
                <span><FaRegHeart className='fav-icon' /> My Wishlist</span>
                <FaChevronDown className={`down-arrow ${isOpen ? "up-arrow" : ''}`} />
              </div>
              <div className={`collapse-content whist-lisdt-item-main ${isOpen ? 'collapse-opened' : ""}`}>
                <div className="whishlist-item cart-item row">
                  <div className="col-lg-8 cart-item-left">
                    <div className="image-description-wrapper">
                      <div className="prod-image"><img src="/Images/trend prod1.svg" alt="" /></div>
                      <div className="discription">
                        <p>Slurrp Farm No Maida No MSG Not Fried, Curry <br /> Masala Millet Hakka Noodles, Pack of 3 Hakka Noodle</p>
                        <span className='brand'>Brand</span>
                        <span className="brand-value">Pisang</span>
                        <span className="orderd-buy">Sold by</span>
                        <span className="ordered-by-value">Thara Online Store</span>
                      </div>
                    </div>
                    <div className="count-section">
                      <p>Move to Cart</p>
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="col-lg-4 cart-item-right">
                    <div>
                      <span className="offer-price">₹150.50</span>
                      <span className="og-price"><strike>₹299.05</strike></span>
                      <span className="gst">Incl. GST</span>
                    </div>
                    <div>
                      <span className='offer-ratio'>25% OFF</span>
                      <span className='saved-amt'>You Save ₹150</span>

                    </div>
                  </div>
                </div>
                <div className="whishlist-item cart-item row">
                  <div className="col-lg-8 cart-item-left">
                    <div className="image-description-wrapper">
                      <div className="prod-image"><img src="/Images/trend prod1.svg" alt="" /></div>
                      <div className="discription">
                        <p>Slurrp Farm No Maida No MSG Not Fried, Curry <br /> Masala Millet Hakka Noodles, Pack of 3 Hakka Noodle</p>
                        <span className='brand'>Brand</span>
                        <span className="brand-value">Pisang</span>
                        <span className="orderd-buy">Sold by</span>
                        <span className="ordered-by-value">Thara Online Store</span>
                      </div>
                    </div>
                    <div className="count-section">
                      <p>Move to Cart</p>
                      <p>Remove</p>
                    </div>
                  </div>
                  <div className="col-lg-4 cart-item-right">
                    <div>
                      <span className="offer-price">₹150.50</span>
                      <span className="og-price"><strike>₹299.05</strike></span>
                      <span className="gst">Incl. GST</span>
                    </div>
                    <div>
                      <span className='offer-ratio'>25% OFF</span>
                      <span className='saved-amt'>You Save ₹150</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 shopping-cart-right">
            <div className="order-summery-card">
              <h4>Order Summary</h4>
              <div className="order-details">
                <table>
                  <tr>
                    <td className='left-td'>Sub Total</td>
                    <td className='right-td total'>₹76.00</td>
                  </tr>
                  <tr>
                    <td className='left-td'>Shipping Charges</td>
                    <td className='right-td'><span className='crossed-price'><strike>₹40.00</strike> | </span> <span className='free-dlvry-text' >Free Delivery</span></td>
                  </tr>
                  <tr>
                    <td className='left-td'>Coupon Discount</td>
                    <td className='right-td'><span className='discount'>-₹50.00</span></td>
                  </tr>
                </table>
                <img src="/Images/Line 39.png" alt="" />
                <table>
                  <tr>
                    <td className='left-td totel-price-text'>Total</td>
                    <td className='right-td total-price'>₹76.00</td>
                  </tr>
                </table>
                <img src="/Images/Line 40.png" alt="" />
                <p className='saved-count'>You can save up to ₹140 on this order</p>
                <button className='checkoutBtn'>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ShoppingCart
