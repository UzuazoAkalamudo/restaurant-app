import {Link} from "react-router-dom"
import './ButtonLink.css'

function ButtonLink({className, to, children}){
    return(
        <Link className={`button ${className}`} to={to}>{children}</Link>
    );
}

export default ButtonLink;