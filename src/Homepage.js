import './Homepage.css';
import CallToAction from './components/CallToAction'
import Specials from './components/Specials'
import Chicago from './components/Chicago';
import Main from './components/Main'

function Homepage() {
  return (
    <div className="layout-container">
      <Main className="main">
        <CallToAction/>
        <Specials/>
        <Chicago/>
      </Main>
    </div>
  );
}

export default Homepage;
