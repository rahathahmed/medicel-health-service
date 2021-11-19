import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Component/About/About";
import Details from "./Component/Details/Details";
import Freecampain from "./Component/FreeCampaine/FreeCampaine";

import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Register from "./Component/Register/Register";
import Services from "./Component/Services/Services";
import SingleService from "./Component/SingleService/SingleService";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/freecampaine">
              <Freecampain></Freecampain>
            </Route>

            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            
            <Route path="/about">
             <About></About>
            </Route>

            <PrivateRoute path="/singleService">
              <SingleService></SingleService>
            </PrivateRoute>

            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
