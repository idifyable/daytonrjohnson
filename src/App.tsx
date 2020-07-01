import React from 'react';
import './styles/base.css';
import './styles/site.css';
import './styles/mobile.css';
import { Home } from './screens/Home';
import { Projects } from './screens/Projects';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
