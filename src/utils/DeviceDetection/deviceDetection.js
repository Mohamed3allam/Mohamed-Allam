// deviceDetection.js

const breakpoints = {
    mobileSmall: 480,
    mobileLarge: 767,
    tabletPortrait: 1024,
    tabletLandscape: 1280,
    desktopSmall: 1440,
    desktopLarge: 1441
};

const getDeviceType = () => {
    const width = window.innerWidth;

    if (width <= breakpoints.mobileSmall) {
        return 'mobileSmall';
    } else if (width > breakpoints.mobileSmall && width <= breakpoints.mobileLarge) {
        return 'mobileLarge';
    } else if (width > breakpoints.mobileLarge && width <= breakpoints.tabletPortrait) {
        return 'tabletPortrait';
    } else if (width > breakpoints.tabletPortrait && width <= breakpoints.tabletLandscape) {
        return 'tabletLandscape';
    } else if (width > breakpoints.tabletLandscape && width <= breakpoints.desktopSmall) {
        return 'desktopSmall';
    } else {
        return 'desktopLarge';
    }
};

const isMobile = () => {
    const deviceType = getDeviceType();
    return deviceType === 'mobileSmall' || deviceType === 'mobileLarge';
};

const isTablet = () => {
    const deviceType = getDeviceType();
    return deviceType === 'tabletPortrait' || deviceType === 'tabletLandscape';
};

const isDesktop = () => {
    const deviceType = getDeviceType();
    return deviceType === 'desktopSmall' || deviceType === 'desktopLarge';
};

export { getDeviceType, isMobile, isTablet, isDesktop };
