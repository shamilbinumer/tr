import { useState } from 'react'
import MyAccountSidebar from '../MyAcSlideBar/MyAccountSidebar'
import Navbar from '../Navbar/Navbar'
import PersonalInformation from '../Personalnformation/PersonalInformation'
import './MyAccount.scss'
import Address from '../Address/Address'
import Footer from '../Footer/Footer'
import WalletSection from '../WalletSection/WalletSection'
import WhishList from '../WhishList/WhishList'

const MyAccount = () => {
    const [rightSection, setRightSection] = useState('personal-information')

    const renderRightSection = () => {
        switch (rightSection) {
            case 'personal-information':
                return <PersonalInformation />
            case 'address':
                return <Address />
            case 'wallet':
                return <WalletSection />
                case 'whishlist':
                    return <WhishList />
            default:
                return <div>Item Not Selected</div>
        }
    }

    return (
        <div className='MyAccountMainWrapper'>
            <Navbar />
            <div className="my-account">
                <div className="my-ac-left">
                    <MyAccountSidebar rightSection={rightSection} setRightSection={setRightSection} />
                </div>
                <div className="my-ac-right">
                    {renderRightSection()}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MyAccount
