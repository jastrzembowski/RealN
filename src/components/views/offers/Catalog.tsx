import React, { useState } from "react";
import data from "../../../data.json";
import "./catalog.scss";
import { Box, Pagination } from "@mui/material";
import SearchNameComponent from "./SearchNameComponent";
import CheckboxButtons from "./CheckboxButtons";
import { Link } from "react-router-dom";
import RadioButtonGroup from "./RadioButtonGroup";
export default function Catalog() {
  const [page, setPage] = useState(1);
  const type = ["Dom", "Mieszkanie", "Grunt"];
  const sortOptions = [
    { value: "name", label: "Alfabetycznie" },
    { value: "priceDesc", label: "Cena malejąco" },
    { value: "price", label: "Cena rosnąco" },
  ];

  
  return (
    <div className="catalog-flexbox">
      <div className="catalog-container">
        <div className="filters-box">
          <h1>Fitruj oferty</h1>
          <SearchNameComponent />
          <h3>Typ</h3>
          <CheckboxButtons items={type} onChange={() => console.log(type)} />
          <h3>Sortuj</h3>
          <RadioButtonGroup
            selectedValue={""}
            options={sortOptions}
            onChange={() => console.log(sortOptions)}
          />{" "}
        </div>
        <div className="catalog-box">
          {data.map((offer, i) => (
            <Box
              className="offer-line"
              key={i + offer.id}
              component={Link}
              to={`/catalog/${offer.id}`}
            >
              <h3>{offer.id}</h3>
              <p>{offer.title}</p>
              <h4>{offer.price}</h4>
              <img src={offer.img[0].url} alt={offer.subtitle} />
            </Box>
          ))}
          <Pagination
          onChange={()=>setPage(page)}
            size="large"
            style={{
              position: "relative",
              left: "40%",
              margin: "20px",
              width: "250px",
            }}
            page={page}
          />
        </div>
      </div>
    </div>
  );
}
