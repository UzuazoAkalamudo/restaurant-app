import CallToAction from './CallToAction'
import Specials from './Specials'

function Main({className, children}){
    return(
        <main className={className}>
            {children}
        </main>
    );
};

export default Main;