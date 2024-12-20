import food from '../../assets/restauranfood.jpg'
import ButtonLink from '../ButtonLink/ButtonLink';
import './CallToAction.css'

function CallToAction(){
    return(
        <section className='cta-section-container'>
            <div className='text-button-container'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <ButtonLink className="cta-button" to="/reservations">Reserve a Table</ButtonLink>
            </div>
            <div className='image-container'>
                <img src={food} alt="Chef carrying tray of restaurant food"/>
            </div>

        </section>
    );

};

export default CallToAction;