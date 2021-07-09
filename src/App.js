import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The new meyerhoffer site is underconstraction.
        </p>
        <a
          className="App-link"
          href="https://meyerhoffer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Old website
        </a>
      </header>
    </div>
  );
}

export default App;
