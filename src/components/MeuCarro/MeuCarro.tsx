'use client'

import { useEffect, useState } from "react";
import { useCar } from "@/contexts/CarContext";
import Image from "next/image";
import './style.css'
import { useRouter } from "next/navigation";

interface CarData {
  modelo: string;
  marca: string;
  tipo: string;
  anoFabricacao: number;
  placa: string;
  quilometragem: number;
  cliente: string;
  id: number
}

const CarInfo = () => {
    const [cars, setCars] = useState<CarData[]>([]);
    const router = useRouter()
    const { setCarId } = useCar();

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:5000/veiculos');
        const rawData = await response.json();
        const mappedData = rawData.map((item: any[]) => ({
          id: item[0],
          marca: item[1],
          modelo: item[2],
          tipo: item[3],
          anoFabricacao: item[4],
          placa: item[5],
          quilometragem: item[6],
          cliente: item[7]
        }));
        setCars(mappedData);
      };
  
      fetchData();
    }, []);


        async function handleDelete(id: number) {
            const response = await fetch('http://localhost:5000/veiculo', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'id_veic': id})
            })
            const data = await response.json()
            router.refresh()
        }

        function handleAddCar() {
          router.push('http://localhost:3000/criar-carro');
      }

    return (
      <main className="main-meuCarro">
        <div className="container-meuCarro">
        {cars.map((car, index) => (

            <div key={index} className="containerCarro">
            <div className="carImage">
                <Image src="/static/img/generic_car.png" alt="Carro Genérico" width={100} height={100} />
            </div>
            <div className="content">
                <h2>Modelo: {car.tipo}</h2>
                <p><strong>Marca:</strong> {car.marca}</p>
                <p><strong>Tipo:</strong> {car.modelo}</p>
                <p><strong>Ano de Fabricação:</strong> {car.anoFabricacao}</p>
                <p><strong>Placa:</strong> {car.placa}</p>
                <p><strong>Quilometragem:</strong> {car.quilometragem}</p>
                <p><strong>Cliente:</strong> {car.cliente}</p>
            </div>
            <div className="buttons">
                <button onClick={() => handleDelete(car.id)}>Excluir</button>
            </div>
        </div>
          ))}
          </div>
          <div className="add">
            <button className="addButton" onClick={handleAddCar}>+</button>
          </div>
      </main>
        
    );
};

export default CarInfo;
