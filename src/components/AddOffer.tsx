import React, { useState } from "react";
import "./addoffer.scss";
import Loader from "./Loader";
import "../index.scss";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import theme from "./styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AddOffer() {
  const [type, setType] = React.useState("");
  const [rooms, setRooms] = React.useState("");
  const [floor, setFloor] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const sxStyle = {
    marginBottom: "8px",
    backgroundColor: "rgba(197, 197, 197, 0.8)",
    color: "rgba(79, 79, 79, 1)",
    "&:hover": {
      backgroundColor: "rgba(79, 79, 79, 1)",
      color: "white",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <article className="add-offer_box">
        <header>
          <h1>Dodaj swoją ofertę</h1>
        </header>
        <form>
          <article className="add-title">
            <h3>Tytuł Twojego ogłoszenia</h3>
            <p>
              Tytuł powinien zawierać maksymalnie 80 znaków, nie powinien
              zawierać adresu e-mail oraz numeru telefonu.
            </p>
            <TextField
              id="outlined-basic"
              label="Wpisz tytuł ogłoszenia"
              variant="outlined"
            />
          </article>
          <article>
            <h3>Podstawowe informacje </h3>
            <div className="flex-row">
              <FormControl style={{ width: "49%", margin: "5px" }}>
                <InputLabel id="type">Typ transakcji</InputLabel>
                <Select
                  labelId="type"
                  id="demo-simple-select"
                  value={type}
                  label="type"
                  onChange={handleChange}
                >
                  <MenuItem value={"sell"}>Sprzedaż</MenuItem>
                  <MenuItem value={"rent"}>Wynajem</MenuItem>
                  <MenuItem value={"other"}>inne</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Powierzchnia w m2"
                variant="outlined"
                style={{ width: "49%", margin: "5px" }}
              />
            </div>
            <h3>Lokalizacja</h3>
            <TextField
              id="outlined-basic"
              label="Miejscowość"
              variant="outlined"
              style={{ width: "49%", margin: "5px" }}
            />
            <TextField
              id="outlined-basic"
              label="Województwo"
              variant="outlined"
              style={{ width: "49%", margin: "5px" }}
            />
            <TextField
              id="outlined-basic"
              label="Dzielnica"
              style={{ width: "49%", margin: "5px" }}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Ulica"
              style={{ width: "49%", margin: "5px" }}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Numer budynku"
              style={{ width: "49%", margin: "5px" }}
              variant="outlined"
            />
          </article>

          <article>
            <h3>Galeria zdjęć</h3>
            <div className="img-box">
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!imageAsset ? (
                    <>
                      <label>
                        <div>
                          <MdCloudUpload
                            style={{ fontSize: "35px", color: "gray" }}
                          />
                          <p>Kliknij aby dodać zdjęcia</p>
                        </div>
                        <input
                          type="file"
                          name="uploadimage"
                          accept="image/*"
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="image-holder">
                        <img src={imageAsset} alt="uploaded image" />
                        <button type="button" className="delete-button">
                          <MdDelete style={{ color: "white" }} />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </article>
          <article>
            <h3>Dodatkowe informacje</h3>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Piętro</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={floor}
                label="Piętro"
                onChange={handleChange}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
                <MenuItem value={"8+"}>Więcej niż 7</MenuItem>*{" "}
              </Select>
            </FormControl>

            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type"> Liczba pokoi</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={rooms}
                label="type"
                onChange={handleChange}
              >
                <MenuItem value={"poddasze"}>Poddasze</MenuItem>
                <MenuItem value={"piwnica"}>Piwnica mieszkalna</MenuItem>
                <MenuItem value={"parter"}>Parter</MenuItem>
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
                <MenuItem value={"8"}>8</MenuItem>
                <MenuItem value={"8"}>9</MenuItem>
                <MenuItem value={"10"}>10</MenuItem>
                <MenuItem value={"11"}>11</MenuItem>
                <MenuItem value={"12"}>12</MenuItem>
                <MenuItem value={"13"}>13</MenuItem>
                <MenuItem value={"14"}>14</MenuItem>
                <MenuItem value={"15"}>15</MenuItem>
                <MenuItem value={"16"}>16</MenuItem>
                <MenuItem value={"17"}>17</MenuItem>
                <MenuItem value={"18"}>18</MenuItem>
                <MenuItem value={"19"}>19</MenuItem>
                <MenuItem value={"20"}>20</MenuItem>
                <MenuItem value={"21"}>21</MenuItem>
                <MenuItem value={"22"}>22</MenuItem>
                <MenuItem value={"23"}>23</MenuItem>
                <MenuItem value={"24"}>24</MenuItem>
                <MenuItem value={"25"}>25</MenuItem>
                <MenuItem value={"26"}>26</MenuItem>
                <MenuItem value={"27"}>27</MenuItem>
                <MenuItem value={"28"}>28</MenuItem>
                <MenuItem value={"29"}>29</MenuItem>
                <MenuItem value={"30"}>30</MenuItem>
                <MenuItem value={"30+"}>Powyżej 30</MenuItem>*{" "}
              </Select>
            </FormControl>

            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Stan</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={floor}
                label="Piętro"
                onChange={handleChange}
              >
                <MenuItem value={"wysoki-standard"}>Wysoki standard</MenuItem>
                <MenuItem value={"swiezo-po-remoncie"}>
                  Świeżo po remonce
                </MenuItem>
                <MenuItem value={"dobry"}>Dobry</MenuItem>
                <MenuItem value={"do-odswiezenia"}>Do odświeżenia</MenuItem>
                <MenuItem value={"do-remontu"}>Do remontu</MenuItem>
                <MenuItem value={"deweloperski"}>Stan deweloperski</MenuItem>
              </Select>
            </FormControl>

            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Parking</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={floor}
                label="Parking"
                onChange={handleChange}
              >
                <MenuItem value={"wysoki-standard"}>
                  Brak miejsca parkingowego
                </MenuItem>
                <MenuItem value={"swiezo-po-remoncie"}>
                  Przynależne na ulicy
                </MenuItem>
                <MenuItem value={"dobry"}>Parking strzeżony</MenuItem>
                <MenuItem value={"do-odswiezenia"}>W garażu</MenuItem>
                <MenuItem value={"do-remontu"}>Pod wiatą</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Stan</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={floor}
                label="Parking"
                onChange={handleChange}
              >
                <MenuItem value={"wysoki-standard"}>
                  Brak miejsca parkingowego
                </MenuItem>
                <MenuItem value={"swiezo-po-remoncie"}>
                  Przynależne na ulicy
                </MenuItem>
                <MenuItem value={"dobry"}>Parking strzeżony</MenuItem>
                <MenuItem value={"do-odswiezenia"}>W garażu</MenuItem>
                <MenuItem value={"do-remontu"}>Pod wiatą</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Typ zabudowy</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={type}
                label="Typ zabudowy"
                onChange={handleChange}
              >
                <MenuItem value={"blok"}>blok </MenuItem>
                <MenuItem value={"kamienica"}>kamienica </MenuItem>
                <MenuItem value={"wielorodzinny"}>
                  dom wielorodzinny / szeregowiec
                </MenuItem>
                <MenuItem value={"apartamentoweic"}>apartamentowiec</MenuItem>
                <MenuItem value={"loft"}>loft</MenuItem>
                <MenuItem value={"plomba"}>plomba</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Materiał budynku</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={type}
                label="Typ zabudowy"
                onChange={handleChange}
              >
                <MenuItem value={"beton"}>beton </MenuItem>
                <MenuItem value={"cegła"}>cegła </MenuItem>
                <MenuItem value={"pustak"}>pustak</MenuItem>
                <MenuItem value={"płyta"}>płyta</MenuItem>
                <MenuItem value={"ramah"}>rama H</MenuItem>
                <MenuItem value={"silikat"}>silikat</MenuItem>
                <MenuItem value={"kamien"}>kamień</MenuItem>
                <MenuItem value={"drewno"}>drweno</MenuItem>
                <MenuItem value={"stal"}>konstrukcja stalowa</MenuItem>
                <MenuItem value={"inne"}>inne</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Opłaty (czynsz administracyjny, media)"
              variant="outlined"
              style={{ width: "49%", margin: "5px" }}
            />
            <TextField
              id="outlined-basic"
              label="Rok budowy"
              variant="outlined"
              style={{ width: "49%", margin: "5px" }}
            />
            <p className="subtitle">Obiekty w pobliżu</p>
            <h3>Komunikacja</h3>
            <div>
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                autobus
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                tramwaj
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                trolejbus
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                kolej podmiejska
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                metro
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                PKP
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                PKS
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                lotnisko
              </Fab>
            </div>
            <h3>Edukacja</h3>
            <div>
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                żłobek
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                przedszkole
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                szkoła podstawowa
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                szkoła średnia{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                uczelnia{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                gimnazjum{" "}
              </Fab>{" "}
            </div>
            <h3>Zdrowie i uroda</h3>
            <div>
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                przychodnia / szpital
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                apteka
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                weterynarz
              </Fab>{" "}
            </div>
            <h3>Rekreacja</h3>
            <div>
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                basen
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                siłownia / fitness
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                plac zabaw{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                park{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                las
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                jezioro{" "}
              </Fab>{" "}
            </div>
            <h3>Pozostałe</h3>

            <div>
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                centrum handlowe{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                sklep{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                bazarek
              </Fab>{" "}
            </div>
            <h3>Udogodnienia</h3>
            <div>
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                winda
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                teren zamknięty{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                ochrona
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                recepcja
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                podjazd dla niepełnosprawnych{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                patio
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                domofon
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                wideofon
              </Fab>{" "}
            </div>
          </article>
          <article>
            {" "}
            <h3>Kuchnia</h3>
            <div className="flex-row">
              <FormControl style={{ width: "49%", margin: "5px" }}>
                <InputLabel id="type">Stan kuchni</InputLabel>
                <Select
                  labelId="type"
                  id="demo-simple-select"
                  value={type}
                  label="type"
                  onChange={handleChange}
                >
                  <MenuItem value={"bdobry"}>bardzo dobry</MenuItem>
                  <MenuItem value={"dobry"}>dobry</MenuItem>
                  <MenuItem value={"doodnowienia"}>do odnowienia</MenuItem>
                  <MenuItem value={"doremontu"}>do remontu</MenuItem>
                </Select>
              </FormControl>
              <div style={{ width: "49%", margin: "5px" }}>
                <p>Forma kuchni</p>
                <Fab
                  variant="extended"
                  size="medium"
                  sx={sxStyle}
                  aria-label="add"
                >
                  w aneksie
                </Fab>{" "}
                <Fab
                  variant="extended"
                  size="medium"
                  sx={sxStyle}
                  aria-label="add"
                >
                  oddzielna
                </Fab>{" "}
                <Fab
                  variant="extended"
                  size="medium"
                  sx={sxStyle}
                  aria-label="add"
                >
                  prześwit
                </Fab>{" "}
              </div>
            </div>
            <h3>Łazienka</h3>
            <div className="flex-row">
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Stan łazienki</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChange}
              >
                <MenuItem value={"bdobry"}>bardzo dobry</MenuItem>
                <MenuItem value={"dobry"}>dobry</MenuItem>
                <MenuItem value={"doodnowienia"}>do odnowienia</MenuItem>
                <MenuItem value={"doremontu"}>do remontu</MenuItem>
              </Select>
            </FormControl>
            <div style={{ width: "49%", margin: "5px" }}>
             
              <p>Forma / wyposażenie łazienki</p>
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                osobne WC{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                z oknem
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                wanna
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                prysznic{" "}
              </Fab>{" "}
              <Fab
                variant="extended"
                size="medium"
                sx={sxStyle}
                aria-label="add"
              >
                jacuzzi
              </Fab>{" "}
            </div></div>
            <h3>Wnętrze</h3>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Stan instalacji</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChange}
              >
                <MenuItem value={"bdobry"}>nowa</MenuItem>
                <MenuItem value={"dobry"}>po wymianie</MenuItem>
                <MenuItem value={"doodnowienia"}>częściowo wymieniona</MenuItem>
                <MenuItem value={"doremontu"}>do wymiany</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Głośność</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChange}
              >
                <MenuItem value={"bdobry"}>ciche</MenuItem>
                <MenuItem value={"dobry"}>umiarkowane ciche</MenuItem>
                <MenuItem value={"doodnowienia"}>umiarkowane głośne</MenuItem>
                <MenuItem value={"doremontu"}>głośne</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "49%", margin: "5px" }}>
              <InputLabel id="type">Okna</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChange}
              >
                <MenuItem value={"bdobry"}>drewniane</MenuItem>
                <MenuItem value={"dobry"}>platikowe / PCV</MenuItem>
                <MenuItem value={"doodnowienia"}>aluminiowe</MenuItem>
              </Select>
            </FormControl>
            <h3>Umeblowane</h3>
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              tak
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              nie
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              częściowo
            </Fab>{" "}
            <h3>Ogrzewanie</h3>
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              CO miejskie{" "}
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              CO własne{" "}
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              biomasa{" "}
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              podłogowe
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              geoterminka
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              klimatyzacja
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              kominkowe
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              słoneczne
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              węglowe
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              olejowe
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              elektryczne
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              gazowe{" "}
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              pompa ciepła
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              brak
            </Fab>{" "}
            <h3>Media</h3>
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              woda
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              prąd
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              siła
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              gaz
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              internet
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              telewizja kablowa
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              telefon
            </Fab>{" "}
            <h3>Usytuowanie względem stron świata</h3>
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              północne
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              południowe
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              wschodnie
            </Fab>{" "}
            <Fab variant="extended" size="medium" sx={sxStyle} aria-label="add">
              zachodnie
            </Fab>{" "}
          </article>
          <article>
            <h3>Opis</h3>
            <p>Opis powinien zawierać minimalnie 30 znaków</p>
            <textarea />
          </article>
        </form>
      </article>
    </ThemeProvider>
  );
}
