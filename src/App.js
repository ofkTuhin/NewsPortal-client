import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AddTopNews from "./component/AddTopNews/AddTopNews";
import Category from "./component/Cartagory/Category";
import Home from "./component/Home/Home/Home";
import Navbar from "./component/NavBar/Navbar";
import NewsDetails from "./component/NewsDetails/NewsDetails";


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/addTopNews">
        <AddTopNews></AddTopNews>
      </Route>
      <Route path='/details/:_id'>
        <NewsDetails></NewsDetails>
      </Route>
      <Route path='/category/:category'>
        <Category></Category>
      </Route>
      <Route path='/'>
        <Home></Home>
      </Route>
        

      
      </Switch>
    </Router>
    </div>
  );
}

export default App;
