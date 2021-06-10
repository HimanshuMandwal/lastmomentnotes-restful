import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AboutUsScreen from './components/screens/AboutUsScreen';
import Signup from './components/screens/Signup';
import Login from './components/screens/Login';

import './App.css';
import { Container } from '@material-ui/core';
import WhyUsScreen from './components/screens/WhyUsScreen';

function App() {
  return (
    <Router>
    
      <div className="App">
        <Switch>
          <Route exact path="/whyUs" component={WhyUsScreen}/>
          <Route exact path="/aboutUs" component={AboutUsScreen}/>
          <Route exact path="/signUp" component={Signup}/>
          <Route exact path="/logIn" component={Login}/>
        </Switch>
      </div>
    
    </Router>
    
  );
}

export default App;
