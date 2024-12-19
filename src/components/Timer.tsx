import { useState, useEffect } from "react";
import moment from "moment";
import { WiTime10 } from "react-icons/wi";
const Timer = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <WiTime10 size={20} /> {currentTime.format("HH:mm DD-MM-YYYY")}
    </div>
  );
};

export default Timer;
