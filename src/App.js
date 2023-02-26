import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Player from "./components/Player";
import TrackList from "./components/TrackList";
import VerticalSideBar from "./components/VerticalSidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VerticalSideBar />
        <Player />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/album" element={<TrackList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
