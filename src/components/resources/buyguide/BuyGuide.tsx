import { useState } from "react";
import { Link } from "react-router-dom";
import guide from "../../../images/icons/guide.png";
import costs from "../../../images/icons/costs.png";
import foreign from "../../../images/icons/foreign.png";
import steps from "../../../images/icons/steps.png";
import choose from "../../../images/icons/choose.png";

import "./buyguide.scss";

const BuyGuide = () => {
  const [isBuy, setIsBuy] = useState(true);

  return (
    <>
      <header className="guide-header">
        <aside>
          <h1>Twój kompletny przewodnik na zakup czy sprzedaż nieruchomości</h1>
          <p>
            Kupno bądź sprzedaż domu czy mieszkania może być stresujące, ale
            jesteśmy tutaj, aby pomóc. Agenci RealN wspólnie z Wami przejdą tę
            drogę, będą na każdym etapie tego procesu.
          </p>
        </aside>
        <img src={guide} alt="buy guide"></img>
      </header>
      <article className="guide-subject-choice">
        <p
          onClick={(e) => setIsBuy(true)}
          className={isBuy ? "choice-active" : " "}
        >
          Przewodnik zakupu nieruchomości
        </p>
        <p
          onClick={(e) => setIsBuy(false)}
          className={!isBuy ? "choice-active" : " "}
        >
          Przewodnik sprzedaży nieruchomości
        </p>
      </article>
      {isBuy && (
        <article className="buy-guide">
          <div className="box1">
            <Link to="/guides/how-to-buy-a-house">
              <img src={steps} alt="steps"></img>
              <h3>Jak kupić dom w 7 krokach</h3>
              <h4>Czytaj dalej</h4>
            </Link>{" "}
          </div>
          <div className="box2">
            <a href="https://www.biznes.gov.pl/pl/opisy-procedur/-/proc/209">
            <img src={foreign} alt="foreigner buy"></img>
            <h3>Jak kupić nieruchomość w Polsce nie będąc obywatelem Polski</h3>
            <h4>Czytaj dalej</h4></a>
          </div>
          <div className="box3">
            <Link to="/guides/how-to-choose-real-estate-agent">
              <img src={choose} alt="choose agent"></img>
              <h3>
                Jak wybrać agenta nieruchomości - Top 15 pytań, które należy
                zadać
              </h3>
              <h4>Czytaj dalej</h4>
            </Link>
          </div>
          <div className="box4">
            <Link to="/guides/real-estate-commision">
              <img src={costs} alt="agent costs"></img>
              <h3>O prowizji agenta nieruchomości</h3>
              <h4>Czytaj dalej</h4>
            </Link>
          </div>
        </article>
      )}
      {!isBuy && (
        <article className="buy-guide">
          <div className="box1">
            <img src={steps} alt="steps"></img>
            <h3>Jak sprzedać dom w 5 krokach</h3>
            <h4>Czytaj dalej</h4>
          </div>
          <div className="box2">
            <img src={foreign} alt="foreigner buy"></img>
            <h3>
              Jak sprzedać nieruchomość w Polsce nie będąc obywatelem Polski
            </h3>
            <h4>Czytaj dalej</h4>
          </div>
          <div className="box3">
            <img src={choose} alt="choose agent"></img>
            <h3>
              Jak wybrać agenta nieruchomości - Top 15 pytań, które należy zadać
            </h3>
            <h4>Czytaj dalej</h4>
          </div>
          <div className="box4">
            <img src={costs} alt="agent costs"></img>
            <h3>O prowizji agenta nieruchomości</h3>
            <h4>Czytaj dalej</h4>
          </div>
        </article>
      )}
    </>
  );
};

export default BuyGuide;
