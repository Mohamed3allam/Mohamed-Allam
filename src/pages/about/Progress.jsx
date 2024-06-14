import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const AnimatedCircularProgressbar = ({ percentage, colour, iconUrl }) => {
    const [displayedPercentage, setDisplayedPercentage] = useState(0);
    const pct = cleanPercentage(percentage);

    useEffect(() => {
        let start = null;
        const duration = 1000; // animation duration in ms

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const newPercentage = Math.min(pct * (progress / duration), pct);
            setDisplayedPercentage(newPercentage);

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [pct]);

    return (
        <div style={{ position: 'relative', width: '100px', height: '100px' }}>
            <CircularProgressbar
                value={displayedPercentage}
                text={`${Math.round(displayedPercentage)}%`}
                styles={buildStyles({
                    pathColor: colour,
                    textColor: 'white',
                    trailColor: 'lightgrey',
                    textSize: '1.5em'
                })}
            />
            <img
                src={iconUrl}
                alt="icon"
                style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '40px',
                    height: '40px'
                }}
            />
        </div>
    );
};

export default AnimatedCircularProgressbar;
