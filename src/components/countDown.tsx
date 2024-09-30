
import React, { useState, useEffect } from 'react';

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
      const difference = endOfYear.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2>Time Left Until Next Year</h2>
      <div className="countdown-values">
        <span>{timeLeft.days} days</span>
        <span>{timeLeft.hours} hours</span>
        <span>{timeLeft.minutes} minutes</span>
        <span>{timeLeft.seconds} seconds</span>
      </div>
    </div>
  );
};

export default CountDown;
