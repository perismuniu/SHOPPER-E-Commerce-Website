import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-14">
        <div className="flex flex-row">
            <img src={footer_logo} alt="Footer log" className="flex items-center gap-5 h-12"/>
            <p className="font-bold text-lg mt-4 ml-4">SHOPPER</p>
        </div>
        <div className="flex flex-row list-none gap-14 text-gray-500 text-xl ">
            <ul className="flex">
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer ml-4">Products</li>
                <li className="cursor-pointer ml-4">Offices</li>
                <li className="cursor-pointer ml-4">About</li>
                <li className="cursor-pointer ml-4">Contact</li>
            </ul>
        </div>

        <div className="flex flex-col items-center justify-center">        
            <div className="flex gap-5">
                <div className="p-2.5 pb-1.5 bg-gray-100 border-gray-200">
                    <img src={instagram_icon} alt="Instagram Icon"/>
                </div>
                <div className="p-2.5 pb-1.5 bg-gray-100 border-gray-200">
                    <img src={pinterest_icon} alt="Pinterest Icon"/>
                </div>
                <div className="p-2.5 pb-1.5 bg-gray-100 border-gray-200">
                    <img src={whatsapp_icon} alt="Whatsapp Icon"/>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center gap-8 mb-8 text-gray-600">
                    <hr className="w-4/5 rounded-xl h-2 bg-gray-50"/>
                    <p>Copyright @ 2024 - All Rights Reserved</p>
                </div> 
            </div>  
        </div>
    </div>
  )
}

export default Footer
