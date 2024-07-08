import Navbar from "./components/Navbar/Navbar";
import NewMovies from "./components/NevMovies/NewMovies";
import TopMovies from "./components/TopMovies/TopMovies";

function App() {
  return (
    <div
      style={{
        maxWidth: "1920px",
        margin: "auto",
      }}
    >
      <Navbar></Navbar>
      <div style={{ display: "block" }}>
        <TopMovies></TopMovies>
      </div>
      <div style={{ display: "block" }}>
        <NewMovies></NewMovies>
      </div>
    </div>
  );
}

export default App;
