import './Nav.css'
import logo from '../assets/Logo.svg'

function Nav(){
    return(
        <nav className='nav-bar'>
            <img src={logo} alt="Little Lemon logo"></img>
            <ul className='nav-list'>
                <li className='nav-item'><a href="#">Home</a></li>
                <li className='nav-item'><a href="#">About</a></li>
                <li className='nav-item'><a href="#">Menu</a></li>
                <li className='nav-item'><a href="#">Reservations</a></li>
                <li className='nav-item'><a href="#">Order Online</a></li>
                <li className='nav-item'><a href="#">Login</a></li>
            </ul>
        </nav>
    );
};


export default Nav;