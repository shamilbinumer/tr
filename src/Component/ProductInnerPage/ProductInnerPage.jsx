import { useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import './ProductInnerPage.scss';
import AddedFavAlert from '../AddedFavAlert/AddedFavAlert';
import AddToCartAlert from '../AddToCartAlert/AddToCartAlert';
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const ProductInnerPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [favAlertVisible, setFavAlertVisible] = useState(false);
  const [cartAlertVisible, setCartAlertVisible] = useState(false);

  const productImages = [
    { img: '/Images/trend prod1.svg' },
    { img: '/Images/trend prod2.svg' },
    { img: '/Images/trend prod3.svg' },
    { img: '/Images/trend prod4.svg' },
    { img: '/Images/trend prod4.svg' },
  ];

  const selectImage = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  const handleFavIconClick = () => {
    setFavAlertVisible(true);
    setTimeout(() => setFavAlertVisible(false), 3000); // Automatically hide after 3 seconds
  };

  const handleCartClick = () => {
    setCartAlertVisible(true);
    setTimeout(() => setCartAlertVisible(false), 3000); // Automatically hide after 3 seconds
  };

  return (
    <div className='ProductInnerPageMailWrapper'>
      <Navbar />
      <div className="product-inner-page">
        <AddedFavAlert visible={favAlertVisible} onClose={() => setFavAlertVisible(false)} />
        <AddToCartAlert visible={cartAlertVisible} onClose={() => setCartAlertVisible(false)} />

        <div className="product-page-left">
          <div className="product-sub-images-container">
            {productImages.map((data, index) => (
              <div
                key={index}
                className={`product-sub-image ${selectedImage === index ? "activeImg" : ''}`}
                onClick={() => selectImage(index)}
              >
                <img src={data.img} alt="" />
              </div>
            ))}
          </div>
          <div className="selected-image-container">
            <img src={productImages[selectedImage].img} alt="" />
            <IoIosHeartEmpty className='fav-icon' onClick={handleFavIconClick} />
            <RiShareForwardLine className='share-icon' />
          </div>
        </div>
        <div className="product-page-right">
          <p className="product-discription">
            Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)
          </p>
          <div className="brand">
            <p>Brand</p>
            <p className='brand-vlue'>Pisang</p>
          </div>
          <div className="rating-wrapper">
            <div className="rating-container">
              <FaRegStar className='star-icon' />
              <span>4.3</span>
            </div>
            <span className='rating-count'>(2000 Ratings & 256 Reviews)</span>
          </div>
          <div className="price-wrapper">
            <h2 className="price">₹150.50</h2>
            <p className='crossed-price'><strike>₹299.05</strike></p>
            <p className="gst">Incl. GST</p>
            <p className="offer-text">25% OFF</p>
            <p className='saved-perc'>You Save ₹150</p>
          </div>
          <div className="weight-packaging">
            <div className="weight-wrapper">
              <p>Weight</p>
              <div className="grams">
                <div className="gram-column">100g</div>
                <div className="gram-column disabled-gram">200g</div>
                <div className="gram-column active-gram">500g</div>
              </div>
            </div>
            <div className="weight-wrapper">
              <p>Packaging</p>
              <div className="grams">
                <div className="gram-column">Mix</div>
                <div className="gram-column disabled-gram">Glass Jar</div>
                <div className="gram-column active-gram">Paper</div>
              </div>
            </div>
          </div>
          <div className="delivery-details-card">
            <div className="delivery-left">
              <p>Deliver To</p>
              <select name="" id="">
                <option value="">Nilambur - 679329</option>
                <option value="">Nilambur - 679329</option>
                <option value="">Nilambur - 679329</option>
              </select>
              <div><button className='buy-btn'>Buy Now</button></div>
              <div style={{ marginTop: "1rem" }}>
                <span>Sold By :</span> <span style={{ color: "#5D1CAA" }}>Thara Online Store</span>
              </div>
              <div>
                <span>Ship by :</span> <span style={{ color: "#5D1CAA" }}>Thara Cart</span>
              </div>
            </div>
            <div className="delivery-right">
              <p className="order-time">Order Before 5PM, Today</p>
              <p className='del-date'>& Expect Delivery by Wed, Mar 27</p>
              <button className='addTocartBtn' onClick={handleCartClick}>Add To Cart</button>
            </div>
          </div>
          <div className="register-now-card">
            <img src="/Images/Vector (1).png" className='star-logo' alt="" />
            <div className="reg-left">
              <div><span style={{ fontWeight: "700" }}>Save up to 15%</span> <span>with Business Account</span></div>
              <div><p>You’ll get Wholesale Price & GST Input tax credit</p></div>
            </div>
            <div className="reg-right">
              <button>Register Now</button>
            </div>
          </div>
          <div className="highlight-about-product-wrapper">
            <h3>Highlights</h3>
            <ul>
              <li>The story of each pisang product starts from a hill station or plantation in the outskirts of Kerala. Our plantations are placed at locations where there is plenty of water and good soil to support the growth of the crops.</li>
              <li>The seeds have a warm, slightly pungent, and highly aromatic flavour. However, this little spice has a lot more to offer than simply flavour. For centuries, it has been used in traditional medicine to relieve a multitude of illnesses. These tiny pods of cardamom enclose not just a strong characteristic flavour, but also loads of health benefits.</li>
            </ul>
            <h3>About Product</h3>
            <p>The story of each pisang product starts from a hill station or plantation in the outskirts of Kerala. Our plantations are placed at locations where there is plenty of water and good soil to support the growth of the crops.Cultivated and procured at regular intervals to meet market demands, our team does maintain enough stock to ensure proper flow. We also ensure that products are freshly delivered to our customers.</p>
          </div>
          <div className="delivery-detail-card-wrapper">
            <div className='delivery-card'>
              <img src="/Images/money-bag 1 (1).png" alt="" />
              <p>Cash On Delivery</p>
            </div>
            <div className='delivery-card'>
              <img src="/Images/box 1 (1).png" alt="" />
              <p>Thara Cart Delivery</p>
            </div>
            <div className='delivery-card'>
              <img src="/Images/box 2.png" alt="" />
              <p>7 Day Replacable</p>
            </div>
            <div className='delivery-card'>
              <img src="/Images/box 1 (1).png" alt="" />
              <p>Thara Cart Delivery</p>
            </div>
            <div className='delivery-card'>
              <img src="/Images/money-bag 1 (1).png" alt="" />
              <p>Cash On Delivery</p>
            </div>
          </div>
          <h2 className='more-details-heading'>More Details</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  In The Box
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <span>1 Pack of Cardamom</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  General Details
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <table>
                    <tr>
                      <td>Brand</td>
                      <th>Pisang</th>
                    </tr>
                    <tr>
                      <td>Type</td>
                      <th>Dried Spices</th>
                    </tr>
                    <tr>
                      <td>Form</td>
                      <th>Whole</th>
                    </tr>
                    <tr>
                      <td>Ingredient Type</td>
                      <th>Cardamom</th>
                    </tr>
                    <tr>
                      <td>Region Produced In</td>
                      <th>India</th>
                    </tr>
                    <tr>
                      <td>Age Restriction</td>
                      <th>13+</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Manufacturing, Packaging and Import Info
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  Cooking Instruction
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Legal Disclaimer
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <div className="rating-and-reviews-wrapper">
            <div className="rating-section">
              <h2>Ratings & Reviews</h2>
              <div className="rating-detail-wrapper">
                <div className="rating-star-count">
                  <div><p>4.3</p></div>
                  <div className='rating-stars'><FaStar className='fill-star-rated' /><FaStar className='fill-star-rated' /><FaStar className='fill-star-rated' /><FaStar className='fill-star-rated' /><FaRegStarHalfStroke className='fill-star-rated' /></div>
                </div>
                <div className="rating-progress-bar">
                  <div className="individual-rate">
                    <span>5</span>
                    <FaStar className='fill-star-rated' />
                    <div className="progress-bar-main"><div className="collapse-inner"></div></div>
                  </div>
                  <div className="individual-rate">
                    <span>4</span>
                    <FaStar className='fill-star-rated' />
                    <div className="progress-bar-main"><div className="collapse-inner"></div></div>
                  </div>
                  <div className="individual-rate">
                    <span>3</span>
                    <FaStar className='fill-star-rated' />
                    <div className="progress-bar-main"><div className="collapse-inner"></div></div>
                  </div>
                  <div className="individual-rate">
                    <span>2</span>
                    <FaStar className='fill-star-rated' />
                    <div className="progress-bar-main"><div className="collapse-inner"></div></div>
                  </div>
                  <div className="individual-rate">
                    <span>1</span>
                    <FaStar className='fill-star-rated' />
                    <div className="progress-bar-main"><div className="collapse-inner"></div></div>
                  </div>
                </div>
                <div className="rating-buttons">
                  <div><button data-bs-toggle="modal" data-bs-target="#RateProductModal">Rate The Product</button></div>
                  <button data-bs-toggle="modal" data-bs-target="#ReportProductModal">Report </button>
                </div>
                {/* <!-- RateProductModal --> */}
                <div className="modal fade" id="RateProductModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Review Product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <h3 className='rate-product-heading'>Product Details</h3>
                        <div className="rateproduct-prod-detail">
                          <div className="prod-image"><img src="/Images/trend prod4.svg" alt="" /></div>
                          <div className="prod-details">
                            <h4>Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)</h4>
                            <p>Delivered on 23/08/23</p>
                            <span>TCIN : SFNM109898</span>
                          </div>
                        </div>
                        <div className="rating-stars">
                          <FaStar className='fill-star-rated' />
                          <FaStar className='fill-star-rated' />
                          <FaStar className='fill-star-rated' />
                          <FaStar className='not-fill-star-rated' />
                          <FaStar className='not-fill-star-rated' />
                        </div>
                        <div className="add-rating-image-section">
                          <h5>Add Photos or Videos</h5>
                          <div className="selected-image-wrapper">
                            <div className="file-upload">
                              <input type="file" id="file" className="file-input" />
                              <label htmlFor="file" className="file-label">
                                <span className="plus-sign">+</span>
                              </label>
                            </div>
                            <div className="selected-image"><img src="" alt="" /></div>
                            <div className="selected-image"><img src="" alt="" /></div>
                            <div className="selected-image"><img src="" alt="" /></div>
                          </div>
                        </div>
                        <h2 className="avg-prod-text">Why is it a average product?</h2>
                        <div className="prod-comment-wrapper">
                          <div><label htmlFor="">Write Comments (Optional)</label></div>
                          <textarea name="" id=""></textarea>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button>Apply Ratings</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- ReportProductModal --> */}
                <div className="modal fade" id="ReportProductModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Report Product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <h4 className="what-is-issue-heading">What is the issue?</h4>
                        <div className="issue-list">
                          <div className="radio-group">
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}> <input type="radio" id="option1" name="radio" className="radio-input" />
                              <label htmlFor="option1" className="radio-label">Incorrect Informations</label> </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}> <input type="radio" id="option1" name="radio" className="radio-input" />
                              <label htmlFor="option1" className="radio-label">Counterfeit Products</label> </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}> <input type="radio" id="option1" name="radio" className="radio-input" />
                              <label htmlFor="option1" className="radio-label">Copyright & Trademarks violation</label> </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}> <input type="radio" id="option1" name="radio" className="radio-input" />
                              <label htmlFor="option1" className="radio-label">Others</label> </div>
                          </div>
                        </div>
                        <div className="comment-section">
                          <p>Any Comments</p>
                          <textarea name="" id=""></textarea>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button>Submit Report</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-section">
              <div>
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated not-fill' />
              </div>
              <p className='review-title'>Great product at this price!!!</p>
              <div className="user-details">
                <p>by Akhil V</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src="/Images/Icon.png" alt="" />
                  <p>Verified Purchase</p>
                </div>
              </div>
              <p className="rate-discription">It’s the same taste as I had from saudi arabia. I never thought it would be taste the same</p>
              <div className="review-image-section">
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
              </div>
            </div>
            <div className="review-section">
              <div>
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated not-fill' />
              </div>
              <p className='review-title'>Great product at this price!!!</p>
              <div className="user-details">
                <p>by Akhil V</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src="/Images/Icon.png" alt="" />
                  <p>Verified Purchase</p>
                </div>
              </div>
              <p className="rate-discription">It’s the same taste as I had from saudi arabia. I never thought it would be taste the same</p>
              <div className="review-image-section">
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
              </div>
            </div>
            <div className="review-section">
              <div>
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated' />
                <FaStar className='fill-star-rated not-fill' />
              </div>
              <p className='review-title'>Great product at this price!!!</p>
              <div className="user-details">
                <p>by Akhil V</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src="/Images/Icon.png" alt="" />
                  <p>Verified Purchase</p>
                </div>
              </div>
              <p className="rate-discription">It’s the same taste as I had from saudi arabia. I never thought it would be taste the same</p>
              <div className="review-image-section">
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
                <div className="review-image"><img src="" alt="" /></div>
              </div>
            </div>
            <div className="seeMoreReviewBtn"><button>See More Reviews</button></div>
          </div>
          <div className="faq-section-wrapper">
            <div className="faq-head"><h2>Questions & Answers</h2></div>
            <div className="listOfQstns">
              <div className='qstn' style={{ display: "flex", gap: "5px" }}>
                <span>Q :</span>
                <span>From which coutry Indomie is imported</span>
              </div>
              <div className='anser' style={{ display: "flex", gap: "5px" }}>
                <span>A :</span>
                <span>Indonesia</span>
              </div>
              <p className="user">by Akhil V</p>
              <div className='qstn' style={{ display: "flex", gap: "5px" }}>
                <span>Q :</span>
                <span>From which coutry Indomie is imported</span>
              </div>
              <p className="first-answer">
                Be the first one to asnswer
              </p>
            </div>
            <div className="seemore-faq-btn">
              <button>See More Q&A</button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInnerPage;
