import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bulma/css/bulma.css";

import ScrollToTop from "./utils/ScrollToTop";

import Home from "./pages/Home";
import SingleCoin from "./pages/SingleCoin";
import Prices from "./pages/Prices";
import Charts from "./pages/Charts";
import Mobile from "./pages/mobile";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import { StoreProvider } from "./utils/GlobalState";
import FavoriteCoins from "./pages/FavoriteCoins";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const pages = ["home", "prices", "charts", "dashboard", "favorites", "mobile"];

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Navbar pages={pages} />
            <Switch>
              <Route exact path="/">
                <ScrollToTop />
                <Home />
              </Route>

              <Route exact path="/prices">
                <ScrollToTop />
                <Prices />
              </Route>

              <Route exact path="/charts">
                <ScrollToTop />
                <Charts />
              </Route>

              <Route exact path="/login">
                <ScrollToTop />
                <Login />
              </Route>

              <Route exact path="/signup">
                <ScrollToTop />
                <Signup />
              </Route>

              <Route exact path="/coins/:id">
                <ScrollToTop />
                <SingleCoin />
              </Route>

              <Route exact path="/favorites">
                <ScrollToTop />
                <FavoriteCoins />
              </Route>

              <Route exact path="/mobile">
                <ScrollToTop />
                <Mobile />
              </Route>

              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
