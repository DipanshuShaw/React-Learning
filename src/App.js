import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Box from './components/box';
import Message from './components/message';
import Incrementor from './components/incrementor';
import FunctionClick from './components/functionClick';
import ConditionalGreet from './components/ConditionalGreet';
import NameList from './components/ListRendering/nameList';
import Parent from './components/parentChild/Parent';
// import LoggedCheck from './components/LoggedCheck';
import Styling from './components/styling';
import Form from './components/Form';
import MainFn from './components/Fragement/MainFn';

function App() {
  // Box.defaultProps = {
  //   value: ["Jaya","Java","Jana","Jaka"]
  // }
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <p>

// {/* <Message /> */}

// {/* <Incrementor /> */}

// {/* <FunctionClick /> */}

// {/* <Parent /> */}

// {/* <LoggedCheck /> */}

// {/* <ConditionalGreet /> */}

// {/* <NameList /> */}

// {/* <Styling /> */}

//       {/* <Greet name="Dipanshu">
//         <div>
//           Have A Nice Expireince
//         </div>
//       </Greet> */}
//       {/* <Greet name=""></Greet> */}
//       {/* <Greet name=""></Greet> */}
//       {/* <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="React-Image"></img> */}
//       {/* <Box>

//       </Box> */}
//       {/* <nav>
//         <div className='heading'>New Project</div>
//         <ul>
//           <li className='list'><a className='link'>Home</a></li>
//           <li className='list'><a className='link'>About Us</a></li>
//           <li className='list'><a className='link'>Blog</a></li>
//           <li className='list'><a className='link'>Contact</a></li>
//         </ul>
//       </nav> */}
//     </p>
//   );

return(
  //other way to write react.Fragement
  <>
    <MainFn />
  </>
);

}

export default App;
