import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-6 sm:p-10 md:gap-14">
        <div className="flex flex-col items-center sm:flex-row sm:gap-4">
            <img src={footer_logo} alt="Footer logo" className="h-12"/>
            <p className="font-bold text-lg mt-4 sm:mt-0 sm:ml-4">SHOPPER</p>
        </div>
        <div className="flex flex-row items-center sm:flex-row list-none gap-6 text-gray-500 text-lg sm:text-xl">
            <ul className="flex flex-row sm:flex-row gap-4 sm:gap-8">
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">Offices</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>

        <div className="flex flex-col items-center justify-center">        
            <div className="flex gap-5">
                <div className="p-2.5 pb-1.5 bg-gray-100 border-gray-200 rounded">
                    <img src={instagram_icon} alt="Instagram Icon"/>
                </div>
                <div className="p-2.5 pb-1.5 bg-gray-100 border-gray-200 rounded">
                    <img src={pinterest_icon} alt="Pinterest Icon"/>
                </div>
                <div className="p-2.5 pb-1.5 bg-gray-100 border-gray-200 rounded">
                    <img src={whatsapp_icon} alt="Whatsapp Icon"/>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center gap-8 mb-8 text-gray-600">
                    <hr className="w-4/5 rounded-xl h-2 bg-gray-50"/>
                    <p className="text-center">Copyright @ 2024 - All Rights Reserved</p>
                </div> 
            </div>  
        </div>
    </div>
  )
}

export default Footer