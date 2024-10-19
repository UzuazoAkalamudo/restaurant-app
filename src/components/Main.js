import CallToAction from './CallToAction'
import Specials from './Specials'

function Main({className}){
    return(
        <main className={className}>
            <CallToAction/>
            <Specials/>
        </main>
    );
};


export default Main;