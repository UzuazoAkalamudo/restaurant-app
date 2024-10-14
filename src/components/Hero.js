import food from '../assets/restauranfood.jpg'
import ButtonLink from './ButtonLink';

function Hero(){
    return(
        <section>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <ButtonLink href="#">Reserve a table</ButtonLink>
            </div>
            <div>
                <img src={food} alt="Chef carrying tray of restaurant food"/>
            </div>

        </section>
    );

};

export default Hero;