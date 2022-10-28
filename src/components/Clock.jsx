import { useState, useEffect } from 'react';
import "./clock.css"




function Clock({todaysDate}) {
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
    <div className='clock_data'>
    
     <div>
     <h3>{todaysDate}</h3>
    
   </div>
    <span>
      {date.toLocaleTimeString()}
    </span>
   </div>
   </>
  );
}
export default Clock;