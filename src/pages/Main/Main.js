import './Main.css';
import page1 from "../../assets/images/Page1.jpg";
import page2 from "../../assets/images/Page2.jpg";

function Main() {
  return (
    <div className="mainContainer">
      <img className="imageStyle" src={page1} alt="test1" />
      <img className="imageStyle" src={page2} alt="test2" />
    </div>
  );
}

export default Main;
