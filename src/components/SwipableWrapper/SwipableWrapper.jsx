import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';

const SwipeableWrapper = ({ children }) => {
    const navigate = useNavigate();

    const slugs = routes.map((route) => route.slug);

    const handleSwipe = (eventData) => {
        const { dir } = eventData;

        if (dir === 'Left') {
            // Swipe left: navigate to next page
            navigateNextPage();
        } else if (dir === 'Right') {
            // Swipe right: navigate to previous page
            navigatePreviousPage();
        }
    };

    const navigateNextPage = () => {
        const currentPath = window.location.pathname;
        const currentIndex = slugs.indexOf(currentPath);

        if (currentIndex !== -1 && currentIndex < slugs.length - 1) {
            navigate(slugs[currentIndex + 1]);
        }
    };

    const navigatePreviousPage = () => {
        const currentPath = window.location.pathname;
        const currentIndex = slugs.indexOf(currentPath);

        if (currentIndex > 0) {
            navigate(slugs[currentIndex - 1]);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            navigatePreviousPage();
        } else if (event.key === 'ArrowRight') {
            navigateNextPage();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipe,
        onSwipedRight: handleSwipe,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div {...swipeHandlers}>
            {children}
        </div>
    );
};

export default SwipeableWrapper;
