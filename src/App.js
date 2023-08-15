import { ThreeDRotationRounded } from '@material-ui/icons';
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Position from './components/position/Position';
import Secthree from './components/thirdSection/Secthree'
import Test from './components/sign/Test';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <Position />
    <About />
    <Secthree />
    <Test/>
    </div>
  );
}

export default App;
