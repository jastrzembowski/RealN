import React, { useState } from "react";
import {Link} from "react-router-dom"
import logo from "../../images/logorealn.png";
import "./nav.scss";

const Nav = () => {
  const [isBuyActive, setIsBuyActive] = useState(false);
  return (
    <nav>
      <Link to="/"> <img src={logo} alt="logo"></img></Link>
      <ul className="nav-bar">
        <li>500-000-000</li>
        <li onMouseEnter={(e) => setIsBuyActive(true)}>Kup</li>
        {isBuyActive && (
          <div className="buy-drop" onMouseLeave={(e)=> setIsBuyActive(false)}>
            <h3 className="header1">Popularne</h3>
            <Link to="/house-nearby" className="buy-drop1">Szukaj domu</Link>
            <Link to="/home-nearby" className="buy-drop2">Szukaj mieszkania</Link>
            <Link to="/land-nearby" className="buy-drop3">Szukaj gruntu</Link>
            <h3 className="header2">Opcje kupna</h3>
            <Link to="/why-buy" className="buy-drop4">Kup z RealN</Link>
            <h3 className="header3">Środki na zakupy</h3>
            <Link to="/can-i-afford" className="buy-drop5">Sprawdź budżet</Link>
            <Link to="/guides" className="buy-drop6">Przewodnik kupna domu</Link>
            <Link to="/find-lender" className="buy-drop7">Szukaj agenta pożyczkowego</Link>
            <Link to="/find-agent" className="buy-drop8">Szukaj rzeczoznawcę nieruchomości</Link>
            <Link to="/find-events" className="buy-drop9">Szukaj warsztaty i eventy</Link>
            <Link to="/housing-market" className="buy-drop10">Przegląd rynku mieszkaniowego w Polsce</Link>
          </div>
        )}
        <li>Wynajem</li>
        <li>Kontakt</li>
        <ul className="nav-login-bar">
          <li>Zaloguj</li>
          <li>Zarejestruj</li>
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
