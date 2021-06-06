
import './App.css';
import Profile from "./components/views/profile";
import logo from "./assets/img/linktree-logo.svg"
function App() {
  return (
    <div className="app">
      <Profile />

      <div className="footer">
        <img alt="logo" src={logo} height="120"/>
      </div>
    </div>
  );
}

export default App;
