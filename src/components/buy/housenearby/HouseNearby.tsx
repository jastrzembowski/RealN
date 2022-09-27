import "./housenearby.scss";
import housebg from "../../../images/icons/buyhouse.png";
import EstateSlider from "../../utils/EstateSlider";
import { Link } from "react-router-dom";
const HouseNearby = () => {
  return (
    <>
      <header className="house-search-header">
        <article>
          <h1>Znajdź domy w okolicy</h1>
          <p>
            Znajdź odpowiedni dom w wybranej lokalizacji. Zobacz zdjęcia,
            przejrzyj informacje i sprawdź szczegóły pobliskich nieruchomości na
            sprzedaż.
          </p>
        </article>
        <img src={housebg} alt="buy house background"></img>
      </header>
      <article className="search-bar">
        <div className="search-location">
          <p>Lokalizacja</p>

          <input type="text" placeholder="Miasto, adres, kod pocztowy"></input>
        </div>
        <div className="search-price">
          <p>Zakres cenowy</p>
          <div className="price-box"> 
          <input type="number" placeholder="Cena minimalna"></input>
          <input type="number" placeholder="Cena maksymalna"></input>
        </div></div>
        <Link to ="/search">  <button type="button"> Szukaj</button></Link>
      </article>
      <article className="houses-container">
        <h1>Domy w Gdańsku</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>Domy w Gdyni</h1>
        <EstateSlider />
      </article>
      <article className="houses-container">
        <h1>Domy w Sopocie</h1>
        <EstateSlider />
      </article>
    </>
  );
};

export default HouseNearby;
