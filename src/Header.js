import React from 'react'
import './Header.css';
import image from './Images/amzon logo.jpg'
import Search from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'



function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) auth.signOut();
    }

    return (
        <div className="header">
            <div className="header_top">
                <Link to="/">
                    <img src={image} alt="Site-logo" className="header_logo" />
                </Link>
                <div className="header_search">
                    <input className="search_Input" placeholder="Search Here" type="text" />
                    <Search className="search_icon" />
                </div>
            </div>
            <div className="header_navbar" >
                <Link to={!user && '/login'}>
                    <div className="header_option" >
                        <span className="option_one">
                            Hello {user === null ? 'Guest' : user?.email}
                        </span>
                        <span onClick={handleAuth} className="option_two">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header_option" >
                    <span className="option_one">
                        Returns
                    </span>
                    <span className="option_two">
                        & Orders
                    </span>
                </div>
                <div className="header_option" >
                    <span className="option_one">
                        Your
                    </span>
                    <span className="option_two">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="option_basket" >
                        <ShoppingCartIcon />
                        <span className="option_two basket_count">
                            {cart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
