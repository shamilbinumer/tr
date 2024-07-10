import React, { useState } from 'react'
import './CategoriesPage.scss'
import SearchresultSidebar from '../Searchresult/SearchresultSidebar'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineStar } from "react-icons/hi2";
// import SearchresultSidebar from '../Searchresult/SearchresultSidebar'

const CategoriesPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  const cardDetils = [
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },

    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },

    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    },
    {
      img: "/Images/Rectangle 4155.svg",
      description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
      FixedPrice: "299",
      BeforePrice: "400",
      offer: "25% OFF",
      Rating: "4.3"

    }
  ]
  return (
    <div className='categories-main-page'>
      <div style={{ width: '100%', height: '100vh' }}>
        <div className="category-homepage">
          <div className="category-list">
            <div className="category-title">
              <h1>Shop By Popular Categories</h1>
              <div className="seemore" onClick={toggleShowMore}>
                <h1>See More <span><MdOutlineKeyboardArrowDown /></span></h1>
              </div>
            </div>
            <div className="category-container">
              <div className="category-items">
                <img src="/Images/categoryimg1.svg" alt="" />
              </div>
              <div className="category-items">
                <img src="/Images/cat-2.svg" alt="" />
              </div>
              <div className="category-items">
                <img src="/Images/cat-3.svg" alt="" />
              </div>
              <div className="category-items">
                <img src="/Images/cat-2.svg" alt="" />
              </div>
              <div className="category-items">
                <img src="/Images/cat-2.svg" alt="" />
              </div>
              <div className="category-items">
                <img src="/Images/cat-3.svg" alt="" />
              </div>
              <div className="category-items">
                <img src="/Images/cat-2.svg" alt="" />
              </div>
            </div>
            {showMore && (
              <div className="category-container">
                <div className="category-items">
                  <img src="/Images/categoryimg1.svg" alt="" />
                </div>
                <div className="category-items">
                  <img src="/Images/cat-2.svg" alt="" />
                </div>
                <div className="category-items">
                  <img src="/Images/cat-3.svg" alt="" />
                </div>
                <div className="category-items">
                  <img src="/Images/cat-2.svg" alt="" />
                </div>
                <div className="category-items">
                  <img src="/Images/cat-2.svg" alt="" />
                </div>
                <div className="category-items">
                  <img src="/Images/cat-3.svg" alt="" />
                </div>
                <div className="category-items">
                  <img src="/Images/cat-2.svg" alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="category-banner" style={{ backgroundImage: `url("/Images/Categorybanner.svg")`, backgroundSize: "cover" }}>


        </div>
      </div>

      <div className="categories-main-body">
        <div className='SearchResultPage-wrapper'>
          <div className="search-result-body">
            <div className="slide-bar-left">
              <SearchresultSidebar />
            </div>
            <div className="search-home">
              <div className="show-result">
                <h4><span>Showing 1-49 of 2000 results</span> “Indomie Special Chicken Noodles”</h4>
              </div>

              <div className="selecter-filter">
                <div className="filter-1">
                  <select name="" id="">
                    <option value="">Sort : Price - Low to High</option>
                  </select>
                </div>
                <div className="filter-2">
                  <select name="" id="">
                    <option value="">Brand</option>
                  </select>
                </div>
                <div className="filter-3">
                  <select name="" id="">
                    <option value="">Availability 1</option>

                  </select>
                </div>
                <div className="filter-4">
                  <select name="" id="">
                    <option value="">Rating 2</option>

                  </select>
                </div>
              </div>

              <div className="Products-main-body">
                <div className="container-fluid">
                  <div className="row">
                    {
                      cardDetils.map((data, index) =>
                        <div className="col-lg-3" key={index} style={{ marginBottom: "10px" }}>
                          <div className="product-card">

                            <div className="best-seller">
                              <h5>Best Seller</h5>
                            </div>

                            <div className="favourate-icon">
                              <MdOutlineFavoriteBorder />
                            </div>
                            <div className="product-image">
                              <img src={data.img} alt="" />
                            </div>

                            <div className="product-details">
                              <div className="product-title">
                                <p>{data.description}</p>
                              </div>

                              <div className="product-price">
                                <div className="exact-price">
                                  <h1>{data.FixedPrice}</h1>
                                </div>
                                <div className="before-price">
                                  <h3><strike>{data.BeforePrice}</strike></h3>
                                </div>
                                <div className="offer">
                                  <h3>{data.offer}</h3>
                                </div>
                              </div>
                            </div>

                            <div className="product-rating">
                              <HiOutlineStar className='HiOutlineStar-icon' /><span>{data.Rating}</span>
                            </div>

                            <div className="sponsered">
                              <h4>Sponsored</h4>
                            </div>
                          </div>
                        </div>
                      )
                    }

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoriesPage