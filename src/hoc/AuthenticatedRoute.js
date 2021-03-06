import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ReducerContext from "../components/context/reducerContext";

export default function AuthenticatedRoute(props) {
  const context = useContext(ReducerContext);
  return context.state.user ? <Route {...props} /> : <Redirect to="/zaloguj" />;
}
