import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartCount = useSelector(state => state.cart.length)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top" >
            <div className='container '>
                <Link to={'/'} className='navbar-brand' > Shopping App </Link>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to={'/cart'} className='nav-link fs-4'>
                            <Badge badgeContent={cartCount} color="warning">
                                <MailIcon color="light" />
                            </Badge>
                        </Link>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar