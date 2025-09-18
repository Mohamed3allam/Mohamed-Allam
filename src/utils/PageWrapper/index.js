// PageWrapper.jsx
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { usePrevPath } from "../RouteTracker";

const routeOrder = ["/", "/about", "/portfolio", "/contact"];

const PageWrapper = ({ children }) => {
    const location = useLocation();
    const prevPath = usePrevPath();

    const currentIndex = routeOrder.indexOf(location.pathname);
    const prevIndex = routeOrder.indexOf(prevPath);

    let isForward = true;
    if (prevIndex !== -1 && currentIndex !== -1) {
        isForward = currentIndex > prevIndex;
    }

    const initial = isForward
        ? { opacity: 0, scale: 0.8 }
        : { opacity: 0, scale: 1.2 };

    // Exiting animations
    const exit = isForward
        ? { opacity: 0, scale: 1.2 }
        : { opacity: 0, scale: 0.8 };

    return (
        <motion.div
            key={location.pathname}
            initial={initial}
            animate={{ opacity: 1, scale: 1 }}
            exit={exit}
            transition={{ duration: 0.3, delay: 0, ease: "linear" }}
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
