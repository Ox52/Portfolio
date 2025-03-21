import "./App.css";

import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return <>
  
  <Navbar/>

  
  <Home/>

  <About/>

  <Projects/>

  <Contact/>
  </>;
}

export default App;
