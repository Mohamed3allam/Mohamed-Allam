import React, { useEffect, useState } from 'react';
import { isMobile, isTablet, isDesktop } from './deviceDetection';

const DeviceDetector = () => {
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        const updateDeviceType = () => {
            if (isMobile()) {
                setDeviceType('Mobile');
            } else if (isTablet()) {
                setDeviceType('Tablet');
            } else if (isDesktop()) {
                setDeviceType('Desktop');
            }
        };

        updateDeviceType();

        window.addEventListener('resize', updateDeviceType);

        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    return (
        <div>
            <h1>Current Device: {deviceType}</h1>
            {isMobile() && <p>This is a mobile device.</p>}
            {isTablet() && <p>This is a tablet device.</p>}
            {isDesktop() && <p>This is a desktop device.</p>}
        </div>
    );
};

export default DeviceDetector;
