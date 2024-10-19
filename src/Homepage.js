import './Homepage.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function Homepage() {
  return (
    <div className="layout-container">
      <Header className="header"/>
      <Main className="main"/>
      <Footer className="footer"/>
    </div>
  );
}

export default Homepage;
