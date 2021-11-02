import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/Home/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Team from './Pages/Team/Team';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Clients from './Pages/Clients/Clients';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Firebase/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/Checkout/CheckOut';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/booking/:servicesId">
            <Booking></Booking>
          </PrivateRoute>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/register">
       <Register></Register>
          </Route>

          <Route path="/team">
            <Team></Team>
          </Route>

          <PrivateRoute exact path="/shop">
            <Shop></Shop>
          </PrivateRoute>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/calients">
            <Clients></Clients>
          </Route>

          <Route path="/checkout">
            <CheckOut></CheckOut>
          </Route>

          <Route path="**">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
