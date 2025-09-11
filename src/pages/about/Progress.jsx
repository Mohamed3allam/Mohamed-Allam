import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const AnimatedCircularProgressbar = ({
  percentage,
  colour,
  iconUrl,
  size = 100,
}) => {
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const pct = cleanPercentage(percentage);

  useEffect(() => {
    let start = null;
    const duration = 1000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newPercentage = Math.min(pct * (progress / duration), pct);
      setDisplayedPercentage(newPercentage);

      if (progress < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [pct]);

  return (
    <div
      style={{ position: "relative", width: `${size}px`, height: `${size}px` }}
    >
      <CircularProgressbar
        value={displayedPercentage}
        styles={buildStyles({
          pathColor: colour,
          textColor: "white",
          trailColor: "lightgrey",
          textSize: "1.5em",
        })}
      />
      <img
        src={iconUrl}
        alt="icon"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${size * 0.4}px`,
          height: `${size * 0.4}px`,
          filter: "drop-shadow(0px 0px 3px white)",
        }}
      />
    </div>
  );
};

export default AnimatedCircularProgressbar;
