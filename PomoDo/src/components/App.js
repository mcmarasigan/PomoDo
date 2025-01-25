import './Pomodoro.css';
import Settings from '../timercomponent/Settings';
import Timer from "../timercomponent/Time";
import React, { useState } from "react";
import SettingsContext from '../timercomponent/SettingsContext';



function App() {

  const [showSettings, setShowSettings ]= useState(false);
  const [workMinutes, setworkMinutes] = useState(45);
  const [breakMinutes, setbreakMinutes] = useState(15);

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
  );
}

export default App;
