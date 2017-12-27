import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-background">
      <div className="resume-header-1">
      <h1 className="home-1">Home</h1>
      <h1 className="about-1">About</h1>
      <h1 className="story-1">Story</h1>
      </div>
      <div className="resume-header-2">
      <div className="shelves">
      <div className="line">
      </div>
      <div className="line">
      </div>
      <div className="line">
      </div>
      </div>
      <div className="mini-header-half">
      <img height="50px" width="50px" src="http://cwg.usu.edu/images/site/twitter-icon.png" />
      <img height="50px" width="50px" src="http://www.csus.edu/nsm/pal/images/Facebook-Logo.png" />
      </div>
      </div>
      <div className="resume-title">
      <h1>Your</h1>
      <h2 className="resume-sub-title">Personal Portfolio</h2>
      </div>
      <div className="arrow-circle">
      <h1>🡓</h1>
      </div>
      </div>
    );
  }
}

export default App;
