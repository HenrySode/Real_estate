import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Componies from "./components/Companies/Componies";
import Recidencies from "./components/Recidencies/Recidencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className="App">
    <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
    </div>
    <Componies/>
    <Recidencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
  </div>
  );
}

export default App;
