import React, { createContext, useContext, useState, useEffect } from 'react';

interface VectorModeContextType {
  isVectorMode: boolean;
  toggleVectorMode: () => void;
  setVectorMode: (enabled: boolean) => void;
}

const VectorModeContext = createContext<VectorModeContextType | undefined>(undefined);

export const VectorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVectorMode, setIsVectorMode] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isVectorMode) {
      root.classList.add('vector-mode');
    } else {
      root.classList.remove('vector-mode');
    }
  }, [isVectorMode]);

  const toggleVectorMode = () => {
    setIsVectorMode((prev) => !prev);
  };

  const setVectorMode = (enabled: boolean) => {
    setIsVectorMode(enabled);
  };

  return (
    <VectorModeContext.Provider value={{ isVectorMode, toggleVectorMode, setVectorMode }}>
      {children}
    </VectorModeContext.Provider>
  );
};

export const useVectorMode = (): VectorModeContextType => {
  const context = useContext(VectorModeContext);
  if (!context) {
    throw new Error('useVectorMode must be used within a VectorModeProvider');
  }
  return context;
};
