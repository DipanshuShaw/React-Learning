import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Box from './components/box';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <p>
      <Greet></Greet>
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="React-Image"></img>
      <Box></Box>
      <nav>
        <ul>
          <li className='list'><a className='link'>Home</a></li>
          <li className='list'><a className='link'>About Us</a></li>
          <li className='list'><a className='link'>Blog</a></li>
          <li className='list'><a className='link'>Contact</a></li>
        </ul>
      </nav>
    </p>
  );
}

export default App;
