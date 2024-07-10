import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import './Signin.scss'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Signin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className='signin-main-body'>
            <Navbar />
            <div className="signin-sub-body">
                <div className="signin-form-container">
                    <div className="signin-title">
                        <h1>Sign In with Email</h1>
                    </div>

                    <div className="form-section">
                        <form action="">
                            <div className="form-inputs">
                                <label htmlFor="email">Email *</label>
                                <input className='email-input' type="text" required />
                                <label htmlFor="password">Password *</label>
                                <div className="password-section">
                                    <div className="password-input-section">
                                        <input type={passwordVisible ? "text" : "password"} required />
                                    </div>
                                    <div className="password-right-section" onClick={togglePasswordVisibility}>
                                        {passwordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                    </div>
                                </div>



                            </div>
                            <div className="forgot-password">
                                <a href="">Forgot Password? <span>Reset it</span></a>
                            </div>


                            <div className="form-group checkbox">
                                <input className="check-box" type="checkbox" id="subscribe" />
                                <label htmlFor="subscribe">Subscribe to WhatsApp, Email notifications. (Optional)</label>
                            </div>


                            <div className="sign-in-btn">
                                <button>Sign In</button>
                            </div>
                            <div className="form-description">
                                <p>By Continuing, You agreeing to share my information. Also agree with our <a href="">Terms of Service</a> &<a href=""> Privacy Policy</a>.</p>
                            </div>
                            <div className="underline-number-section">
                                <div className="ul"></div>
                                <span>OR</span>
                                <div className="ul"></div>
                            </div>
                        </form>

                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="continue-with-google">

                                <div className="google-logo">
                                    <img src="/Images/Frame 1261154798.png" alt="" />
                                </div>
                                <h3>Continue with Google</h3>
                            </div>
                        </a>
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="continue-with-otp">
                                <div className="google-logo">
                                    <img src="/Images/email-newsletter-subscription-svgrepo-com 1.png" alt="" />
                                </div>
                                <h3>Continue with OTP</h3>
                            </div>
                        </a>
                        <div className="business-buying">
                            <div className="buying-business">
                                <a href="">Buying for Business?</a>
                            </div>
                            <div className="sign-in-to-b2b">
                                <a href="">Sign In to B2B Account</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signin
