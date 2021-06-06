
import './App.css';
import Profile from "./components/views/profile";
import logo from "./assets/img/linktree-logo.png"
function App() {
  return (
    <div className="app">
      <Profile />

      <div className="footer">
        <img alt="logo" src={logo} />
      </div>
    </div>
  );
}

export default App;
