
import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Home from './Home/Home';
import Véhicule from './Véhicule/Véhicule';
import Service from './Service/Service';
import Store from './Store/Store';
import Subsicribe from './Subsicribe/Subsicribe';
import Review from './Review/Review';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Véhicule />
     <Service />
     <Store />
     <Subsicribe />
     <Review />
     <Contact />
     <Footer />
     <Login />
    </div>
  );
}

export default App;
