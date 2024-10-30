import restaurant from '../../assets/restaurant.jpg'
import team from '../../assets/Mario and Adrian A.jpg'
import './Chicago.css'

const Chicago = () => {
    return(
        <section className='chicago-section'>
            <div className='chicago-text-container'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className='chicago-image-container'>
                <div className='chicago-image-item-1'>
                    <img className='first-image' src={restaurant} alt="Little lemon restaurant interiour"/>
                </div>
                <div className='chicago-image-item-2'>
                    <img className='second-image' src={team} alt="Chefs talking"/>
                </div>
            </div>
        </section>
    );
}

export default Chicago;