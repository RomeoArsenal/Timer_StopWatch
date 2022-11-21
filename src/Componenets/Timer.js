import React, { useState } from 'react'
import Button from './Button'

function Timer() {

    const Intialtime = {
        hour: 0,
        min: 0,
        sec: 0,
        ms: 0
    } // let interval = 
    const [time, setTime] = useState(Intialtime)
    const [stop, setStop] = useState()


    function startTImerClosure() {
        let _time = { ...time }

        var _interval = setInterval(function stopwatchFunction() {

            _time = { ..._time, sec: _time.sec - 1 }

            if (_time.sec == -1) {
                _time = { ..._time, sec: 59, min: _time.min - 1 }
            }
            if (_time.min == -1) {
                _time = { ...time, sec: 59, min: 59, hour: _time.hour - 1 }
            }
            if (_time.hour == -1) {
                _time = { ...Intialtime }
                clearInterval(_interval)
            }

            setTime(_time)


        }
            , 1000)

        return _interval



    }

    function onStartClick() {
        document.getElementById("hh").innerHTML = ""
        let interval = startTImerClosure()
        setStop(interval)
    }
    return (
        <div className='App'>
            <h3>
                Timer
            </h3>
            <br />
            <h4>
                Hours  <input min="0" type="number" onChange={(e) => setTime({ ...time, hour: e.target.value })} name="hh" id="hh" />
                Minutes <input min="0" type="number" name="min" id="min" onChange={(e) => setTime({ ...time, min: e.target.value })} />
                Seconds  <input min="0" type="number" name="ss" id="ss" onChange={(e) => setTime({ ...time, sec: e.target.value })} />
                <br></br>
            </h4>
            <Button text="Start" onClick={onStartClick} />
            <Button text="Stop" type="secondary" onClick={() => clearInterval(stop)} />
            <Button text="Clear" type='info' onClick={() => {
                clearInterval(stop)
                setTime(Intialtime)
            }} />

            <h4>
                {`${time.hour} HH:
                ${time.min} MM:
                ${time.sec} SS
               ` }
            </h4>
        </div>
    )
}

export default Timer