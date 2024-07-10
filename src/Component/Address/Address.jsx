import './Address.scss'
import { BsThreeDotsVertical } from "react-icons/bs";

const Address = () => {
    return (
        <div className='AddressPageMainWrapper'>
            <div className="address-section">
                <div className="address-header">
                    <h2>My Saved Addresses</h2>
                    <button>Add New Address</button>
                </div>
                <div className="container-fluid">
                    <div className="address-cards-main row">
                        <div className="col-lg-6">
                            <div className="address-card">
                                <div className="card-header">
                                    <div>
                                        <button className='addressType active-address'>Default</button>
                                        <button className='addressType'>Home</button>
                                    </div>
                                    <div>
                                        <button className='edit-btn'>Edit</button>
                                        <BsThreeDotsVertical className='menu-dot' />
                                    </div>
                                </div>
                                <h2 className="card-title">Nadeem Kongan,+91 9876543210</h2>
                                <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL,IN - 678493</p>
                                <p>Alternative Number : +91 9876543210</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="address-card">
                                <div className="card-header">
                                    <div>
                                        <button className='addressType'>Home</button>
                                    </div>
                                    <div>
                                        <button className='edit-btn'>Edit</button>
                                        <button className='edit-btn'>Set As Default</button>
                                        <BsThreeDotsVertical className='menu-dot' />
                                    </div>
                                </div>
                                <h2 className="card-title">Nadeem Kongan,+91 9876543210</h2>
                                <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL,IN - 678493</p>
                                <p>Alternative Number : +91 9876543210</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="address-card">
                                <div className="card-header">
                                    <div>
                                        <button className='addressType'>Home</button>
                                    </div>
                                    <div>
                                        <button className='edit-btn'>Edit</button>
                                        <button className='edit-btn'>Set As Default</button>
                                        <BsThreeDotsVertical className='menu-dot' />
                                    </div>
                                </div>
                                <h2 className="card-title">Nadeem Kongan,+91 9876543210</h2>
                                <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL,IN - 678493</p>
                                <p>Alternative Number : +91 9876543210</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="address-card">
                                <div className="card-header">
                                    <div>
                                        <button className='addressType'>Home</button>
                                    </div>
                                    <div>
                                        <button className='edit-btn'>Edit</button>
                                        <button className='edit-btn'>Set As Default</button>
                                        <BsThreeDotsVertical className='menu-dot' />
                                    </div>
                                </div>
                                <h2 className="card-title">Nadeem Kongan,+91 9876543210</h2>
                                <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL,IN - 678493</p>
                                <p>Alternative Number : +91 9876543210</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="address-card">
                                <div className="card-header">
                                    <div>
                                        <button className='addressType'>Home</button>
                                    </div>
                                    <div>
                                        <button className='edit-btn'>Edit</button>
                                        <button className='edit-btn'>Set As Default</button>
                                        <BsThreeDotsVertical className='menu-dot' />
                                    </div>
                                </div>
                                <h2 className="card-title">Nadeem Kongan,+91 9876543210</h2>
                                <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL,IN - 678493</p>
                                <p>Alternative Number : +91 9876543210</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="address-card">
                                <div className="card-header">
                                    <div>
                                        <button className='addressType'>Home</button>
                                    </div>
                                    <div>
                                        <button className='edit-btn'>Edit</button>
                                        <button className='edit-btn'>Set As Default</button>
                                        <BsThreeDotsVertical className='menu-dot' />
                                    </div>
                                </div>
                                <h2 className="card-title">Nadeem Kongan,+91 9876543210</h2>
                                <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL,IN - 678493</p>
                                <p>Alternative Number : +91 9876543210</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="address-card">
                                <div className="card-header">
                                    <div>
                                        <button className='addressType'>Home</button>
                                    </div>
                                    <div>
                                        <button className='edit-btn'>Edit</button>
                                        <button className='edit-btn'>Set As Default</button>
                                        <BsThreeDotsVertical className='menu-dot' />
                                    </div>
                                </div>
                                <h2 className="card-title">Nadeem Kongan,+91 9876543210</h2>
                                <p>Thara apartments, Printhalmanna PO, Near HDFC Bank, Malappuram Dist, KL,IN - 678493</p>
                                <p>Alternative Number : +91 9876543210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
