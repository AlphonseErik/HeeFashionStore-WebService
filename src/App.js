import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/homeSreen";
import LoginScreen from "./screens/loginScreen/loginScreen";
import { connect } from "react-redux";
import { restConnector } from "./services";
import { LOGIN, AMOUNT_PRODUCT, GET_PRODUCT } from "./redux/action/actionType";
import reduxAction from "./redux/action/action";
import NotFoundScreen from "./screens/notFound/notFoundScreen";
import RegisterScreen from "./screens/registerScreen/registerScreen";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import CategoryDetail from "./components/category/categoryDetail/CategoryDetail";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Payment from "./components/payment/Payment";
import Header from "./layouts/header/header";

const App = props => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          // type: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(",")
        }
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const credentials = localStorage.getItem("account");
    if (accessToken) {
      restConnector.defaults.headers["Authorization"] = "Bearer " + accessToken;
      props.dispatch(reduxAction(LOGIN, JSON.parse(credentials)));
    }
    const product = localStorage.getItem("product");
    console.log("product", product);
    if (product) {
      props.dispatch(reduxAction(GET_PRODUCT, JSON.parse(product)));
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Typography
              component="div"
              style={{ backgroundColor: "#cfe8fc" }}
            />
            <Header />
            <Switch>
              <Route path="/home" exact component={HomeScreen} />
              <Route path="/login" exact component={LoginScreen} />
              <Route path="/register" exact component={RegisterScreen} />

              <Route
                path="/products/getbycategory/:categoryname"
                component={CategoryDetail}
              />
              <Route path="/products/:id" component={ProductDetail} />
              <Route path="/payments" component={Payment} />
              <Route component={HomeScreen} />
              <Route component={NotFoundScreen} />
            </Switch>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  amount: state.amount
});

export default connect(mapStateToProps)(App);
