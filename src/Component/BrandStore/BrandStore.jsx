import './BrandStore.scss'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import trendPtod1 from '/Images/trend prod1.svg'
import trendPtod2 from '/Images/trend prod2.svg'
import trendPtod3 from '/Images/trend prod3.svg'
import trendPtod4 from '/Images/trend prod4.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const BrandStore = () => {
  const sliderRef = useRef(null);
  const [brandWeDealIsVisible, setBrandWeDealIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 6; 

  const reviews = [
    {
      rating: 4,
      title: "Great product at this price!!!",
      user: "by Akhil V",
      comment: "It’s the same taste as I had from saudi arabia. I never thought it would be taste the same"
    },
    {
      rating: 5,
      title: "Excellent quality!",
      user: "by John D",
      comment: "Really satisfied with the quality and taste."
    },
    {
      rating: 3,
      title: "Good, but not great",
      user: "by Alice M",
      comment: "It's okay, but I've had better."
    },
    {
      rating: 5,
      title: "Perfect!",
      user: "by Sara K",
      comment: "Absolutely love it!"
    },
    {
      rating: 4,
      title: "Very good product",
      user: "by Mike T",
      comment: "Worth the money."
    },
    {
      rating: 2,
      title: "Not as expected",
      user: "by Jane P",
      comment: "Could be better."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
    {
      rating: 5,
      title: "Highly recommended",
      user: "by Sam R",
      comment: "I would buy this again."
    },
  ];

  const indexOfLastReview = (currentPage + 1) * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };


  const SeeMore = () => {
    setBrandWeDealIsVisible(!brandWeDealIsVisible)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true, // Allow free scrolling     
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const trendingSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    swipeToSlide: true,     
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };




  const topSellingProducts = [
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
    {
      image: "/Images/trend prod4.svg",
      discription: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      offerPrice: "150.50",
      ogPrice: "299.05",
      offerRatio: "25",
      rating: "4.3"
    },
  ]

  const products = [
    { id: 1, name: "Pisang 8MM Bold Green Cardamom (Elaichi)Prem....", image: trendPtod1, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 2, name: "ndomie Special Chicken (Pack of 20 pics) Instant N...", image: trendPtod2, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 3, name: "Zpc Milanówek Cream Fudge Luxury, 800 g (Produ..", image: trendPtod3, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 4, name: "Pisang honey Squeezy| Buy one get one free| 100% pure...", image: trendPtod4, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 5, name: "Pisang 8MM Bold Green Cardamom (Elaichi)Prem....", image: trendPtod1, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 6, name: "Zpc Milanówek Cream Fudge Luxury, 800 g (Produ...", image: trendPtod1, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 7, name: "Indomie Special Chicken (Pack of 20 pics) Instant No...", image: trendPtod2, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 8, name: "Pisang 8MM Bold Green Cardamom (Elaichi)Prem....", image: trendPtod3, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 9, name: "ndomie Special Chicken (Pack of 20 pics) Instant N...", image: trendPtod4, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 10, name: "Pisang 8MM Bold Green Cardamom (Elaichi)Prem....", image: trendPtod1, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 11, name: "Indomie Special Chicken (Pack of 20 pics) Instant No...", image: trendPtod1, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 12, name: "ndomie Special Chicken (Pack of 20 pics) Instant N...", image: trendPtod2, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 13, name: "ndomie Special Chicken (Pack of 20 pics) Instant N...", image: trendPtod3, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 14, name: "ndomie Special Chicken (Pack of 20 pics) Instant N...", image: trendPtod4, regularPrice: "₹150.50", price: "₹299.40" },
    { id: 15, name: "ndomie Special Chicken (Pack of 20 pics) Instant N...", image: trendPtod1, regularPrice: "₹150.50", price: "₹299.40" },
  ];
  const CarouseNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className='brandStoreWrapper'>
      <Navbar />
      <div className="brand-store">
        <div className="brand-store-hero" style={{ backgroundImage: `url("/Images/brand page banner.png")` }}></div>
        <div className="about-thara-section">
          <div className="about-thara-left">
            <div className="about-thara-left-first-section">
              <h3>Thara Online Store</h3>
              <p>Joined on April 2023 (<strong>1 Year</strong>)</p>
              <div className="thara-best-seller">Thara Cart Best Seller</div>
            </div>
            <div className="about-thara-left-second-section">
              <div className="rating">
                <p>4.3</p>
                <div>
                  <FaStar className='star' />
                  <FaStar className='star' />
                  <FaStar className='star' />
                  <FaStar className='star' />
                  <FaStarHalfAlt className='star' />
                </div>
              </div>
              <p className='see-all-review'>See All Reviews</p>
            </div>
          </div>
          <div className="about-thara-right">
            <button data-bs-toggle="modal" data-bs-target="#LeaveSellerModal">Leave a Seller Feedback</button>
            <button data-bs-toggle="modal" data-bs-target="#ReportProductModal">Report</button>
          </div>
        </div>
        {/* <!-- LeaveSellerModal --> */}
        <div className="modal fade leave-seller-modal" id="LeaveSellerModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Leave a Seller Feedback</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <FaStar className='star' />
                <FaStar className='star' />
                <FaStar className='star' />
                <FaStar className='star white' />
                <FaStar className='star white' />
                <p>Is this seller average?</p>
                <label htmlFor="">Any Comments</label>
                <div>
                  <textarea name="" id=""></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button>Submit Feedback</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ReportProductModal --> */}
        <div className="modal fade reportProductModal" id="ReportProductModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        {/* =================================top-selling-product-section============================ */}
        <div className="top-selling-product-section">
          <h2 className="top-selling-heading">Top Selling Products</h2>
          <div className="top-selling-product-wrapper">
            <Slider {...settings}>
              {
                topSellingProducts.map((data, index) =>
                  <div className="product-card-main" key={index}>
                    <div className="trending-product-card">
                      <IoIosHeartEmpty className='heart-icon' />
                      <div className="top-sell-label">Best Seller</div>
                      <div className="prod-image"><img src={data.image} alt="" /></div>
                      <p className="prod-disc">{data.discription}</p>
                      <div className="price-details">
                        <p className='offer-price'>₹{data.offerPrice}</p>
                        <p className="og-price"><strike>₹{data.ogPrice}</strike></p>
                        <p className="offer-ratio">{data.offerRatio}% OFF</p>
                      </div>
                      <div className="rating-square">
                        <FaRegStar className='star' />
                        <span>{data.rating}</span>
                      </div>
                      <p className="Sponsored">Sponsored</p>
                    </div>
                  </div>
                )
              }

            </Slider>
          </div>
        </div>
        {/* =================================brands-we-deal=============================== */}
        <div className="brands-we-deal">
          <div className="brand-deal-head-section">
            <h2 className="brand-deal-heading">Brands We Deal</h2>
            <div className="seemore-container" onClick={SeeMore}>
              <span>See More</span>
              <FaAngleDown className={`down-arrow ${brandWeDealIsVisible == true ? "opened" : ""}`} />
            </div>
          </div>
          <div className="brands-wrapper">
            <div className="brand-card">
              <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
              <p>Indomie</p>
            </div>
            <div className="brand-card">
              <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
              <p>Indomie</p>
            </div>
            <div className="brand-card">
              <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
              <p>Indomie</p>
            </div>
            <div className="brand-card">
              <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
              <p>Indomie</p>
            </div>
            <div className="brand-card">
              <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
              <p>Indomie</p>
            </div>
            <div className="brand-card">
              <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
              <p>Indomie</p>
            </div>
            <div className="brand-card">
              <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
              <p>Indomie</p>
            </div>
            {brandWeDealIsVisible && (
              <>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
                <div className="brand-card">
                  <div className="brand-image"><img src="/Images/image 44.png" alt="" /></div>
                  <p>Indomie</p>
                </div>
              </>

            )}
          </div>
        </div>
        {/* ================================trending-products========================== */}
        <div className="trending-products">
          <h3>Trending Products</h3>
          <div className="trending-product-card-wrapper">
            <div className="carousel-next-btn-wrapp">
              <img src="/Images/carousel-next.svg" alt="" className='carousel-next-button' onClick={CarouseNext} />
            </div>
            <Slider ref={sliderRef}  {...trendingSettings}>
              {products.map(product => (
                <div key={product.id}>
                  <Link className='link'>
                    <div className="trending-card">
                      <img src={product.image} alt={product.name} />
                      <p>{product.name}</p>
                      <span className='price'>{product.regularPrice}</span>
                      <span className='crossed-price'><strike>{product.price}</strike></span>
                    </div></Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* ================================trending-products========================== */}
        {/* ====================================rating-and-review-wrapper============================ */}
        <div className="rating-and-review-section-main-section">
          <div className="rating-and-review-section-main row">
            <div className="col-lg-4 col-md-4 col-sm-12 rating-review-left">
              <p>Ratings & Reviews</p>
              <div className="rating-count-main row">
                <div className="col-lg-6 col-md-6 col-sm-6 rating-count-left">
                  <div><span>4.3</span></div>
                  <div>
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStarHalfAlt className='star' />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 rating-count-right">
                  <div className='ratingprogress'>
                    <span>5</span>
                    <FaStar className='star' />
                    <div className="progress-baar"><div className="inner-progress" style={{ width: "40%" }}></div></div>
                  </div>
                  <div className='ratingprogress'>
                    <span>5</span>
                    <FaStar className='star' />
                    <div className="progress-baar"><div className="inner-progress" style={{ width: "35%" }}></div></div>
                  </div>
                  <div className='ratingprogress'>
                    <span>5</span>
                    <FaStar className='star' />
                    <div className="progress-baar"><div className="inner-progress" style={{ width: "30%" }}></div></div>
                  </div>
                  <div className='ratingprogress'>
                    <span>5</span>
                    <FaStar className='star' />
                    <div className="progress-baar"><div className="inner-progress" style={{ width: "25%" }}></div></div>
                  </div>
                  <div className='ratingprogress'>
                    <span>5</span>
                    <FaStar className='star' />
                    <div className="progress-baar"><div className="inner-progress" style={{ width: "20%" }}></div></div>
                  </div>
                </div>

              </div>
              <button className='rate-seller-btn'>Rate Seller</button>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 rating-review-right">
              {currentReviews.map((review, index) => (
                <div className="review-comments-container" key={index}>
                  {[...Array(5)].map((star, i) => (
                    <FaStar
                      key={i}
                      className={`star ${i < review.rating ? '' : 'white'}`}
                    />
                  ))}
                  <h5>{review.title}</h5>
                  <span className="user">{review.user}</span>
                  <p>{review.comment}</p>
                </div>
              ))}
              {/* Pagination Controls */}
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
              />
            </div>
          </div>
        </div>

        {/* ====================================rating-and-review-wrapper============================ */}

      </div>
      <Footer />
    </div>
  )
}

export default BrandStore
