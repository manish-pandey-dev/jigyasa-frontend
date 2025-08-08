import React, { useState, useEffect } from 'react';
import { getHealth } from '../services/api';

const ConnectionStatus: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        await getHealth();
        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);
      }
    };
    checkHealth();
  }, []);

  return (
    <div className="connection-status">
      <span>Backend Status:</span>
      <span className={isConnected ? 'connected' : 'disconnected'}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </span>
    </div>
  );
};

export default ConnectionStatus;
