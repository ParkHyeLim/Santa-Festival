import logo from './logo.svg';
import './App.css';
import page1 from "./images/TEST1.JPG";
import page2 from "./images/TEST2.JPG";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <img className="imageStyle" src={page1} alt="test1" />
        <img className="imageStyle" src={page2} alt="test2" />
      </div>
    </div>
  );
}

export default App;
