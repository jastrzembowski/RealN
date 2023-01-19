import Dialog from '@mui/material/Dialog';
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import "./loginregister.scss";

export default function Login() {

  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPassword, setOpenPassword] = React.useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePasswordOpen = () => {
    setOpenPassword(true);
  };

  const handlePasswordClose = () => {
    setOpenPassword(false);
  };

  async function handleSubmit(e:any) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      handleClose();
      setMessage("Pomyślnie zalogowano!");
      navigate("/");
    } catch {
      setError("Sprawdź adres email lub hasło");
    }
    setLoading(false);
  }
  async function handleSubmitReset(e:any) {
    e.preventDefault();

    try {
      setPassError("");
      setMessage("");
      setLoading(true);
      setMessage("Sprawdź swoją skrzynkę pocztową!");
    } catch {
      setPassError("Nie udało się zresetować hasła");
    }
    setLoading(false);
  }

  return (
    <>
      <li onClick={handleClickOpen}>
        <MdPerson style={{ marginRight: "5px" }} />
        Logowanie
      </li>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="login-box">
          <h2>Logowanie</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit} >
            <label>Email</label>
            <input
              required
              type="email"
              id="fmail"
              name="fmail"
            />
            <label>Hasło</label>
            <input
              required
              type="password"
              id="password"
              name="password"
            />
            <button
              disabled={loading}
              type="submit"
            >
              Zaloguj się
            </button>
            <div
             
              onClick={() => handlePasswordOpen()}
            >
             <p> Nie pamiętasz hasła? Kliknij tu!</p>
            </div>
          </form>
        </div>
      </Dialog>
      <Dialog
        open={openPassword}
        onClose={handlePasswordClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="reset-box">
          <h2>Resetuj hasło</h2>
          <form onSubmit={handleSubmitReset} >
            <label>Wpisz swój adres email</label>
            <input
              required
              type="email"
              id="fmail"
              name="fmail"
            />
            {passError && <Alert variant="danger">{passError}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <button
              disabled={loading}
              type="submit"
            >
              Wyślij
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
