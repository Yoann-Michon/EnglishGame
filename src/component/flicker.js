import React, { useState, useEffect } from 'react';

const WordFlicker = () => {
  const words = ['BRANDY FAMILY'];
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1 >= words.length ? 0 : prevI + 1));
          setOffset(0);
        }
      }

      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        setOffset((prevOffset) => (forwards ? prevOffset + 1 : prevOffset - 1));
      }

      setPart(newPart);
    }, speed);

    return () => clearInterval(interval);
  }, [forwards, i, offset, skipCount, words]);

  return <div className="word">{part}</div>;
};

export default WordFlicker;
