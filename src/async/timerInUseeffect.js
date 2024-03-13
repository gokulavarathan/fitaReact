import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [timerData, setTimerData] = useState({
    timeoutData: null,
    intervalData: null,
  });

  useEffect(() => {
    // Immediate function
    const immediateData = 'Data from immediate function!';
    setTimerData((prevData) => ({ ...prevData, immediateData }));

    // setTimeout
    const timeoutId = setTimeout(() => {
      const timeoutData = 'Data from setTimeout!';
      setTimerData((prevData) => ({ ...prevData, timeoutData }));
    }, 2000);

    // setInterval
    const intervalId = setInterval(() => {
      const intervalData = 'Data from setInterval!';
      setTimerData((prevData) => ({ ...prevData, intervalData }));
    }, 3000);

    // Cleanup on component unmount
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <h1>Timer Component</h1>
      {timerData.immediateData && <p>Immediate Data: {timerData.immediateData}</p>}
      {timerData.timeoutData && <p>Timeout Data: {timerData.timeoutData}</p>}
      {timerData.intervalData && <p>Interval Data: {timerData.intervalData}</p>}
    </div>
  );
};

export default TimerComponent;
