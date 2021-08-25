import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Jumbo from "./components/Jumbo/Jumbo";
import Searchbar from "./components/Searchbar/Searchbar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./components/context/authContext";
import ReducerContext from "./components/context/reducerContext";
import { reducer, initialState } from "./reducer";
import Home from "./pages/Home/Home";
import SingleHotel from "./pages/SingleHotel/SingleHotel";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider
          value={{
            isAuthenticated: state.isAuthenticated,
            login: () => dispatch({ type: "login" }),
            logout: () => dispatch({ type: "logout" }),
          }}
        >
          <ReducerContext.Provider
            value={{
              state: state,
              dispatch: dispatch,
            }}
          >
            <Switch>
              <Route path="/hotele/:id">
                <Header />
                <Menu />
                <Search />
                <SingleHotel />
              </Route>
              <Route path="/wyszukaj/:term">
                <Header />
                <Menu />
                <Search />
              </Route>
              <Route path="/profil">
                <Header />
                <Menu />
                <Profile />
              </Route>
              <Route exact={true} path="/">
                <Header />
                <Menu />
                <Jumbo>
                  <Searchbar />
                </Jumbo>
                <Home />
                <Footer />
              </Route>
            </Switch>
          </ReducerContext.Provider>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
