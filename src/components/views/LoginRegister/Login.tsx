import Dialog from "@mui/material/Dialog";
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import {  MdPerson } from "react-icons/md";
import "./loginregister.scss";
// import { toast } from "react-toastify";
import logo from "../../../images/logo2.jpg";
import { useAppDispatch } from "../../store/configureStore";
import { login } from './accountSlice';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPassword, setOpenPassword] = React.useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const {  logout, status } = useContext(AccountContext);

  const handleClickOpen = () => {
    setOpen(true);
    setError("noerror");
    navigate('/')
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



  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      console.log('Login failed', error);
    }
  };
//   async function handleSubmit(e: any) {
  
//     try {
//       const loggedInUser = await Parse.User.logIn(email, password);
//       alert(`Success! User ${loggedInUser.get('username')} has successfully signed in!`);
//       console.log("Logged in!", loggedInUser.get('username'));
//       try {
//         setError("");
//         setMessage("");
//         setLoading(true);
//         handleClose();
//         setMessage("Pomyślnie zalogowano!");
//         window.location.reload();
//         toast.success("Pomyślnie zalogowano!", { theme: "colored" });
//         navigate("/");
//       } catch (err:any){
//         console.log(err)
//       }
//       setLoading(false);
//   } catch (error: any) {
//       alert(`Error! ${error.message}`);
// //        err.message.includes("Incorrect") &&
//       setError("Nieprawidłowy email lub hasło");
//       toast.error("Sprawdź adres email lub hasło", { theme: "colored" });
//   }
//   }

  async function handleSubmitReset(e: any) {
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

  // async function handleLogout() {
  //   try {
  //     setError("");
  //     setMessage("Pomyślnie wylogowano!");
  //     navigate("/");
  //     window.location.reload();
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <>
      {/* {status ? (
        <li onClick={() => handleLogout()} className="desktop">
          <MdExitToApp style={{ marginRight: "5px" }} />
          Wyloguj się
        </li>
      ) : (
       
      )}

      {status ? (
        <li onClick={() => handleLogout()} className="small">
          <MdExitToApp />
        </li>
      ) : (
       
      )} */}
 <li onClick={handleClickOpen} className="desktop">
          <MdPerson style={{ marginRight: "5px" }} />
          Logowanie
        </li>
        <li onClick={handleClickOpen} className="small">
          <MdPerson />
        </li>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        sx={{ overflowX: "visible" }}
      >
        <div className="login-box">
          <img src={logo} alt="logo realn"/>
          <h2>Witamy!</h2>
          <p>Zaloguj się</p>
          {error && <h3 className="login-error">{error}</h3>}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              required
              type="email"
              id="fmail"
              placeholder="Wpisz swój adres email."
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>Hasło</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              placeholder="Wpisz swoje hasło"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button disabled={loading} type="submit">
              Zaloguj się
            </button>
            <div onClick={() => handlePasswordOpen()}>
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
          <form onSubmit={handleSubmitReset}>
            <label>Wpisz swój adres email</label>
            <input
              required
              type="email"
              id="fmail"
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {passError && <h3>{passError}</h3>}
            {message && <h3>{message}</h3>}
            <button disabled={loading} type="submit">
              Wyślij
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
