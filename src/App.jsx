import './App.css'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';

function App() {


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Header />
          </Route> 
          <Route path="/search">
            <SearchPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
