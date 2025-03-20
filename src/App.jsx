import "./App.css";

import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";

function App() {
  return <>
  
  <Navbar/>

  
  <Home/>

  <About/>

  <Projects/>
  </>;
}

export default App;
