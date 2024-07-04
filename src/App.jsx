
import './App.css'
import { Route , Switch} from "react-router-dom/cjs/react-router-dom.min";
import Welcome from './assets/components/Welcome/Welcome'
import Home from './assets/components/Home/Home'
import SignUp from "./assets/components/Signup/SignUp";
import { useState } from "react";

function App() {
  const initialForm = {
    isim: "",
    kullanici: "",
    personPhoto: "https://picsum.photos/200/305",
  };
  const [kullanici, setKullanici] = useState(initialForm);
  return (
    <Switch>
      <Route exact path="/">
        <Welcome kullanici={kullanici} />
      </Route>
      <Route path="/home">
        <Home kullanici={kullanici} />
      </Route>
      <Route path="/signup">
        <SignUp setKullanici={setKullanici} initialForm={initialForm} />
      </Route>
    </Switch>
  );
}

export default App
