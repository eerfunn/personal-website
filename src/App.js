import './App.css';
import {NavBar} from './components/NavBar'
import {Main} from './components/Main'
import {Projects} from './components/Projects'
import {Footer} from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
