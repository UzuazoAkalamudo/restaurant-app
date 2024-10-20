import './Footer.css'
import logo from '../assets/Logo.svg'

function Footer({className}){
    return(
        <footer className={className}>
          <div className="footer-container">
            <div className="item-container">
              <img className='nav-image' src={logo} alt="Little Lemon logo"></img>
            </div>
            <div className="item-container">
                <h3>Navigation</h3>
                <ul className="footer-list">
                    <li className='footer-list-item'><a href="#">Home</a></li>
                    <li className='footer-list-item'><a href="#">About</a></li>
                    <li className='footer-list-item'><a href="#">Menu</a></li>
                    <li className='footer-list-item'><a href="#">Reservations</a></li>
                    <li className='footer-list-item'><a href="#">Order Online</a></li>
                    <li className='footer-list-item'><a href="#">Login</a></li>
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
                    <li className='footer-list-item'><a href="#">Facebook</a></li>
                    <li className='footer-list-item'><a href="#">Instagram</a></li>
                </ul>
            </div>
          </div>
        </footer>
    );
};

export default Footer;