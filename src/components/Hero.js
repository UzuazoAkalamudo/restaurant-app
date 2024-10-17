import food from '../assets/restauranfood.jpg'
import ButtonLink from './ButtonLink';
import './Hero.css'

function Hero(){
    return(
        <section className='section-container'>
            <div className='text-button-container'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <ButtonLink href="#">Reserve a Table</ButtonLink>
            </div>
            <div className='image-container'>
                <img src={food} alt="Chef carrying tray of restaurant food"/>
            </div>

        </section>
    );

};

export default Hero;