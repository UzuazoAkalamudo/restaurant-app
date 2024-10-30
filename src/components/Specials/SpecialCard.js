import './SpecialCard.css'
import {Link} from "react-router-dom";

function SpecialCard({item}){
    return(
        <article className='card-container'>
            <img className ='card-image' src={item.image} alt="Menu special food"/>
            <div className="content-container">
                <h3 className='special-title'>{item.name}</h3>
                <p className='special-price'>{item.price}</p>
                <p className='special-description'>{item.description}</p>
                <Link className='special-order' to={item.orderLink}>Order a delivery</Link>
            </div>
        </article>
    );

};

export default SpecialCard;