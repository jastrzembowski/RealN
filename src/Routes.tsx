import { Routes, Route } from "react-router-dom";
import Main from "./components/views/main/Main";
import HouseNearby from "./components/views/buy/housenearby/HouseNearby";
import HomeNearby from "./components/views/buy/homenearby/HomeNearby";
import LandNearby from "./components/views/buy/ladnnearby/LandNearby";
import WhyBuy from "./components/views/buy/whybuy/WhyBuy";
import CanIAfford from "./components/views/resources/caniafford/CanIAfford";
import BuyGuide from "./components/views/resources/buyguide/BuyGuide";
import BuyInSteps from "./components/views/resources/buyguide/guides/BuyInSteps";
import ChooseAgent from "./components/views/resources/buyguide/guides/ChooseAgent";
import Commision from "./components/views/resources/buyguide/guides/Commision";
import FindServices from "./components/views/resources/findservices/FindServices";
import FindEvents from "./components/views/resources/findevents/FindEvents";
import HouseMarket from "./components/views/resources/housemarket/HouseMarket";
// import SellHouse from "./components/views/sell/sellhouse/SellHouse";
import SellWorth from "./components/views/sell/sellworth/SellWorth";
import SellDashboard from "./components/views/sell/selldashboard/SellDashboard";
import PayOff from "./components/views/sell/payoff/Payoff";
import SellGuide from "./components/views/sell/sellguide/SellGuide";
import HomeImprovement from "./components/views/sell/homeimprovement/HomeImprovement";
import RentGuide from "./components/views/rent/rentguide/RentGuide";
import BuyOrRent from "./components/views/rent/buyorrent/BuyOrRent";
import RentTrends from "./components/views/rent/renttrends/RentTrends";
import TipsForRenters from "./components/views/rent/tipsforrenters/TipsForRenters";
import Contact from "./components/views/utils/Contact";
import Searchpage from "./components/views/buy/searchpage/Searchpage";
import PropertyDetails from "./components/views/buy/propertyDetails/PropertyDetails";
import UpcomingEvents from "./components/views/resources/findevents/upcomingevents/UpcomingEvents";
import AddOffer from "./components/views/AddOffer/AddOffer";
import Catalog from "./components/views/offers/Catalog";
import CatalogEdit from "./components/views/offers/CatalogEdit";
import HomeValue from "./components/views/sell/sellworth/HomeValue";
import FiveWays from "./components/views/sell/sellworth/FiveWays";
import TenAdvices from "./components/views/sell/sellworth/TenAdvices";
import SellWith from "./components/views/sell/sellwithrealn/SellWith";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add-new-offer" element={<AddOffer />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<CatalogEdit />} />
      <Route path="/search/:id" element={<PropertyDetails />} />
      <Route path="/house-nearby" element={<HouseNearby />} />
      <Route path="/home-nearby" element={<HomeNearby />} />
      <Route path="/land-nearby" element={<LandNearby />} />
      <Route path="/why-buy" element={<WhyBuy />} />
      <Route path="/can-i-afford" element={<CanIAfford />} />
      <Route path="/guides/:isBuyProps" element={<BuyGuide />} />
      <Route path="/guides/how-to-buy-a-house" element={<BuyInSteps />} />
      <Route
        path="/guides/how-to-choose-real-estate-agent"
        element={<ChooseAgent />}
      />
      <Route path="/guides/real-estate-commision" element={<Commision />} />
      <Route path="find-services" element={<FindServices />} />
      <Route path="/find-events" element={<FindEvents />} />
      <Route path="/housing-market" element={<HouseMarket />} />
      <Route path="/search" element={<Searchpage />} />
      <Route path="/sell" element={<SellWith />} />
      <Route path="/upcoming-events" element={<UpcomingEvents />}></Route>
      <Route path="/sell/how-much-is-it-worth" element={<SellWorth />} />
      <Route path="/sell/how-much-is-it-worth/find-the-value" element={<HomeValue />} />
      <Route path="/sell/how-much-is-it-worth/five-ways" element={<FiveWays />} />
      <Route path="/sell/how-much-is-it-worth/ten-advices" element={<TenAdvices />} />
      <Route path="/sell/dashboard" element={<SellDashboard />} />
      <Route path="/guides/will-selling-pay-off" element={<PayOff />} />
      <Route path="/guide/how-to-sell-a-house" element={<SellGuide />} />
      <Route path="/guides/home-improvement" element={<HomeImprovement />} />
      <Route path="/guides/how-to-rent-a-house" element={<RentGuide />} />
      <Route path="/guides/buy-or-rent" element={<BuyOrRent />} />
      <Route path="/guides/rent-trends" element={<RentTrends />} />
      <Route path="/guides/tips-for-renters" element={<TipsForRenters />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
