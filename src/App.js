import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeSreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { connect } from "react-redux";
import { restConnector } from "./services";
import { LOGIN } from "./redux/action/actionType";
import reduxAction from "./redux/action/action";
import NotFoundScreen from "./screens/notFound/NotFoundScreen";
import RegisterScreen from "./screens/registerScreen/RegisterScreen";
import ProductDetail from "./components/product/productDetail/ProductDetail";
//import AuthRoute from "./HOC/Auth";

const App = props => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const credentials = localStorage.getItem("account");
    if (accessToken) {
      restConnector.defaults.headers["Authorization"] = "Bearer " + accessToken;
      props.dispatch(reduxAction(LOGIN, JSON.parse(credentials)));
    }
  }, [props]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />

        <Route path="/products/:id" component={ProductDetail}/>
        <Route  component={HomeScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
