import React, { useEffect, useState } from 'react'

export const ErrorBoundary = ({children}) => {
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        function handleError(error, info) {
            console.log(error, info);
            setHasError(prevVal => !prevVal);
        }

        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    if (hasError) {
        return () => {
            <h1>Something went wrong.</h1>
        }
    }
    return children;
}
