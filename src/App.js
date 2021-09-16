import React, { useReducer, lazy, Suspense } from "react";
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
import useWebsiteTitle from "./hooks/useWebsiteTitle";
import SingleHotel from "./pages/SingleHotel/SingleHotel";
import Search from "./pages/Search/Search";
import NotFound from "./pages/404/404";
import Login from "./pages/Auth/Login/Login";
import AuthenticatedRoute from "./hoc/AuthenticatedRoute";
import AddHotel from "./pages/Profile/MyHotels/AddHotel/AddHotel";
import EditHotel from "./pages/Profile/MyHotels/EditHotel/EditHotel";
import Register from "./pages/Auth/Register/Register";

const Profile = lazy(() => import("./pages/Profile/Profile"));

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useWebsiteTitle("Strona Główna");

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider
          value={{
            user: state.user,
            login: (user) => dispatch({ type: "login", user }),
            logout: () => dispatch({ type: "logout" }),
          }}
        >
          <ReducerContext.Provider
            value={{
              state: state,
              dispatch: dispatch,
            }}
          >
            <Header />
            <Menu />
            <Suspense fallback={<p>Ładowanie...</p>}>
              <Switch>
                <AuthenticatedRoute
                  path="/profil/hotele/edytuj/:id"
                  component={EditHotel}
                />
                <AuthenticatedRoute
                  path="/profil/hotele/dodaj"
                  component={AddHotel}
                />

                <AuthenticatedRoute path="/profil" component={Profile} />
                <Route path="/hotele/:id" component={SingleHotel} />
                <Route path="/wyszukaj/:term?" component={Search} />
                <Route path="/zaloguj" component={Login} />
                <Route path="/zarejestruj" component={Register} />
                <Route exact={true} path="/">
                  <Jumbo>
                    <Searchbar />
                  </Jumbo>
                  <Home />
                </Route>
                <Route component={NotFound} />
              </Switch>
            </Suspense>
            <Footer />
          </ReducerContext.Provider>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
