import './Homepage.css';
import CallToAction from './components/CallToAction'
import Specials from './components/Specials'
import Chicago from './components/Chicago';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function Homepage() {
  return (
    <div className="layout-container">
      <Header className="header"/>
      <Main className="main">
        <CallToAction/>
        <Specials/>
        <Chicago/>
      </Main>
      <Footer className="footer"/>
    </div>
  );
}

export default Homepage;
