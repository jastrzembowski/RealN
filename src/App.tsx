import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/utils/Footer";
import Nav2 from "./components/nav/Nav2";
import Main from "./components/main/Main";
import HouseNearby from "../src/components/buy/housenearby/HouseNearby";
import HomeNearby from "../src/components/buy/homenearby/HomeNearby";
import LandNearby from "./components/buy/ladnnearby/LandNearby";
import WhyBuy from "./components/buy/whybuy/WhyBuy";
import CanIAfford from "./components/resources/caniafford/CanIAfford";
import BuyGuide from "./components/resources/buyguide/BuyGuide";
import BuyInSteps from "./components/resources/buyguide/guides/BuyInSteps";
import FindLender from "./components/resources/findlender/FindLender";
import FindAgent from "./components/resources/findagent/FindAgent";
import FindEvents from "./components/resources/findevents/FindEvents";
import HouseMarket from "./components/resources/housemarket/HouseMarket";
import { useLocation } from "react-router-dom";

const App = () => {
  let nav;
  const location = useLocation();
  if (location.pathname === "/") {
    nav = <Nav />;
  }
  else if (location.pathname === "/why-buy") {
    nav = <Nav />;
  } else {
    nav = <Nav2 />;
  }

  return (
    <>
      {nav}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/house-nearby" element={<HouseNearby />} />
        <Route path="/home-nearby" element={<HomeNearby />} />
        <Route path="/land-nearby" element={<LandNearby />} />
        <Route path="/why-buy" element={<WhyBuy />} />
        <Route path="/can-i-afford" element={<CanIAfford />} />
        <Route path="/guides" element={<BuyGuide />} />
        <Route path="/guides/how-to-buy-a-house" element={<BuyInSteps/>}/>
        <Route path="find-lender" element={<FindLender />} />
        <Route path="/find-agent" element={<FindAgent />} />
        <Route path="/find-events" element={<FindEvents />} />
        <Route path="/housing-market" element={<HouseMarket />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
