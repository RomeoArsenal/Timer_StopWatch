import React, { useState } from 'react'

function Stopwatch() {

    const Intialtime = {
        hour:0,
        min:0,
        sec:0,
        ms:0
      } // let interval = 
    const [time,setTime]= useState(Intialtime)
    const[stop,setStop]= useState()

 

  function startWatchClosure()
{
    let _time = {...time}

   var _interval = setInterval(function stopwatchFunction ()
   {
       _time = {..._time,ms:_time.ms+1}
      
       if(_time.ms == 100)
       {
           _time = {..._time,sec:_time.sec+1,ms:0}
       }
    //    if(_time.ms == 1000)
    //    {
    //        _time = {..._time,sec:_time.sec+1,ms:0}
    //    }
       if(_time.sec == 60)
       {
           _time = {..._time,min:_time.min+1,sec:0}
       }
       if(_time.min == 60)
       {
           _time = {..._time,hour:_time.hour+1,min:0}
       }
       setTime(_time)
       
   }
   ,10)
  
return _interval



}
function startWatch()
{
    let intervalStopwatch = startWatchClosure()
    setStop(intervalStopwatch)
}
    return (
    <div className='App'>
        <h3>
            Stopwatch
            </h3>
            <br></br>
            <h4>
                {`${time.hour} HH:
                ${time.min} MM:
                ${time.sec} SS:
                ${time.ms} MS` }
            </h4>

        <button className='customButton btn btn-primary' onClick={()=>startWatch()}> Start</button>
        {<button className='customButton btn btn-secondary' onClick={()=>{clearInterval(stop)  }}
        > Stop</button>}
       {<button className='customButton btn btn-info' onClick={()=>{
        clearInterval(stop) 
        setTime(Intialtime)
        } }
        > Clear</button>}
    </div>
  )
}

export default Stopwatch