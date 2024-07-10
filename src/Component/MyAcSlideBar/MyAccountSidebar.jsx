import { useState } from 'react'
import './MyAccountSidebar.scss'
import { Link } from 'react-router-dom'


const MyAccountSidebar = ({ rightSection, setRightSection }) => {
    return (
        <div className='myaccount-sidebar'>
            <div className="sidebar-content">
                <div className="silidebar-heading-section">
                    <h1> <img src="/Images/Rectangle 4165.png" alt="" />Hi, Akhil</h1>
                    <div className="register-b2b">
                        <p>Save up to 15% with Business Account</p>
                        <Link className='reg-account' to='/'>Register B2B Account Now</Link>
                    </div>
                </div>

                <div className="my-orders-main">
                    <div className="my-orders">
                        <div className="my-order-icon">
                            <img src="/Images/my-order.png" alt="" />
                        </div>
                        <h1>My Orders</h1>
                    </div>

                    <div className="myorders-collapse">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    < div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className="account-info">
                                            <div className="icon">
                                                <img src="/Images/user.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <span>Account Info</span>
                                            </div>
                                        </div>
                                    </div>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="body-contents">
                                            <div onClick={() => setRightSection('personal-information')}><Link className={`account-info-contents ${rightSection == 'personal-information' ? "active" : ''}`} >Personal Information</Link></div>
                                            <div onClick={() => setRightSection('address')}>
                                                <Link className={`account-info-contents ${rightSection == 'address' ? "active" : ''}`}>Addresses</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="account-info">
                                            <div className="icon">
                                                <img src="/Images/my-stuff.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <span>My Stuff</span>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="body-contents">
                                            <div onClick={() => setRightSection('whishlist')}><Link className={`account-info-contents ${rightSection == 'whishlist' ? "active" : ''}`} >Wishlist</Link></div>
                                            <div>
                                                <Link className='account-info-contents' >My Ratings & Reviews</Link>
                                            </div>
                                            <div>
                                                <Link className='account-info-contents' >My Question & Answers</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-orders" onClick={() => setRightSection('wallet')}>
                                <div className="my-order-icon">
                                    <img src="/Images/wallet-03.png" alt="" />
                                </div>
                                <h1 className={`${rightSection == 'wallet' ? "active" : ''}`}>Wallet</h1>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div className="account-info">
                                            <div className="icon">
                                                <img src="/Images/announcement-02-svgrepo-com 1.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <span> Reward Area</span>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="body-contents">
                                            <div>        <Link className='account-info-contents'>Refer & Earn</Link></div>
                                            <div>
                                                <Link className='account-info-contents'>Affiliate Dashboard</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-orders">
                                <div className="my-order-icon">
                                    <img src="/Images/logout-02.png" alt="" />
                                </div>
                                <h1>Logout</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyAccountSidebar