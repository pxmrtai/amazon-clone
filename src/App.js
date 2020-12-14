import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{},dispatch] = useStateValue()

  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     if(authUser){
      //if loggin or was loggin
      dispatch({
        type:'SET_USER',
        user: authUser
      })
     }else{
      dispatch({
        type:'SET_USER',
        user: null
      })
     }
   })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
