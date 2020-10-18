import React from 'react';
import './styles/base.css';
import './styles/site.css';
import './styles/mobile.css';
import { Home } from './screens/Home';
import { Projects } from './screens/Projects';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GoogleAnalytics } from './helpers/GoogleAnalytics';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const googleAnalyticsID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID || '';

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
      <GoogleAnalytics analyticsId={googleAnalyticsID} />
    </Router>
  )
}

export default App
