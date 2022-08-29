import React from "react";
import SmallContact from "../../utils/SmallContact";
import "./whybuy.scss";
import mock from "../../../images/mock.png";
import getit from "../../../images/getit.jpg";
import pic2 from "../../../images/pic2.jpg";
import {Link} from "react-router-dom"

const whybuy = () => {
  return (
    <>
      <article className="whybuy-header"></article>

      <article className="whybuy-top-box">
        <h1>Dlaczego warto kupić właśnie u nas?</h1>
        <ul>
          <li>
            <p>Znajdź domy jako pierwszy, zwiedzaj domy szybko</p> Aktualizujemy
            oferty co 5 minut, więc możesz wyprzedzić innych kupujących poprzez
            natychmiastową rezerwację wycieczki z agentem RealN.
          </li>
          <li>
            <p> Lokalny agent RealN jako Twój przewodnik </p>Twój agent wie, co
            trzeba zrobić, aby napisać udaną ofertę tam, gdzie chcesz mieszkać –
            i nigdy nie będzie was naciskać na zakup domu, który nie jest
            odpowiedni.
          </li>
          <li>
            <p> Bez prowizji </p>Nie płacisz prowizji jako kupujący, ponieważ
            nasza technologia czyni nas bardziej efektywnymi.
          </li>{" "}
        </ul>
      </article>
      <SmallContact />

      <article className="whybuy-top-box">
        <h1>Jak to działa?</h1>
        <ul>
          <li>
            <p>Zwiedzanie domów na żądanie</p> Zwiedzanie za pośrednictwem
            naszej strony i aplikacji jest łatwe. Zapisz wyszukiwanie w swoich
            ulubionych dzielnicach, aby otrzymywać powiadomienia o nowych
            domach.
          </li>
          <li>
            <p>Spotkanie z agentem RealN </p>Twój agent dowie się więcej o Tobie
            i Twoich potrzebach oraz przygotuje plan napisania udanej oferty na
            Twój wymarzony dom.
          </li>
          <li>
            <p> Złóż ofertę i zamknij</p>Twój agent i jego zespół pomogą Ci w
            negocjacjach i przeprowadzą Cię przez proces zamknięcia, a następnie
            podpiszesz umowę online.
          </li>{" "}
        </ul>
      </article>
      <article className="mockup-holder">
        <img src={mock} alt="site mockup"></img>
        <aside>
          <h1>Zwiedzanie wybranego domu</h1>
          <p>
            Aktualizujemy oferty co 5 minut, więc możesz wyprzedzić innych
            kupujących, natychmiast umawiając się na wycieczkę z agentem RealN,
            osobiście lub przez wideo-czat.
          </p>
          <img src={getit} alt="store img"></img>
        </aside>
      </article>
      <article className="ready-holder">
        <img src={pic2} alt="home to buys"></img>
        <aside>
          <h1>Gotowy do sprzedaży swojego obecnego domu?</h1>
          <p>
            Dzięki spacerom 3D, wycieczkom wideo i cyfrowym kampaniom
            marketingowym agenci RealN sprawią, że Twój dom zabłyśnie w sieci.
            Dodatkowo, zapłacisz tylko 1% prowizji za wystawienie oferty, kiedy
            kupujesz i sprzedajesz z nami.
          </p>
          <Link to="/">Dowiedz się więcej</Link>
        </aside>
      </article>
    </>
  );
};

export default whybuy;
