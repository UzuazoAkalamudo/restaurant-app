import './Homepage.css';
import CallToAction from './components/CallToAction'
import Specials from './components/Specials'
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
      </Main>
      <Footer className="footer"/>
    </div>
  );
}

export default Homepage;
