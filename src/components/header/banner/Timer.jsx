import { useEffect, useState } from "react";

const Timer = () => {
  const initialDays = 6;
  const initialHours = 59;
  const initialMinutes = 59;
  const initialSeconds = 60;

  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  const resetTimer = () => {
    setDays(initialDays);
    setHours(initialHours);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
      } else {
        resetTimer();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days }}></span>
        </span>
        Days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours }}></span>
        </span>
        Hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        Min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        Sec
      </div>
    </div>
  );
};

export default Timer;
