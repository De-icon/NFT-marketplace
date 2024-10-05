
import React, { useState, useEffect } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';


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
      

      <div className=' flex flex-col space-y-4 p-6 bg-secondary rounded-2xl max-w-72'>
        <p>Auction ends in:</p>
        <div className=' flex space-x-3 items-start justify-center'>
          <div className=' flex flex-col space-y-3 items-center justify-center'>
            <h1 className=' font-WorkSans text-4xl font-bold'>{timeLeft.hours}</h1>
            <p className=' font-SpaceMono text-sm'>Hours</p>
          </div>
          <h1 className=' font-WorkSans text-4xl font-bold'>:</h1>
          <div className=' flex flex-col space-y-3 items-center justify-center'>
            <h1 className=' font-WorkSans text-4xl font-bold'>{timeLeft.minutes}</h1>
            <p className=' font-SpaceMono text-sm'>Minutes</p>
          </div>
          <h1 className=' font-WorkSans text-4xl font-bold'>:</h1>
          <div className=' flex flex-col space-y-3 items-center justify-center'>
            <h1 className=' font-WorkSans text-4xl font-bold'>{timeLeft.seconds}</h1>
            <p className=' font-SpaceMono text-sm'>Seconds</p>
          </div>

        </div>
        <AlertDialog>
            <AlertDialogTrigger type="submit" className=" w-full font-WorkSans bg-primary p-3 rounded-2xl flex items-center space-x-1 justify-center " >
                Place Bid
            </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>It just a demo App thanks for tring it out ❣️</AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default CountDown;
