import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav1';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Carousel } from 'bootstrap';
import SignUp from './components/signup';


function App() {
  const navStyle={
    color:'white'
  }
  return (
    <Router>
    <div className="page-container">
      <div className="content-wrap">
      <Nav1 />
      <Switch>
        
      <Route path="/" exact  component={Home} />
      <Route path="/home" exact  component={Home} />
      <Route path="/signup"  component={SignUp} />
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}



export default App;
