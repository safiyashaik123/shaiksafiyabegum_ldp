import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    console.log("✅ useEffect Executed");

    const timer = setInterval(() => {
      console.log("⏰ Timer Running");
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log(" Cleanup Function Executed");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h2>Digital Clock</h2>

      <h3>{time}</h3>
    </>
  );
}

export default DigitalClock;