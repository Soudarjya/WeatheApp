import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [first, setfirst] = useState('');
 
  // url=`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=1b6845fc3b26427c070e3df68a7a3e0f`;
  const handleChange=async(e)=>{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=1b6845fc3b26427c070e3df68a7a3e0f`
    let prom= await fetch(url);
    let ret=await prom.json();
    let re=ret.main.temp;
    let m=re-273.15;
    setfirst(`${m.toFixed(0)}°C`);
    if(m<10) ref.current.className='w-56  h-28 bg-slate-200 rounded-t-full mx-auto wave';
    else if(m>10&&m<20) ref.current.className='w-56 h-28 bg-slate-400 rounded-t-full mx-auto wave';
    if(m>20&&m<30) ref.current.className='w-56 h-28 bg-blue-500 rounded-t-full mx-auto wave';
    if(m>30&&m<40) ref.current.className='w-56 h-28 bg-yellow-500 rounded-t-full mx-auto wave';
    if(m>40) ref.current.className='w-56 h-28 bg-red-500 rounded-t-full mx-auto wave';
    }    catch(e){
      console.log('City not found');
      setfirst('');
      ref.current.className='';
    }
 
  }
  const ref = useRef();
  return (
    <div  className='min-h-64 w-72 text-center  mx-auto bg-blue-400 '>
      <h1>Weather App</h1>
      {/* Enter the Name of the city whose temperature you want */}
      <input type="text" placeholder='Enter the city' className='mt-4' onChange={handleChange}/>
      <div className='bg-slate-300 w-56 h-40 mx-auto m-4 text-5xl '>
     {first}
        <div ref={ref}></div>
        {/* <div className='w-56 h-24 bg-blue-500 rounded-t-full mx-auto wave'></div> */}
      </div>
    </div>
  )
}

export default App