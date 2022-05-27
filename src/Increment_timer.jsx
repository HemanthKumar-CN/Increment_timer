import React from 'react'

const Increment_timer = () => {
    const [timer, setTimer] = React.useState(0)
    const [value, setValue] = React.useState("");
    const [endTime, setEndTime] = React.useState("")

    React.useEffect(() => {
      let id=setInterval(()=> {
            setTimer((prev)=> prev+1)
      },1000)

      if(timer==endTime)
      {
          clearInterval(id)
      }
    
      return () => {
        clearInterval(id)
      }
    }, [timer])

    // console.log(timer,endTime,typeof endTime)

    function starting()
    {
        setTimer(Number(value))
        setEndTime(Number(endTime))
    }
    
  return (
    <div>
        <h1>Increment_timer</h1>
        <h1>{timer}</h1>

        <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} placeholder='Enter start time' /> {" "}
        : {" "}
        <input type="text" onChange={(e)=> setEndTime(e.target.value)} value={endTime} placeholder='Enter end time' />
        <br />
        <button onClick={starting}>Start</button>

        <button onClick={()=> {
            setTimer(0)
            setValue("")
            setEndTime("")


        }}>Reset</button>

    </div>
  )
}

export default Increment_timer