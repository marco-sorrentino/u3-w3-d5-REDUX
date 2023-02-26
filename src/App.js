import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArtistPage from "./components/ArtistPage";
import Main from "./components/Main";
import Player from "./components/Player";
import TrackList from "./components/TrackList";
import VerticalSideBar from "./components/VerticalSidebar";
import SearchPage from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VerticalSideBar />
        <Player />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/album" element={<TrackList />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/search-page/:artistName" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
