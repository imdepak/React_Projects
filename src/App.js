import React, { useState, useEffect } from 'react';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      checkConnectionSpeed();
    };

    const handleOffline = () => {
      setIsOnline(false);
      setIsSlowConnection(false);
    };

    const checkConnectionSpeed = () => {
      if (navigator.connection) {
        const { effectiveType } = navigator.connection;
        if (effectiveType === '2g' || effectiveType === 'slow-2g') {
          setIsSlowConnection(true);
        } else {
          setIsSlowConnection(false);
        }
      }
    };

    // Initial check
    checkConnectionSpeed();

    // Event listeners for online, offline, and connection type changes
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (navigator.connection) {
      navigator.connection.addEventListener('change', checkConnectionSpeed);
    }

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', checkConnectionSpeed);
      }
    };
  }, []);

  return (
    <div>
      <p>Hi There, I m Running for JayaGeda...</p>
      {!isOnline && (
        <div className="notification">
          You are currently offline. Please check your internet connection.
        </div>
      )}
      {isSlowConnection && (
        <div className="notification">
          You have a slow internet connection. Some features may not work properly.
        </div>
      )}
    </div>
  );
};

export default App;
