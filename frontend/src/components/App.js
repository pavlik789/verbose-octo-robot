import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NotFound from '../pages/404';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Contacts from '../pages/Contacts';
import Main from '../pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/catalog'>
            <Catalog />
          </Route>
          <Route exact path='/contacts'>
            <Contacts />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;