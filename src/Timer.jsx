import React from 'react'

const Timer = () => {
    const [time, setTime] = React.useState(0)
    const [timeId, setTimeId] = React.useState(null)

    const start=()=>{
        if(timeId==null)
        {
            let id=setInterval(()=> {
                setTime((prev)=> prev+1)
            },1000)
    
            setTimeId(id)
        }
    }

    const pause=()=> {
        clearInterval(timeId)
    }

    const reset=()=> {
        clearInterval(timeId)
        setTime(0)
        setTimeId(null)
    }


  return (
    <div>
        <h2>Timer</h2>
        <div>
            <h1>{time}</h1>
        </div>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Timer