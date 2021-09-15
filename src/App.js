import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import Stack from "./Components/Stack";
import AboutMe from "./Components/AboutMe";


function App() {
  return (
    <BrowserRouter>
      <Nav/>
        <Switch>
          <Route path='/' exact>
            <HomePage  />
          </Route>
          <Route path='/projects' exact>
            <Projects/>
          </Route>
          <Route path='/stack' exact>
            <Stack/>
          </Route>
          <Route path='/about-me' exact>
            <AboutMe/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
