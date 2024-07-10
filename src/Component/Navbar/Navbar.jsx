import './Navbar.scss'
import { FiDownload } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import CategoriesMegaMenu from '../CategoriesMegaMenu/CategoriesMegaMenu';
import { useState } from 'react';
const Navbar = () => {
    const [isCategoriesMenuVisible, setIsCategoriesMenuVisible] = useState(false);

    const toggleCategoriesMenu = () => {
        setIsCategoriesMenuVisible(!isCategoriesMenuVisible);
    };
    return (
        <div className="All-navbar">
            {isCategoriesMenuVisible && <CategoriesMegaMenu />}
            <div className='NavbarMainWrapper'>
                <div className="top-navbar">
                    <div className="top-left">
                        <img src="/Images/tharacart-nav-logo.svg" alt="" className="nav-logo" />
                    </div>
                    <div className="top-center">
                        <div className="search-bar">
                            <input type="text" placeholder='Ind' />
                            <img src="/Images/nav-search.svg" alt="" />
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="download-app">
                           <Link> <FiDownload className='nav-icon' />
                           <span>Download App</span></Link>
                        </div>
                        <div className="whishList">
                          <Link>  <IoHeartOutline className='nav-icon' />
                          <span>My Wishlist</span></Link>
                        </div>
                        <div className="sign-in">
                           <Link> <AiOutlineUser className='nav-icon' />
                           <span>Sign In</span></Link>
                        </div>
                        <div className="cart">
                            <Link to='/shopping-cart'><GrCart className='nav-icon' /></Link>
                        </div>
                    </div>
                </div>
                <div className="bottom-navbar">
                    <div className="bottom-nav-left">
                        <div className="category-dropdown" onClick={toggleCategoriesMenu}>All Categories <FaChevronDown className={`down-icon ${isCategoriesMenuVisible == true ? "rotate" : ""}`} /></div>
                    </div>
                    <div className="bottom-nav-center">
                        <div className="nav-main">
                            <div className="navlink"><Link className='link'>Groceries & Essentials</Link></div>
                            <div className="navlink"><Link className='link'>Electronics</Link></div>
                            <div className="navlink"><Link className='link'>Home & Furniture</Link></div>
                            <div className="navlink"><Link className='link'>Men’s Fashion</Link></div>
                            <div className="navlink"><Link className='link'>Women’s Fashion</Link></div>
                            <div className="navlink"><Link className='link'>Beauty & Fragrance</Link></div>
                            <div className="navlink"><Link className='link'>Toys</Link></div>
                            <div className="navlink"><Link className='link'>Today’s Deal</Link></div>

                        </div>
                    </div>
                    <div className="bottom-nav-right">
                        <IoLocationOutline className='location' />
                        <select name="" id="">
                            <option value="">Nilambur, 679329, IN</option>
                            <option value="">Nilambur, 679329, IN</option>
                            <option value="">Nilambur, 679329, IN</option>

                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
