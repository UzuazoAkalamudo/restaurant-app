
function SpecialCard({item}){
    return(
        <article>
            <img src={item.image} alt="Menu special food"/>
            <div>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
                <p>{item.description}</p>
                <a href={item.orderLink}>Order a delivery</a>
            </div>
        </article>
    );

};

export default SpecialCard;