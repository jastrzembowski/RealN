import "./App.css";
import Nav from "./components/views/nav/Nav";
import Footer from "./components/views/utils/Footer";
import Router from "./Routes"
import { Account } from "./components/Account";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'


// const PARSE_APPLICATION_ID = 'realn';
// const PARSE_HOST_URL = 'http://37.187.155.8:1337/parse/';
// const PARSE_JAVASCRIPT_KEY = 'realn';
// Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
// Parse.serverURL = PARSE_HOST_URL;


const App = () => {

  return (
    <>
      <Nav/>
      <ToastContainer/>
      <Router/>
      <Footer/>
    </>
  );
};

export default App;
