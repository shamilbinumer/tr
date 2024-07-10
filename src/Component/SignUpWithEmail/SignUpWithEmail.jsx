import { useState } from 'react';
import './SignUpWithEmail.scss'
import { FaArrowLeft, FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const SignUpWithEmail = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [ConformPasswordVisible, setConformPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfromPasswordVisibility = () => {
    setConformPasswordVisible(!ConformPasswordVisible);
  };
  return (
    <div className='SignUpWithEmailMainWrapper'>
      <Navbar />
      <div className="sign-up-with-email">
        <div className="create-account-card">
          <div className="create-ac-form-data">
            <div className="create-ac-heading">
              <FaArrowLeft className='left-arrow' />
              <h2>Create Account</h2>
            </div>
            <div className="formData">
              <div><label htmlFor="">Full Name *</label></div>
              <div><input type="text" className='nameField' /></div>
              <div><label htmlFor="">Email *</label></div>
              <div><input type="email" className='emailField' /></div>
              <div><label htmlFor="">Phone Number *</label></div>
              <div className="phoneNumber">
                <div className="contry-code">
                  <select name="" id="">
                    <option value="+91">+91</option>
                    <option value="+97">+97</option>
                  </select>
                </div>
                <div><input type="text" className='numberFiled' /></div>
              </div>
              <div><label htmlFor="">Password *</label></div>
              <div className="password">
                <input type={passwordVisible ? "text" : "password"} />
                <div className="eye" onClick={togglePasswordVisibility}>
                  {passwordVisible ? <FaRegEyeSlash className='eye-icon' /> : <FaRegEye className='eye-icon' />}
                </div>
              </div>
              <div><label htmlFor="">Confirm Password *</label></div>
              <div className="password">
                <input type={ConformPasswordVisible ? "text" : "password"} />
                <div className="eye" onClick={toggleConfromPasswordVisibility}>
                  {ConformPasswordVisible ? <FaRegEyeSlash className='eye-icon' /> : <FaRegEye className='eye-icon' />}
                </div>
              </div>

              <div><label htmlFor="">Referral Code (Optional)</label></div>
              <div><input type="text" className='nameField' /></div>
              <div style={{ display: "flex", alignItems: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <input type="checkbox" id='subscribe' />
                <label htmlFor='subscribe' className='sub-label'>Subscribe to WhatsApp, Email notifications. (Optional)</label>
              </div>
              <button>Sign Up</button>
              <p>By Continuing, You agreeing to share my information. Also
                agree with our <a href="">Terms of Service</a> & <a href="">Privacy Policy.</a></p>
            </div>
          </div>
          <div className="bottomData">
            <div>
              <p>Creating for Business? </p>
              <Link>Signup for B2B Account</Link>
            </div>
            <div>
              <p>Already have account?  </p>
              <Link>Sign In to Thara Cart</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUpWithEmail
