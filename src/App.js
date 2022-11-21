import logo from './logo.svg';
import './App.css';
import Stopwatch from './Componenets/Stopwatch';
import Timer from './Componenets/Timer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Componenets/Home';

function App() {
  return (
    <div>
      <Home></Home>
{/* <BrowserRouter>
<div className='side'>
<Link  className='navItem' to = "timer"> Timer</Link>
<Link className='navItem' to = "stopwatch"> StopWatch </Link>

</div>
<div className='main'>
<Routes>

<Route exact path='/' element= {<Home></Home>}/>

  <Route exact path='/timer' element= {<Timer></Timer>}/>
  <Route exact path='/stopwatch' element= {<Stopwatch></Stopwatch>} />
</Routes>

</div>
  

    
</BrowserRouter> */}

   {/* <Stopwatch></Stopwatch>
   <Timer></Timer> */}
    </div>
  );
}

export default App;
