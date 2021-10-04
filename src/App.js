import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
  import { ToastContainer } from "react-toastify";
import Navbar from './components/navbar';
import Home from './components/home';
import AddUser from './components/add';
import EditUser from './components/edit';
import ErrorPage from './components/error';


const App = () => {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route exact path="/404" component={ErrorPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
