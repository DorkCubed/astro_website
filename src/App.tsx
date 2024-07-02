import ClubPhoto from "./components/about-us/ClubPhoto"
import PortraitCollection from "./components/about-us/PortraitCollection";
import BottomBar from "./components/BottomBar";
import Nav from "./components/Nav";
import "./App.css"

function App() {
  return (
    <div className="bg-image">
      <Nav />
      <p className="title-text">ABOUT US</p>
      <ClubPhoto />
      <h1 className="gallery-title">EXECUTIVE COMITEE 24-25</h1>
      <PortraitCollection number={1} />
      <h1 className="gallery-title">EXTENDED EXECUTIVE COMITEE 24-25</h1>
      <PortraitCollection number={2} />
      <BottomBar />
    </div>
  );

}

export default App
