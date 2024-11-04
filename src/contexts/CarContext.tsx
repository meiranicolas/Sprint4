// context/CarContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type CarContextType = {
    carId: number | null;
    setCarId: (id: number) => void;
};

const CarContext = createContext<CarContextType | undefined>(undefined);

type Props = {
    children: ReactNode;
};

export const CarProvider: React.FC<Props> = ({ children }) => {
    const [carId, setCarId] = useState<number | null>(null);

    return (
        <CarContext.Provider value={{ carId, setCarId }}>
            {children}
        </CarContext.Provider>
    );
};

export const useCar = () => {
    const context = useContext(CarContext);
    if (context === undefined) {
        throw new Error('useCar deve ser usado dentro de CarProvider');
    }
    return context;
};
