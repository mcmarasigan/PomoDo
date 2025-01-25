import Settings from '../timercomponent/Settings';
import Timer from "./Timer";
import React, { useState, useEffect } from "react";
import SettingsContext from '../timercomponent/SettingsContext';
import '../css/Pomodoro.css';



export default function Pomodoro() {
    const [showSettings, setShowSettings ]= useState(false);
    const [workMinutes, setworkMinutes] = useState(JSON.parse(localStorage.getItem('workMinutes')) ?? 25,);
    const [breakMinutes, setbreakMinutes] = useState(JSON.parse(localStorage.getItem('breakMinutes')) ?? 15,);
    
    useEffect(() => {
      localStorage.setItem('workMinutes', JSON.stringify(workMinutes));
    }, [workMinutes]);
    
    useEffect(() => {
      localStorage.setItem('breakMinutes', JSON.stringify(breakMinutes));
    }, [breakMinutes]);
  return (
    <main>
    <SettingsContext.Provider value={{
      showSettings,
      setShowSettings,
      workMinutes,
      breakMinutes,
      setworkMinutes,
      setbreakMinutes
    }}>
   
    {showSettings ? <Settings/> :   <Timer/>}

    </SettingsContext.Provider>

    </main>
  )
}