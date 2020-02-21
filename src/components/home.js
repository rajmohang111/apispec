import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './home.css';
import DocumentCard from './card';
import getAPISpecs from '../services/api';

function Home() {

  const [apiSpec, setapiSpec] = useState([]);


  useEffect(() => {
    getAPISpecs().then(data => {
      setapiSpec(data.api_spec)
    });
  }, []);

  return (
    <div className="main-container">
    <section className="card-container">
      {apiSpec && apiSpec.map(spec => (
        <div className="card-item">
          <DocumentCard spec={spec} />
        </div>
      ))}
    </section>
  </div>
  );
}

export default Home;
