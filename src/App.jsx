import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignWithOTP from './Component/SignWithOTP/SignWithOTP'
import SignUpWithEmail from './Component/SignUpWithEmail/SignUpWithEmail'
import Otp from './Component/OTPsend/Otp'
import Signin from './Component/OTPverfication/Signin'
import HomePage from './Component/HomePage/HomePage'
import SearchresultSidebar from './Component/LeftMenuBar/SearchresultSidebar'
import ProductInnerPage from './Component/ProductInnerPage/ProductInnerPage'
import BrandStore from './Component/BrandStore/BrandStore'
import ShoppingCart from './Component/ShoppingCart/ShoppingCart'
import SearchResultPage from './Component/SearchResultPage/SearchResultPage'
import CheckOutPage from './Component/CheckoutPage/CheckOutPage'
import OrderCompletedPage from './Component/OrderCompletedPage/OrderCompletedPage'
import MyAccount from './Component/MyAccount/MyAccount'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/sign-with-otp' Component={SignWithOTP} />
          <Route path='/sign-up-with-email' Component={SignUpWithEmail} />
          <Route path='/otp-snd' Component={Otp} />
          <Route path='/otp-verification' Component={Signin} />
          <Route path='/menubar' Component={SearchresultSidebar} />
          <Route path='/product-inner-page' Component={ProductInnerPage} />
          <Route path='/brand-store' Component={BrandStore} />
          <Route path='/search-result-page' Component={SearchResultPage} />
          <Route path='/shopping-cart' Component={ShoppingCart} />
          <Route path='/checkOut-page' Component={CheckOutPage} />
          <Route path='/order-cmpleted-page' Component={OrderCompletedPage} />
          <Route path='/my-account' Component={MyAccount} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
