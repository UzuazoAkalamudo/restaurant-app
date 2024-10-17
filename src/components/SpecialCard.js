import './SpecialCard.css'

function SpecialCard({item}){
    return(
        <article className='card-container'>
            <img className ='card-image' src={item.image} alt="Menu special food"/>
            <div className="content-container">
                <h3 className='special-title'>{item.name}</h3>
                <p className='special-price'>{item.price}</p>
                <p className='special-description'>{item.description}</p>
                <a className='special-order' href={item.orderLink}>Order a delivery</a>
            </div>
        </article>
    );

};

export default SpecialCard;