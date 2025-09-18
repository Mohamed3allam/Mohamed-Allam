// RouteContext.js
import { createContext, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
    const location = useLocation();
    const prevPath = useRef(null);

    useEffect(() => {
        prevPath.current = location.pathname;
    }, [location]);

    return (
        <RouteContext.Provider value={prevPath.current}>
            {children}
        </RouteContext.Provider>
    );
};

export const usePrevPath = () => useContext(RouteContext);
