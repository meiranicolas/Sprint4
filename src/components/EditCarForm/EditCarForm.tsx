import React, { useState, useEffect } from 'react';
import './style.css';
import { useCar } from '@/contexts/CarContext';

const EditCarForm = () => {
    const { carId } = useCar();
  
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState<number>(0)
    const [cor, setCor] = useState('')
    const [preco, setPreco] = useState<number>(0)
    const [tipo, setTipo] = useState('')
    const [placa, setPlaca] = useState('')
    const [quilometragem, setQuilometragem] = useState<number>(0)
  
  
    const handleSubmit = async () => {
      const response = await fetch('http://localhost:5000/veiculo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ carId, marca, tipo, modelo, ano, placa, quilometragem })
      })
      const data = await response.json()
      console.log(data)
    };
  
    return (
  
      <main className='container'>
        <h1>Editar Carro {carId}</h1>
        <form onSubmit={() => {
          handleSubmit()
        }}>
          <div className="form-group">
              <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" required />
          </div>
          <div className="form-group">
              <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Modelo" required />
          </div>
          <div className="form-group">
              <input type="number" value={ano} onChange={(e) => { setAno(parseInt((e.target.value))) }} placeholder="Ano" required />
          </div>
          <div className="form-group">
              <input type="text" value={cor} onChange={(e) => setCor(e.target.value)} placeholder="Cor" required />
          </div>
          <div className="form-group">
              <input type="text" value={preco} onChange={(e) => { setPreco(parseInt((e.target.value))) }} placeholder="Preço" required />
          </div>
          <div className="form-group">
              <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Tipo" required />
          </div>
          <div className="form-group">
              <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Placa" required />
          </div>
          <div className="form-group">
              <input type="text" value={quilometragem} onChange={(e) => setQuilometragem(parseInt((e.target.value)))} placeholder="Quilometragem" required />
          </div>
          <button type="submit" className="btn-submit">Confirmar</button>
                  
              </form>
      </main>
    )
  };
  
  export default EditCarForm;
  