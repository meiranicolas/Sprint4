'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';

function MaisProjeto() {
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');
    const [data, setData] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [contatoClie, setClie] = useState('');
    const router = useRouter();

    const handleContatoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setClie(value);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const projetoData = { 
            'cidade': cidade, 
            'estado': estado, 
            'endereco': endereco, 
            'data': data, 
            'tipo': tipo, 
            'descricao': descricao, 
            'telefone': contatoClie 
        };

        try {
            const response = await fetch('http://localhost:5000/solicitacao', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projetoData),
            });

            if (response.ok) {
                alert('Projeto cadastrado com sucesso!');
                router.push('/meu-projeto'); 
            } else {
                alert('Erro ao cadastrar o projeto.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro ao tentar cadastrar o projeto.');
        }
    };

    return (
        <main className='main-criarProjeto'>
            <div className="containerProjeto">
                <h2>Cadastro Projeto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Cidade</label>
                        <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Cidade" />
                    </div>
                    <div className="form-group">
                        <label>Estado</label>
                        <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Estado" />
                    </div>
                    <div className="form-group">
                        <label>Endereço</label>
                        <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" />
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" value={data} onChange={(e) => setData(e.target.value)} placeholder="Data" />
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="">Selecione um tipo</option>
                            <option value="Eletroposto">Eletroposto</option>
                            <option value="Energia Solar">Energia Solar</option>
                            <option value="Energia Eólica">Energia Eólica</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />
                    </div>
                    <div className="form-group">
                        <label>Contato</label>
                        <input 
                            type="tel" 
                            value={contatoClie} 
                            onChange={handleContatoChange} 
                            placeholder="Contato (apenas números)" 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Cadastrar</button>
                    </div>
                    <p></p>
                    <div className="form-group" id="voltar-container">
                        <a href="/meu-projeto" id="voltar">Voltar</a>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default MaisProjeto;
