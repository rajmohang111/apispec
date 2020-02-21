import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import DocumentCard from './components/card';
import Home from './components/home';

import getAPISpecs from './services/api';

function App() {

  const [apiSpec, setapiSpec] = useState([]);


  useEffect(() => {
    getAPISpecs().then(data => {
      setapiSpec(data.api_spec)
    });
  }, []);

  return (
    <div className="App">
      <Header />
         <Router>
        <Redirect exact from="/" to="/developer/documentation" />
        <Route path="/developer/documentation" exact  component={Home} />
        <Route path="/developer/en/api/:api/guide" component={DocumentCard} />
        <Route path="/developer/en/api/:api/intro" component={DocumentCard} />
        <Route path="/developer/en/api/:api/reference" component={DocumentCard} />
      </Router>
    </div>
  );
}

export default App;
