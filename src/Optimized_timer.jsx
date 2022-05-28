import React, {useRef} from 'react'

const Optimized_timer = () => {
    const [time, setTime] = React.useState(0)
    // const [timeId, setTimeId] = React.useState(null)
    const timeId = useRef(null) 

    const start=()=>{
        if(timeId.current==null)
        {
            let id=setInterval(()=> {
                setTime((prev)=> prev+1)
            },1000)
    
            // setTimeId(id)
            timeId.current=id;
        }
    }

    const pause=()=> {
        clearInterval(timeId.current)
        timeId.current=null;
    }

    const reset=()=> {
        clearInterval(timeId)
        setTime(0)
        // setTimeId(null)
        timeId.current=null;
    }
  return (
    <div>
        <h1>Optimized_timer</h1>

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

export default Optimized_timer