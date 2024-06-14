
import './App.css'
import { Route , Switch} from "react-router-dom/cjs/react-router-dom.min";
import Welcome from './assets/components/Welcome/Welcome'
import Home from './assets/components/Home/Home'
import SignUp from "./assets/components/Signup/SignUp";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default App
