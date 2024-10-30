import './Footer.css'
import logo from '../../assets/Logo.svg'
import {Link} from "react-router-dom";

function Footer(){
    return(
        <footer className="footer-container">
            <div className="item-container">
              <img className='nav-image' src={logo} alt="Little Lemon logo"></img>
            </div>
            <div className="item-container">
                <h3>Navigation</h3>
                <ul className="footer-list">
                    <li className='footer-list-item'><Link href="/home">Home</Link></li>
                    <li className='footer-list-item'><Link href="/about">About</Link></li>
                    <li className='footer-list-item'><Link href="/menu">Menu</Link></li>
                    <li className='footer-list-item'><Link href="/reservations">Reservations</Link></li>
                    <li className='footer-list-item'><Link href="/order-online">Order Online</Link></li>
                    <li className='footer-list-item'><Link href="/login">Login</Link></li>
                </ul>
            </div>
            <div className="item-container">
                <h3>Contact</h3>
                <ul className="footer-list">
                    <li className='footer-list-item'><p>352 Lemon Drive, LL</p></li>
                    <li className='footer-list-item'><p>+1-362-530-9210</p></li>
                    <li className='footer-list-item'><p>contact@littlelemon.com</p></li>
                </ul>
            </div>
            <div className="item-container">
                <h3>Social Media Links</h3>
                <ul className="footer-list">
                    <li className='footer-list-item'><a href="/">Facebook</a></li>
                    <li className='footer-list-item'><a href="/">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;