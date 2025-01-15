'use client'

import { useEffect, useState } from "react";
import { CarProvider, useCar } from "@/contexts/CarContext";
import Image from "next/image";
import './style.css'
import { useRouter } from "next/navigation";
import CarInfo from "@/components/MeuCarro/MeuCarro";



const Carros = () => {
    
    return (
        <CarProvider>
            <CarInfo />
        </CarProvider>
    );
};

export default Carros;
