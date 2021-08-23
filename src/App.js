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

const allHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 2,
    name: "Staropolski",
    city: "Wrocław",
    price: "110 zł/doba",
    image: "",
  },
  {
    id: 3,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 4,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 5,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 6,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = (term) => {
    const newHotels = [...allHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: "set-hotels", hotels: newHotels });
  };

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
            <Header />
            <Menu />
            <Jumbo>
              <Searchbar onSearch={(term) => searchHandler(term)} />
            </Jumbo>
            <Switch>
              <Route exact={true} path="/" component={Home}></Route>
              <Route path="/hotele/:id" component={SingleHotel}></Route>
            </Switch>
            <Footer />
          </ReducerContext.Provider>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
