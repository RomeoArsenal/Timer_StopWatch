import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Stopwatch from './Stopwatch'
import Timer from './Timer'

function Home() {
  const [component,setComponent] = useState(null) 
  return (
    <div className='App'>
<div>
<button onClick={()=>setComponent("stopwatch")} className=' btn btn-primary stopwatch'><span style={{"fontSize":"20px"}}>
  Stop Watch
  </span> 
  </button>
<button onClick={()=>setComponent("timer")} className='btn btn-primary timer'><span style={{"fontSize":"20px"}}>Timer</span></button>

</div>
  
  {component == "timer" &&<Timer></Timer>}
  {component == "stopwatch" &&<Stopwatch></Stopwatch>}

 </div>

    
  )
}

export default Home