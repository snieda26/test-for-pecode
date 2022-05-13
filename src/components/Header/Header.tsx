import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'


export function Header() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/" >
                        <span>Characters</span>
                    </Link>
                    <Link to="/wishlist" >
                        <span>Whishlist</span>
                    </Link>
                </nav>
            </header>
        </>
    )
}
