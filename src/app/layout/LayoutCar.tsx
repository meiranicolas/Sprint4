import { CarProvider } from "@/contexts/CarContext";
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <CarProvider>
            {children}
        </CarProvider>
    );
};

export default Layout;