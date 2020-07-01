import React from 'react';
import './styles/base.css';
import './styles/site.css';
import { Home as HomeScreen } from './screens/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
