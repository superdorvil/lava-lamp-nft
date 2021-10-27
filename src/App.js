import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Home} from './screens';

//const { createCanvas, loadImage } = require("canvas"); // brew install pkg-config cairo pango libpng jpeg giflib librsvg
//const canvas = createCanvas(768, 768);
//canvas.toBuffer();

function App() {
  //return <div />;
  //return <div />;
  //console.log('We are finally home');
  return <Home />
/*  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );*/
}

export default App;
