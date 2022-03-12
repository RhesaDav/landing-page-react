import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import App from "./App";
import PaketSatu from './component/PaketSatu'
import PaketDua from './component/PaketDua'
import PaketTiga from './component/PaketTiga'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/inet-phone' element={<PaketSatu/>}/>
        <Route path='/inet-tv' element={<PaketDua/>}/>
        <Route path='/inet-phone-tv' element={<PaketTiga/>}/>
      </Route>
    </Routes>
  </Router>, document.getElementById("root"));
