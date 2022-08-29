import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss"
import Nav from "./components/nav/Nav"
import Main from "./components/main/Main"
import HouseNearby from "../src/components/buy/housenearby/HouseNearby"
import HomeNearby from '../src/components/buy/homenearby/HomeNearby';
import LandNearby from "./components/buy/ladnnearby/LandNearby"
import WhyBuy from "./components/buy/whybuy/WhyBuy"
import CanIAfford from "./components/resources/caniafford/CanIAfford"
import BuyGuide from "./components/resources/buyguide/BuyGuide"
import FindLender from "./components/resources/findlender/FindLender"
import FindAgent from "./components/resources/findagent/FindAgent"
import FindEvents from "./components/resources/findevents/FindEvents"
import HouseMarket from "./components/resources/housemarket/HouseMarket"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/house-nearby" element={<HouseNearby/>}/>
          <Route path="/home-nearby" element={<HomeNearby/>}/>
          <Route path="/land-nearby" element={<LandNearby/>}/>
          <Route path="/why-buy" element={<WhyBuy/>}/>
          <Route path="/can-i-afford" element={<CanIAfford/>}/>
          <Route path="/buying-guide" element={<BuyGuide/>}/>
          <Route path='find-lender' element={<FindLender/>}/>
          <Route path="/find-agent" element={<FindAgent/>}/>
          <Route path="/find-events" element={<FindEvents/>}/>
          <Route path ="/housing-market" element={<HouseMarket/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
