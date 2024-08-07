import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="flex justify-around shadow-custom font-Poppins py-2">
            <div className="flex flex-row items-center">
                <img className="h-12" src={logo} alt="logo"/>
                <p className="ml-2 font-bold text-lg lg:text-xl">SHOPPER</p>
            </div>

            <div className="mt-4 lg:mt-0">
                <ul className="flex flex-col lg:flex-row lg:items-center text-base text-gray-600 font-medium space-y-4 lg:space-y-0 lg:space-x-6 py-2">
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

            <div className="flex flex-row items-center mt-4 lg:mt-0">
                <Link to='/login'>
                    <button className="text-gray-500 border border-gray-400 h-10 pl-6 pr-6 rounded-3xl text-sm bg-white font-medium mr-4 active:bg-gray-300">Login</button>
                </Link>
                <Link to='/cart' className="relative">
                    <img src={cart_icon} alt="cart" className="h-9"/>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">0</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;