
import './App.css'
import { Route , Switch} from "react-router-dom/cjs/react-router-dom.min";
import Welcome from './assets/components/Welcome/Welcome'
import Home from './assets/components/Home/Home'
import Navigation from './assets/components/Home/LeftSideBar'
import RigthSideBar from './assets/components/Home/RigthSideBar'

function App() {
  

  return (
    
    <Switch>
    <Route exact path="/">
      <Welcome/>
    </Route>
    <Route path="/home">
      <Home/>
    </Route>
    </Switch>
    
  )
}

export default App
