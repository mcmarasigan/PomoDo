import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Pausebutton from './Pausebutton';
import Playbutton from './Playbutton';
import Settingsbutton from './Settingsbutton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';
const work = '#e49d6f';
const rest = '#b35b22';

function Time (){
const settingsInfo = useContext(SettingsContext);

const [isPaused, setIsPaused] = useState(true);
const [mode,setMode] = useState('work'); // work/break/null
const [secondsLeft,setSecondsLeft] = useState(0);

const secondsLeftRef = useRef(secondsLeft);
const isPausedRef = useRef(isPaused);
const modeRef = useRef(mode);


function tick(){
    secondsLeftRef.current = secondsLeftRef.current -1;
    setSecondsLeft(secondsLeftRef.current);
}

useEffect(() => {

    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    },1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

const totalseconds = mode === 'work' 
? settingsInfo.workMinutes * 60 
: settingsInfo.breakMinutes * 60;
const percentage = Math.round(secondsLeft/totalseconds * 100 );

const minutes = Math.floor (secondsLeft / 60);
let seconds = secondsLeft % 60;
if(seconds < 10 ) seconds = '0' + seconds;

    return(

        <div> 

    <CircularProgressbar
     value={percentage} 
     text={minutes + ':' + seconds} 
     styles= {buildStyles({
        textColor:'#f4e3e0',
        pathColor:mode === 'work' ? work : rest,
        trailColor: 'rgba(255,255,255,.2)',

    })} />


    <div style={{marginTop:'20px'}}>
    {isPaused
        ? <Playbutton onClick = {() => { setIsPaused(false); isPausedRef.current = false; }} />
        : <Pausebutton onClick = { () => { setIsPaused(true); isPausedRef.current = true; }} />}
    </div>

    <div style={{marginTop:'20px'}}>
    <Settingsbutton onClick={()=>settingsInfo.setShowSettings(true)} />
    </div>
        </div>
    );
       
    
}
export default Time;