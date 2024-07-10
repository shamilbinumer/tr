import { useState } from 'react'
import './SearchResultPage.scss'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineStar } from "react-icons/hi2";
import SearchresultSidebar from '../LeftMenuBar/SearchresultSidebar'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const SearchResultPage = () => {
    const [selectedSort, setSelectedSort] = useState('Price: Low to High');

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
    };
    const cardDetils = [
        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        },

        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        },
        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        },

        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        },
        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        },
        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        },
        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        },
        {
            img: "/Images/trend prod3.svg",
            description: "Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)",
            FixedPrice: "150.50",
            BeforePrice: "400",
            offer: "25% OFF",
            Rating: "4.3"

        }
    ]
    return (
        <div className='SearchResultPage-wrapper'>
            <Navbar />
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
                            <div className="dropdown">
                                <div
                                    className="dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sort: {selectedSort}
                                </div>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="low-to-high"
                                            value="Price: Low to High"
                                            checked={selectedSort === 'Price: Low to High'}
                                            onChange={handleSortChange}
                                        />
                                        <label htmlFor="low-to-high">Price: Low to High</label>
                                    </li>
                                    <li className="dropdown-item">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="high-to-low"
                                            value="Price: High to Low"
                                            checked={selectedSort === 'Price: High to Low'}
                                            onChange={handleSortChange}
                                        />
                                        <label htmlFor="high-to-low">Price: High to Low</label>
                                    </li>
                                    <li className="dropdown-item">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="discounts"
                                            value="Discounts"
                                            checked={selectedSort === 'Discounts'}
                                            onChange={handleSortChange}
                                        />
                                        <label htmlFor="discounts">Discounts</label>
                                    </li>
                                    <li className="dropdown-item">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="recommended"
                                            value="Recommended"
                                            checked={selectedSort === 'Recommended'}
                                            onChange={handleSortChange}
                                        />
                                        <label htmlFor="recommended">Recommended</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-2">
                            <div className=" dropdown-toggle2" data-bs-toggle="dropdown" aria-expanded="false">
                                Brand
                            </div>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
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
                                                            <h1>₹ {data.FixedPrice}</h1>
                                                        </div>
                                                        <div className="before-price">
                                                            <h3><strike>₹ {data.BeforePrice}</strike></h3>
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
            <Footer />
        </div>
    )
}

export default SearchResultPage