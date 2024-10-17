import './ButtonLink.css'

function ButtonLink({href, children}){
    return(
        <a className='button' href={href}>{children}</a>
    );
}

export default ButtonLink;