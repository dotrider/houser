import React from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App2.css';
import routes from './routes';
// import {Link} from 'react-router-dom';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
    <div className="App">
    <Header />
    {/* <Link to ='/' className='links'>Dashboard</Link>
    <Link to ='/wizard' className='links'>Wizard</Link> */}
    </div>
    {routes}
    </div>
  );
}

export default App;
