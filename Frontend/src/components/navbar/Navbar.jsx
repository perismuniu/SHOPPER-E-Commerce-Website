import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useContext, useRef, useState } from 'react';
import nav_dropdown from '../assets/nav_dropdown.png'

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef(); // Ref for the dropdown menu
    const [isOpen, setIsOpen] = useState(false); {/* State to track if the dropdown is open or closed*/}


    const dropdown_toggle = () => {
        setIsOpen(!isOpen) // Toggle the isOpen state
        menuRef.current.classList.toggle('hidden')
        menuRef.current.classList.toggle('flex')
    }

    return (
        <div className="flex justify-between lg:justify-around items-center shadow-custom font-Poppins py-2 px-6 sm:px-1 md:px-8">
            <div className="flex items-center">
                <img className="h-8 sm:h-10 md:h-12" src={logo} alt="logo"/>
                <p className="ml-2 font-bold text-sm sm:text-lg md:text-xl my-auto">SHOPPER</p>
            </div>

            <div className="mt-4 lg:mt-0">
                <img 
                    className={`block sm:hidden w-[30px] -rotate-90 transition-transform duration-500 mx-auto ${isOpen ? 'rotate-2': ''}`}
                    onClick={dropdown_toggle}
                    src={nav_dropdown}
                    alt="Dropdown Menu"
                    aria-expanded={isOpen}
                />
                <ul ref={menuRef} className="hidden sm:flex flex-row items-center text-xs sm:text-sm md:text-base text-gray-600 font-medium space-x-4 sm:space-x-3 py-1">
                    <li className={`flex flex-col items-center cursor-pointer ${currentPath === '/' ? 'text-red-500' : ''}`}>
                        <Link to='/'>Shop</Link>
                        {currentPath === '/' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                    <li className={`flex flex-col items-center cursor-pointer ${currentPath === '/men' ? 'text-red-500' : ''}`}>
                        <Link to='/men'>Men</Link>
                        {currentPath === '/men' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                    <li className={`flex flex-col items-center cursor-pointer ${currentPath === '/women' ? 'text-red-500' : ''}`}>
                        <Link to='/women'>Women</Link>
                        {currentPath === '/women' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                    <li className={`flex flex-col items-center cursor-pointer ${currentPath === '/kids' ? 'text-red-500' : ''}`}>
                        <Link to='/kids'>Kids</Link>
                        {currentPath === '/kids' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                </ul>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
                <Link to='/login'>
                    <button className="text-xs sm:text-sm text-gray-500 border border-gray-400 h-8 sm:h-9 md:h-10 px-4 sm:px-6 rounded-3xl bg-white font-medium mr-2 sm:mr-4 active:bg-gray-300">
                        Login
                    </button>
                </Link>
                <Link to='/cart' className="relative">
                    <img src={cart_icon} alt="cart" className="h-7 sm:h-8 md:h-9"/>
                    <div 
                    className="absolute -top-2 -right-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                        {getTotalCartItems()}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;