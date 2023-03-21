import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './views/nav-bar'
import Banner from './views/banner'
import About from "./views/about"
import LatestUpload from './views/latest-upload';
import Recommendation from "./views/recommendation"
import Contact from './views/contact'
import Footer from './views/footer'

function App() {
  return (
    <div className="App">
      <>
        <nav>
          <Navbar/>
        </nav>

          <ParallaxProvider>
            <Banner/> 
            <About/>
            <LatestUpload/>
            <Recommendation/>
            <Contact/>
          </ParallaxProvider>

        <footer>
          <Footer/>
        </footer>
      </>
    </div>
  );
}

export default App;
