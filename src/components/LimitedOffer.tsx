import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const LimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <section className="py-8 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center bg-red-700 rounded-full px-8 py-4 text-white">
            <Clock className="w-6 h-6 mr-3 animate-pulse" />
            <div className="text-lg font-bold">
              <span className="text-yellow-300">🎁 OFERTA ESPECIAL</span>
              <span className="mx-3">-</span>
              <span>Somente hoje, {currentDate} 🎁</span>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <div className="bg-white rounded-lg p-3 text-red-600 font-bold">
              <div className="text-2xl">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs">HORAS</div>
            </div>
            <div className="text-white text-2xl">:</div>
            <div className="bg-white rounded-lg p-3 text-red-600 font-bold">
              <div className="text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs">MIN</div>
            </div>
            <div className="text-white text-2xl">:</div>
            <div className="bg-white rounded-lg p-3 text-red-600 font-bold">
              <div className="text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs">SEG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer;