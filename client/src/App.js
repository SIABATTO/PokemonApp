import './App.css';
import { Landing, Home, Detail, Form } from "./views"
import { Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/home" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail/:id" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
