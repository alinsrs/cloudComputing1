import logo from './logo1.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo1" />
        <p>
          Hello class!
        </p>
        <a
          className="App-link"
          href="https://netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to netlify
        </a>
      </header>
    </div>
  );
}

export default App;
