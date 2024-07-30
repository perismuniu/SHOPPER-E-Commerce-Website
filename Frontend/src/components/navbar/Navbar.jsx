import { useLocation, Link } from 'react-router-dom'; // Import useLocation to get the current path
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

const Navbar = () => {
    const location = useLocation(); // Get the current location from the router
    const currentPath = location.pathname; // Store the current path

    return (
        <div className="flex justify-around shadow-custom mb-5 font-Poppins">
            <div className="flex flex-row">
                <img className="h-12 my-auto mb-5 mt-5" src={logo} alt=""/>
                <p className="mt-8 ml-1 font-bold">SHOPPER</p>
            </div>

            <div>
                <ul className="flex flex-row mt-8 text-base text-gray-600 font-medium">
                    <li className={`flex flex-col items-center cursor-pointer ${currentPath === '/' ? 'text-red-500' : ''}`}>
                        <Link to='/'>Shop</Link>
                        {currentPath === '/' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                    <li className={`ml-3 flex flex-col items-center cursor-pointer ${currentPath === '/men' ? 'text-red-500' : ''}`}>
                        <Link to='/men'>Men</Link>
                        {currentPath === '/men' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                    <li className={`ml-3 flex flex-col items-center cursor-pointer ${currentPath === '/women' ? 'text-red-500' : ''}`}>
                        <Link to='/women'>Women</Link>
                        {currentPath === '/women' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                    <li className={`ml-3 flex flex-col items-center cursor-pointer ${currentPath === '/kids' ? 'text-red-500' : ''}`}>
                        <Link to='/kids'>Kids</Link>
                        {currentPath === '/kids' && <hr className="border-none w-4/5 h-1 rounded-lg bg-red-500"/>}
                    </li>
                </ul>
            </div>

            <div className="flex flex-row">
                <Link to='/login'>
                    <button className="text-gray-500 border border-gray-400 h-10 mt-6 pl-6 pr-6 rounded-3xl text-sm bg-white font-medium mr-5 active:bg-gray-300">Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="" className="h-9 mt-6"/>
                </Link>
                <div className="w-7 h-5 mt-6 pl-2 rounded-full text-sm bg-red-500 text-white flex justify-self-center items-center ml--21 font-bold">0</div>
            </div>
        </div>
    );
}

export default Navbar;