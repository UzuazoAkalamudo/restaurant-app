import salad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import dessert from '../assets/lemon dessert.jpg';
import SpecialCard from './SpecialCard';
import ButtonLink from './ButtonLink';
import './Highlights.css'


function Highlights(){
    const specials = [
        {
            image: salad,
            name: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            orderLink: "#"
        },
        {
            image: bruchetta,
            name: "Bruchetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            orderLink: "#"
        },
        {
            image: dessert,
            name: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            orderLink: "#"
        }
    ];

    return(
        <section className='highlights-container'>
            <div className='header-container'>
                <h1>This weeks specials!</h1>
                <ButtonLink href="#">Online Menu</ButtonLink>
            </div>
            <div className='specials-container'>
                {specials.map((item, index) => (
                    <SpecialCard key={index} item={item}/>
                ))}
            </div>
        </section>
    );
};

export default Highlights;