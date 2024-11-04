'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';
import '@/components/MeuCarro/style.css'

function MaisCarro() {

    
    const [marca, setMarca] = useState('');
    const [tipo, setTipo] = useState('');
    const [modelo, setModelo] = useState('');
    const [anoFabricacao, setAno] = useState('');
    const [placa, setPlaca] = useState('');
    const [quilometragem, setQuilometragem] = useState('');
    const [cliente, setClie] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const carroData = { 'marca' : marca, 'tipo': tipo, 'modelo' : modelo, 'anoFabricacao': anoFabricacao, 'placa': placa,'quilometragem': quilometragem, 'cliente': cliente};

        try {
            const response = await fetch('http://localhost:5000/veiculo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carroData),
            });

            if (response.ok) {
                alert('Carro cadastrado com sucesso!');
                router.push('/meu-carro'); 
            } else {
                alert('Erro ao cadastrar o carro.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro ao tentar cadastrar o carro.');
        }
    };

    return (
        <main className='main-criarCarro'>

            <div className="containerCarro">
                <h2>Cadastro Carro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Marca</label>
                        <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" />
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Tipo" />
                    </div>
                    <div className="form-group">
                        <label>Modelo</label>
                        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Modelo" />
                    </div>
                    <div className="form-group">
                        <label>Ano Fabricação</label>
                        <input type="text" value={anoFabricacao} onChange={(e) => setAno(e.target.value)} placeholder="Ano de Fabricação" />
                    </div>
                    <div className="form-group">
                        <label>Placa</label>
                        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Placa" />
                    </div>
                    <div className="form-group">
                        <label>Quilometragem</label>
                        <input type="text" value={quilometragem} onChange={(e) => setQuilometragem(e.target.value)} placeholder="Quilometragem" />
                    </div>
                    <div className="form-group">
                        <label>Cliente</label>
                        <input type="text" value={cliente} onChange={(e) => setClie(e.target.value)} placeholder="Cliente" />
                    </div>
                    <div className="form-group">
                        <button type="submit">Cadastrar</button>
                    </div>
                    <div className="form-group" id="voltar-container">
                        <a href="/meu-carro" id="voltar">Voltar</a>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default MaisCarro;
