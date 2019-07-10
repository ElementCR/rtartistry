import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Commission from './Commission';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home}/>
        <Switch>
          <Route path='/commission' component={Commission}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/gallery' component={Gallery}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
