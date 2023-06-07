import { useEffect, useState } from "react";
import "./catalog.scss";
import { Box, Pagination } from "@mui/material";
import SearchNameComponent from "./SearchNameComponent";
import CheckboxButtons from "./CheckboxButtons";
import { Link } from "react-router-dom";
import RadioButtonGroup from "./RadioButtonGroup";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import {
  deleteOfferAsync,
  fetchOffersAsync,
  offersSelectors,
  setPageNumber,
} from "./catalogSlice";

export default function Catalog() {
  const catalog = useAppSelector(offersSelectors.selectAll);
  const { offersLoaded, dispPage, displayLimit, count } = useAppSelector(
    (state) => state.catalog
  );

  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(displayLimit);
  const type = ["Dom", "Mieszkanie", "Grunt"];
  const sortOptions = [
    { value: "name", label: "Alfabetycznie" },
    { value: "priceDesc", label: "Cena malejąco" },
    { value: "price", label: "Cena rosnąco" },
  ];
  useEffect(() => {
    if (!offersLoaded) dispatch(fetchOffersAsync({ dispPage, displayLimit }));
  }, [offersLoaded, dispatch, catalog, dispPage, displayLimit]);

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
          />
        </div>
        {catalog.length > 0 ? (
          <>
            {offersLoaded ? (
              <div className="catalog-box">
                {catalog.map((offer, i) => (
                  <Box
                    className="offer-line"
                    key={i + offer[0]}
                    component={Link}
                    to={`/catalog/${offer[0]}`}
                  >
                    <h3>{offer[0]}</h3>
                    <p>{offer[1].title}</p>
                    <h4>{offer[1].price}</h4>
                    <img src={offer[1].imageAsset.url} alt={offer.subtitle} />
                  </Box>
                ))}
                <Pagination
                  onChange={(e, page: number) => dispatch(setPageNumber(page))}
                  size="large"
                  style={{
                    position: "relative",
                    left: "40%",
                    margin: "20px",
                    width: "250px",
                  }}
                  page={dispPage}
                  count={Math.round(count / displayLimit)}
                />
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </>
        ) : (
          <div className="catalog-box">
            <h1>Brak ofert</h1>
          </div>
        )}
      </div>
    </div>
  );
}
