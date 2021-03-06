import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact';
import Error404 from './components/ErrorPage/Error404/Error404';
import Login from './components/Login/Login/Login';
import Registration from './components/Registration/Registration';
import DashBoard from './components/Admin/Dashboard/DashBoard';
import AuthDataProvider from './Contexts/AuthDataProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderBookingReview from './components/OrderBookingReview/OrderBookingReview';
import EditOrder from './components/Admin/TourPackage/EditOrder/EditOrder';
import UserEditOrder from './components/Admin/TourPackage/MyOrder/EditOrder';

function App() {
  return (
    <div className="App">
      <AuthDataProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute exact path="/order-booking/:orderBookPackageId">
              <OrderBookingReview></OrderBookingReview>
            </PrivateRoute>
            <Route exact path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <Route exact path="/dashboard/booking-order/edit/:bookOrderId">
              <EditOrder></EditOrder>
            </Route>
            <PrivateRoute exact path="/dashboard/user-booking-order/edit/:bookOrderId">
                <UserEditOrder></UserEditOrder>
            </PrivateRoute>
            <Route path="*">
                <Error404></Error404>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthDataProvider>
    </div>
  );
}

export default App;
