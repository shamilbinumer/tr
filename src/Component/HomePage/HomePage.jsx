import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import trendPtod1 from '/Images/trend prod1.svg'
import trendPtod2 from '/Images/trend prod2.svg'
import trendPtod3 from '/Images/trend prod3.svg'
import trendPtod4 from '/Images/trend prod4.svg'
import hotCat1 from '/Images/hot-cat1.png'
import hotCat2 from '/Images/hot-cat2.png'
import hotCat3 from '/Images/hot-cat3.png'
import hotCat4 from '/Images/hot-cat4.png'
import hotCat5 from '/Images/hot-cat5.png'
import hotCat6 from '/Images/hot-cat6.png'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const HomePage = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
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

  const hotCatSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    swipeToSlide: true, // Allow free scrolling     
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  const CarouseNext = () => {
    sliderRef.current.slickNext();
  };
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

  const hotCategories = [
    { id: 1, name: "Edible Oil", image: hotCat1 },
    { id: 2, name: "Noodles", image: hotCat2 },
    { id: 3, name: "Spices", image: hotCat3 },
    { id: 4, name: "Sweets", image: hotCat4 },
    { id: 5, name: "Syrups", image: hotCat5 },
    { id: 6, name: "Smartphones", image: hotCat6 },
    { id: 7, name: "Edible Oil", image: hotCat1 },
    { id: 8, name: "Noodles", image: hotCat2 },
    { id: 9, name: "Spices", image: hotCat3 },
    { id: 10, name: "Sweets", image: hotCat4 },
    { id: 11, name: "Syrups", image: hotCat5 },
    { id: 12, name: "Smartphones", image: hotCat6 },
  ]
  return (
    <div className='HomePageMailWrapper'>
      <Navbar />
      <div className="HomePageHero">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/Images/Home Page Banner Celbrate BG.svg" className="d-block w-100" alt="..." />
              <img src="/Images/Hero-MobilePhoneBg.svg" alt="" className="mobile-pick" />
              <div className="hero-content">
                <h2>Download Our App</h2>
                <h1>Get Welcome Offer 10%* OFF</h1>
                <p>*Offer is only available for first time app users. T&C apply.</p>
                <div className="play-apple">
                  <img src="/Images/googleplay.svg" alt="" />
                  <img src="/Images/appstore.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/Images/Home Page Banner Celbrate BG.svg" className="d-block w-100" alt="..." />
              <img src="/Images/Hero-MobilePhoneBg.svg" alt="" className="mobile-pick" />
              <div className="hero-content">
                <h2>Download Our App</h2>
                <h1>Get Welcome Offer 10%* OFF</h1>
                <p>*Offer is only available for first time app users. T&C apply.</p>
                <div className="play-apple">
                  <img src="/Images/googleplay.svg" alt="" />
                  <img src="/Images/appstore.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/Images/Home Page Banner Celbrate BG.svg" className="d-block w-100" alt="..." />
              <img src="/Images/Hero-MobilePhoneBg.svg" alt="" className="mobile-pick" />
              <div className="hero-content">
                <h2>Download Our App</h2>
                <h1>Get Welcome Offer 10%* OFF</h1>
                <p>*Offer is only available for first time app users. T&C apply.</p>
                <div className="play-apple">
                  <img src="/Images/googleplay.svg" alt="" />
                  <img src="/Images/appstore.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/Images/Home Page Banner Celbrate BG.svg" className="d-block w-100" alt="..." />
              <img src="/Images/Hero-MobilePhoneBg.svg" alt="" className="mobile-pick" />
              <div className="hero-content">
                <h2>Download Our App</h2>
                <h1>Get Welcome Offer 10%* OFF</h1>
                <p>*Offer is only available for first time app users. T&C apply.</p>
                <div className="play-apple">
                  <img src="/Images/googleplay.svg" alt="" />
                  <img src="/Images/appstore.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
        </div>
      </div>
      {/* ================================trending-products========================== */}
      <div className="trending-products">
        <h3>Trending Products</h3>
        <div className="trending-product-card-wrapper">
          <div className="carousel-next-btn-wrapp">
            <img src="/Images/carousel-next.svg" alt="" className='carousel-next-button' onClick={CarouseNext} />
          </div>
          <Slider ref={sliderRef} {...settings}>
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
      {/* =================================product-banner-section========================== */}
      <div className="product-banner-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="product-banner"><img src="/Images/product-banner1.svg" alt="" /></div>
            </div>
            <div className="col-lg-4">
              <div className="product-banner"><img src="/Images/product-banner2.svg" alt="" /></div>
            </div>
            <div className="col-lg-4">
              <div className="product-banner"><img src="/Images/product-banner3.svg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      {/* =====================================Hot-categories================================ */}
      <div className="hot-categories-wrapper">
        <h2>Hot Categories</h2>
        <Slider {...hotCatSettings}>
          {hotCategories.map(product => (
            <div key={product.id}>
              <Link className='link'>
                <div className="hot-cat-card">
                  <img src={product.image} alt={product.name} />
                </div></Link>
              <p>{product.name}</p>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
