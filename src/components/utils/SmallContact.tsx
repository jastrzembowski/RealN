import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./smallcotact.scss"

const SmallContact = () => {
    return (
        <article className="main-contact">
        <aside className="main-contact-text">
          <h1>Skontaktuj się z naszym agentem</h1>
          <p>
            Rozpocznij swoje poszukiwania od kontaktu z nami. Bez kosztów ani
            zobowiązań
          </p>
        </aside>
        <aside className="main-contact-input">
          <p>Gdzie szukasz nieruchomości?</p>
          <aside className="input-holder">
            <input
              type="text"
              placeholder="Miasto, adres, kod pocztowy"
            ></input>{" "}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="main-glass-icon"
            />
          </aside>
        </aside>
      </article>
    );
};

export default SmallContact;