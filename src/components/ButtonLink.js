import './ButtonLink.css'

function ButtonLink({className, href, children}){
    return(
        <a className={`button ${className}`} href={href}>{children}</a>
    );
}

export default ButtonLink;