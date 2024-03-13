import React, { useState } from 'react';

const TimerComponent = () => {


const startTimers = () => {

    // setTimeout
    // const timeoutId = setTimeout(() => {
    // console.log('Data from setTimeout!');
    // }, 1000);

    // // setInterval
    // const intervalId = setInterval(() => {
    //     console.log('Data from setInterval!');
    // }, 3000);
    // clearInterval(timeoutId)
    // clearTimeout(timeoutId)


setTimeout(() => {
        console.log('Data from setTimeout!');
}, 1000);
    
        // setInterval
    setInterval(() => {
            console.log('Data from setInterval!');
        }, 3000);
};


return (
    <div>
    <h1>Timer Component</h1>
    <button onClick={startTimers}>Start Timers</button>
    </div>
);
};

export default TimerComponent;
