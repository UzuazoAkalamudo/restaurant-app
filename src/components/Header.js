import Nav from './Nav'
import logo from '../assets/Logo.svg'

function Header(){
    return(
        <header>
            <img src={logo} alt="Little Lemon logo"></img>
            <Nav/>
        </header>
    );
};

export default Header;