import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/header';
import DocumentCard from './components/card';
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
      <div className="main-container">
        <section className="card-container">
          {apiSpec && apiSpec.map(spec => (
            <div className="card-item">
              <DocumentCard spec={spec} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
