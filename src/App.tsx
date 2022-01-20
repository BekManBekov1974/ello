import { Switch, Route, Redirect, withRouter } from "react-router";
import { lazy } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
