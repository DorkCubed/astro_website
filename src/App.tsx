import ClubPhoto from "./components/about-us/ClubPhoto"
import PortraitCollection from "./components/about-us/PortraitCollection";
import BottomBar from "./components/BottomBar";
import "./App.css"

function App() {
  return (
    <div className="bg-image">
      <p className="title-text">ABOUT US</p>
      <ClubPhoto />
      <h1 className="gallery-title">EXECUTIVE COMITEE 24-25</h1>
      <PortraitCollection />
      <BottomBar />
    </div>
  );

}

export default App
