import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import "./Slider.css";
import { useContext } from "react";
import Backbutton from "./Backbutton";
function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div className="setting-container"  style={{ textAlign: "left " }}>
      <label>Work: {settingsInfo.workMinutes} min/s.</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setworkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break: {settingsInfo.breakMinutes} min/s.</label>

      <ReactSlider
        className={"slider2"}
        thumbClassName={"thumb2"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setbreakMinutes(newValue)}
        min={1}
        max={120}
      />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Backbutton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}
export default Settings;
