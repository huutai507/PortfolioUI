import "./App.css";
import HomeNavBar from "./Components/Home/HomeNavBar/HomeNavBar";
import HomeAbout from "./Components/Home/HomeAbout/HomeAbout";
import HomeRecentPost from "./Components/Home/HomeRecentPost/HomeRecentPost";
import HomeFeature from "./Components/Home/HomeFeature/HomeFeature";
import HomeFooter from "./Components/Home/HomeFooter/HomeFooter";

function App() {
  return (
    <div className="App">
      <HomeNavBar />
      <HomeAbout />
      <HomeRecentPost />
      <HomeFeature />
      <HomeFooter />
    </div>
  );
}

export default App;
