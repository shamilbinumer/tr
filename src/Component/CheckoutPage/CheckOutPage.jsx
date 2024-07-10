import { useState } from 'react';
import './CheckOutPage.scss'
import { BiUser } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const CheckOutPage = () => {
    const [count, setCount] = useState(0);

    const [selectedAddress, setSelectedAddress] = useState('');
    const [isExpanded, setIsExpanded] = useState(true);

    const handleRadioChange = (event) => {
        setSelectedAddress(event.target.value);
    };

    const handleAccordionToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className='CheckOutPageMainWrapper'>
            <div className="checkuot-page">
                {/* =======================nav-bar==================== */}
                <div className="navigation-bar">
                    <div className="nav-left">
                        <img src="/Images/tharacart-nav-logo.svg" alt="" />
                    </div>
                    <div className="nav-center">
                        <img src="/Images/fi_1746680.png" alt="" />
                        <span>Secured Checkout</span>
                    </div>
                    <div className="nav-right">
                        <BiUser className='user-icon' />
                        <select name="" id="">
                            <option value="">Akhil</option>
                            <option value="">Akhil</option>
                        </select>
                    </div>
                </div>
                {/* =================================checkoutPage-left================================ */}
                <div className="container-fluid">
                    <div className="address-section-and-order-summery-wrapper row">
                        <div className="col-lg-8 address-section">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header select-address" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#SelectAddress"
                                            aria-expanded={isExpanded}
                                            aria-controls="collapseOne"
                                            onClick={handleAccordionToggle}
                                        >
                                            {/* <span>{selectedAddress || "1. Select Address"}</span> {!selectedAddress && (
                                        <button className="add-new-address-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Address</button>
                                    )} */}
                                            {selectedAddress ? (<div className='selected-address-true-section'><div style={{ width: "80%" }}><h3>Select Address</h3><span className='selected-address'>{selectedAddress}</span></div><div style={{ display: "flex", justifyContent: "end", width: "20%" }}><button className='edit-btn'>Edit</button></div></div>) : (<><span>1. Select Address</span>
                                                <button className="add-new-address-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Address</button></>)}
                                        </button>


                                    </h2>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Address</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-lg-6 modal-left">
                                                            <h3>Personal Details</h3>
                                                            <div><label htmlFor="">Full Name *</label></div>
                                                            <div><input type="text" className='name-input' /></div>
                                                            <div><label htmlFor="">Phone Number *</label></div>
                                                            <div>
                                                                <div className="number-input">
                                                                    <div className="contry-code">
                                                                        <select name="" id="">
                                                                            <option value="">+91</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="number-typing-section"><input type="text" /></div>
                                                                </div>
                                                            </div>
                                                            <div><label htmlFor="">Type of Address</label></div>
                                                            <div style={{ paddingTop: "1rem" }}>
                                                                <span className='address-type'>Home</span>
                                                                <span className='address-type active-address-type'>Office</span>
                                                            </div>
                                                            <div className='check-box'>
                                                                <input type="checkbox" />
                                                                <label htmlFor="">Make this as my primary address</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 modal-right">
                                                            <h3>Delivery Address</h3>
                                                            <div className="use-my-location">
                                                                <img src="/Images/target-01.png" alt="" />
                                                                <span>Use My Location</span>
                                                            </div>
                                                            <div><label htmlFor="">House No, Building Name*</label></div>
                                                            <div><input type="text" className='address-input' /></div>
                                                            <div><label htmlFor="">Local Area,  Nearby Road, City *</label></div>
                                                            <div><input type="text" className='address-input' /></div><div><label htmlFor="">Landmark</label></div>
                                                            <div><input type="text" className='address-input' /></div>
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <label htmlFor="">Pincode *</label>
                                                                    <input type="text" />
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label htmlFor="">State *</label>
                                                                    <input type="text" />
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button>Save Address</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="SelectAddress" className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`} aria-labelledby="headingOne">
                                        <div className="accordion-body">
                                            <div className="row AddressRow">
                                                <div className="col-lg-8 select-address-left">
                                                    <div className="radio-button">
                                                        <div>
                                                            <div className="custom-radio-container">
                                                                <input
                                                                    type="radio"
                                                                    id="customRadio1"
                                                                    name="customRadio"
                                                                    className="custom-radio"
                                                                    value="Nadeem Kongan, +91 9876543210, Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL, IN - 678493, Alternative Number: +91 9876543210"
                                                                    onChange={handleRadioChange}
                                                                />
                                                                <label htmlFor="customRadio1" className="custom-radio-label"></label>
                                                            </div>
                                                        </div>
                                                        <div className="address-details">
                                                            <h6><span>Nadeem Kongan,</span> <span>+91 9876543210</span></h6>
                                                            <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL, IN - 678493</p>
                                                            <p>Alternative Number : +91 9876543210</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 select-address-right">
                                                    <button>Add Delivery Note</button>
                                                    <button>Edit</button>
                                                </div>
                                            </div>
                                            <div className="row AddressRow">
                                                <div className="col-lg-8 select-address-left">
                                                    <div className="radio-button">
                                                        <div>
                                                            <div className="custom-radio-container">
                                                                <input
                                                                    type="radio"
                                                                    id="customRadio2"
                                                                    name="customRadio"
                                                                    className="custom-radio"
                                                                    value="John Doe, +91 9876543210, Example Towers, Sample City, Nearby Landmark, State - 123456, Country, Alternative Number: +91 9876543210
"
                                                                    onChange={handleRadioChange}
                                                                />
                                                                <label htmlFor="customRadio2" className="custom-radio-label"></label>
                                                            </div>
                                                        </div>
                                                        <div className="address-details">
                                                            <h6><span>John Do,</span> <span>+91 9876543210</span></h6>
                                                            <p>Example Towers, Sample City, Nearby Landmark, State - 123456, Country, Alternative Number: +91 9876543210</p>
                                                            <p>Alternative Number : +91 9876543210</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 select-address-right">
                                                    <button>Add Delivery Note</button>
                                                    <button>Edit</button>
                                                </div>
                                            </div>
                                            <div className="seemore-btn">
                                                <button>See More Addresses <HiOutlineChevronDown /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item orderSummeryWrapper">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#OrderSummery" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>2. Order Summary</span>
                                        </button>
                                    </h2>
                                    <div id="OrderSummery" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                        <div className="accordion-body">
                                            <div className="order-summery-details-main">
                                                <div className="reg-now-container">
                                                    <img src="/Images/Vector (1).png" alt="" />
                                                    <div>
                                                        <span className='first-span'><strong>Save upto 15% </strong>with Business Account</span>
                                                        <span className="second-span">You’ll get Wholesale Price & GST Input tax credit</span>
                                                    </div>
                                                    <div><button>Register Now</button></div>
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
                                                            {/* <p><FaRegHeart className='fav-icon'/>Save for Later</p> */}
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
                                                            {/* <p><FaRegHeart className='fav-icon'/>Save for Later</p> */}
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
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span className='payment-heading'>3. Payment Options</span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
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
            </div>
        </div>


    )
}

export default CheckOutPage
