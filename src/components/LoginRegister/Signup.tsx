import Dialog from '@mui/material/Dialog';
import React, {  useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdPersonAdd } from "react-icons/md";
import "./loginregister.scss";

export default function Signup() {
  const [error, setError] = useState("");
  // const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e:any) {
    e.preventDefault();

    try {
      setError("");
      // setMessage("");
      setLoading(true);
      handleClose();
      // setMessage("Pomyślnie założono konto!");
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <>
      <li onClick={handleClickOpen} >
        <MdPersonAdd style={{ marginRight: "5px" }} />
        Rejestracja
      </li>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="login-box register-box" >
          <h2>Rejestracja</h2>
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
            <label>Potwierdź hasło</label>
            <input
              required
              type="password"
              id="password-confirm"
              name="password-confirm"
            />
            <button
              disabled={loading}
     
              type="submit"
            >
              Zarejestruj się
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
