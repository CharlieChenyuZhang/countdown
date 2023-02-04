import "./App.css";
import Countdown from "./Countdown";

function App() {
  return (
    <>
      <Countdown
        timeTillDate="05 26 2019, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />

      <Countdown
        timeTillDate="05 26 2019, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />

      <Countdown
        timeTillDate="05 26 2019, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />
    </>
  );
}

export default App;
