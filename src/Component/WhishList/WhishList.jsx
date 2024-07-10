import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import './WhishList.scss'

const WhishList = () => {
    const [selectedList, setSelectedList] = useState('yourList')
    return (
        <div className='WhisListMainWrapper'>
            <div className="whislistSection">
                <div className="whishlist-main-card">
                    <div className="whishListHeader">
                        <div className={`lists ${selectedList == 'yourList' ? "active-list" : ""}`} onClick={() => setSelectedList('yourList')}>Your List</div>
                        <div className={`lists ${selectedList == 'sharedList' ? "active-list" : ""}`} onClick={() => setSelectedList('sharedList')}>Shared List</div>
                    </div>
                    {
                        selectedList == 'yourList' && (
                            <>
                                <div className="your-list-wrapper">
                                    <div className="your-list-left">
                                        <div className="list-item">
                                            <h4>Your Wishlist</h4>
                                            <button className='Default'>Default</button>
                                            <button>Private</button>
                                        </div>
                                        <div className="list-item">
                                            <h4>Wishlist 2</h4>
                                            <button>Private</button>
                                        </div>
                                    </div>
                                    <div className="your-list-right">
                                        <div className="your-list-right-header">
                                            <div>
                                                <h1>Your Wishlist</h1>
                                                <p>02 Products</p>
                                            </div>
                                            <div style={{ display: "flex", gap: "10px" }}>
                                                <div className="searc-bar">
                                                    <CiSearch className='search-icon' />
                                                    <input type="text" placeholder='Search Product Name, TCIN' />
                                                </div>
                                                <button>Search</button>
                                            </div>
                                        </div>
                                        <div className="whish-list-item-wrapper">
                                            <div className="whish-list-item row">
                                                <div className="col-lg-8 wish-list-item-left">
                                                    <div className="prod-image"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="prod-details">
                                                        <p className="prod-discription">Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)</p>
                                                       <div className="price-details">
                                                            <span className="offer-price">₹150.50</span>
                                                            <span className="og-price"><strike>₹299.05</strike></span>
                                                            <span className="offer-ratio">25% OFF</span>
                                                            <div className="rating-box">
                                                            <FaRegStar className='star' />
                                                            <span>4.3</span>
                                                            </div>
                                                       </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 wish-list-item-right">
                                                    <div><button className='add-two-cart'>Add To Cart</button></div>
                                                    <div><button>Remove</button></div>

                                                </div>

                                            </div>
                                            <div className="whish-list-item row">
                                                <div className="col-lg-8 wish-list-item-left">
                                                    <div className="prod-image"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="prod-details">
                                                        <p className="prod-discription">Slurrp Farm No Maida No MSG Not Fried, Curry Masala Millet Hakka Noodles, Pack of 3 Hakka Noodles Vegetarian (192 g)</p>
                                                       <div className="price-details">
                                                            <span className="offer-price">Out of Stock</span>
                                                          
                                                       </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 wish-list-item-right">
                                                    <div><button >View Similar Products</button></div>
                                                    <div><button>Remove</button></div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )

                    }
                    {
                        selectedList == 'sharedList' && (
                            <>
                                  <div className="your-list-wrapper">
                                    <div className="your-list-left">
                                        <div className="list-item">
                                            <h4>Your Shared List</h4>
                                            <button className='Default'>Default</button>
                                            <button>Private</button>
                                        </div>
                                        <div className="list-item">
                                            <h4>Shared List 2</h4>
                                            <button>Private</button>
                                        </div>
                                    </div>
                                    <div className="your-list-right">
                                        <div className="your-list-right-header">
                                            <div>
                                                <h1>Shared List</h1>
                                                <p>02 Products</p>
                                            </div>
                                            <div style={{ display: "flex", gap: "10px" }}>
                                                <div className="searc-bar">
                                                    <CiSearch className='search-icon' />
                                                    <input type="text" placeholder='Search Product Name, TCIN' />
                                                </div>
                                                <button>Search</button>
                                            </div>
                                        </div>
                                       <div className="shared-item-wrapper">
                                            <div className="shared-item">
                                                <h1>Favourite Shirts</h1>
                                                <div className="shared-items-card-main">
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><span>3 +</span></div>
                                                </div>
                                                <button><RiShareForwardLine className='share-icon' /> Share</button>
                                                <button>Remove</button>
                                            </div>
                                            <div className="shared-item">
                                                <h1>Favourite Shirts</h1>
                                                <div className="shared-items-card-main">
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><img src="/Images/trend prod3.svg" alt="" /></div>
                                                    <div className="shared-item-card"><span>3 +</span></div>
                                                </div>
                                                <button><RiShareForwardLine className='share-icon' /> Share</button>
                                                <button>Remove</button>
                                            </div>
                                       </div>
                                    </div>

                                </div>
                            </>
                        )

                    }
                </div>
            </div>
        </div>
    )
}

export default WhishList
