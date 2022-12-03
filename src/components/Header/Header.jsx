import React from 'react';
import logo from '../../img/logo.svg';
import './header.scss';




function Header() {
    return (
        <section className="innerHeader">
            <button onClick={
                () => {
                    document.querySelector('.innerHeader').classList.toggle('active');
                }
            }>
                <i class="fa-solid fa-bars"></i>
            </button>
            <ul className='icons-hidden'>
                <li>
                    <a href="#!">
                        <i class="fa-solid fa-magnifying-glass"></i>                    </a>
                </li>
                <li>
                    <a href="#!">
                        <i class="fa-solid fa-cart-shopping"></i>                    </a>
                </li>
            </ul>
            <a className="navbar-brand-hidden" href="#!">
                <img src={logo} alt="" />
            </a>
            <ul className='navtab'>
                <li>
                    <a href="#!">Home</a>
                </li>
                <li>
                    <a href="#!">ABOUT</a>
                </li>
                <li>
                    <a href="#!">Shop</a>
                </li>
                <li>
                    <a href='#!'>Contact</a>
                </li>
            </ul>
            <a className="navbar-brand" href="#!">
                <img src={logo} alt="" />
            </a>
            <ul className='icons'>
                <li>
                    <a href="#!">
                        <i class="fa-solid fa-magnifying-glass"></i>                    </a>
                </li>
                <li>
                    <a href="#!">
                        <i class="fa-solid fa-cart-shopping"></i>                    </a>
                </li>
            </ul>
        </section>
    )
}
export default Header;