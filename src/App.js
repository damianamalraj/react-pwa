import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload your image pls</h1>
        <input
          type="file"
          id="imageFile"
          capture="user"
          accept="image/*"
        ></input>
      </header>
    </div>
  );
}

export default App;
