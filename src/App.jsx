import { useState,useEffect} from 'react'

import './App.css'


function App() {
  const [time,setTime] = useState(0)
  const [timeon,setTimeOn] = useState(false)
  useEffect(()=>{
    let interval=null;
    if(timeon){
      interval=setInterval(()=>{
        setTime(prevTime=>prevTime+10)
      },10)
    }else{
      clearInterval(interval)
    }
    return()=>clearInterval(interval)

  },[timeon])

  return (
    <div className='flex items-center justify-center'>
      <div className='my-36'>
        <div className='text-9xl'>
          <span>{('0'+Math.floor((time/60000)%60)).slice(-2)}:</span>
          <span>{('0'+Math.floor((time/1000)%60)).slice(-2)}:</span>
          <span>{('0'+((time/10)%100)).slice(-2)}</span>
        </div>
        <div className='my-6'>
          {!timeon && time===0 &&(
            <button className='px-4 bg-green-500 rounded-3xl text-4xl py-1 mx-2' onClick={()=>setTimeOn(true)}>Start</button>
          )}
          {timeon && (
            <button className='px-4 bg-red-500 rounded-3xl text-4xl py-1 mx-2' onClick={()=>setTimeOn(false)}>Stop</button>
          )}
          {!timeon && time !==0 &&(
             <button className='px-4 bg-black rounded-3xl text-4xl py-1 mx-2 text-white' 
             onClick={()=>setTimeOn(true)}>Resume</button>
          )}
          {!timeon && time>0 &&(
          <button
          className='px-4 bg-yellow-500 rounded-3xl text-4xl py-1 mx-2'  onClick={()=>setTime(0)}>Reset</button>
          )}
          
        </div>
        </div>
    </div>
  )
}

export default App
