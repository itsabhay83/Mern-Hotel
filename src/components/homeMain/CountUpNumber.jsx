import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const CountUpNumber = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(endValue, (progress / duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);

  return (
    <p className='font-bold text-xl sm:2xl md:3xl lg:4xl xl:text-5xl'>
      {Math.round(count)}
    </p>
  );
};

export default CountUpNumber;