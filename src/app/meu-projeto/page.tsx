'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';

interface Projeto {
    tipo: string;
    cidade: string;
    estado: string;
    endereco: string;
    data: string;
    descricao: string;
    telefone: string;
}

function MostrarProjetos() {
    const [projetos, setProjetos] = useState<Projeto[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/solicitacao');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os projetos');
                }
                const data = await response.json();
                setProjetos(data);
            } catch (error) {
                console.error('Erro ao carregar os projetos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    async function handleDelete(projeto: Projeto) {
        try {
            const response = await fetch('http://localhost:5000/solicitacao', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    endereco: projeto.endereco,
                    cidade: projeto.cidade,
                    estado: projeto.estado,
                    data: projeto.data,
                }),
            });

            if (response.ok) {
                setProjetos((prevProjetos) =>
                    prevProjetos.filter(
                        (p) =>
                            !(
                                p.endereco === projeto.endereco &&
                                p.cidade === projeto.cidade &&
                                p.estado === projeto.estado &&
                                p.data === projeto.data
                            )
                    )
                );
            } else {
                console.error('Erro ao excluir a solicitação');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    function handleAddProject() {
        router.push('/criar-projeto');
    }

    return (
        <main className="main-meuProjeto">
            <div className="container-meuProjeto">
                {loading ? (
                    <p>Carregando projetos...</p>
                ) : projetos.length === 0 ? (
                    <p>Nenhum projeto encontrado.</p>
                ) : (
                    projetos.map((projeto, index) => (
                        <div key={index} className="containerProjeto">
                            <div className="content">
                                <h2>Tipo: {projeto.tipo}</h2>
                                <p>
                                    <strong>Cidade:</strong> {projeto.cidade}
                                </p>
                                <p>
                                    <strong>Estado:</strong> {projeto.estado}
                                </p>
                                <p>
                                    <strong>Endereço:</strong> {projeto.endereco}
                                </p>
                                <p>
                                    <strong>Data:</strong>{' '}
                                    {new Date(projeto.data).toLocaleDateString()}
                                </p>
                                <p>
                                    <strong>Descrição:</strong> {projeto.descricao}
                                </p>
                                <p>
                                    <strong>Telefone:</strong> {projeto.telefone}
                                </p>
                            </div>
                            <div className="buttons">
                                <button onClick={() => handleDelete(projeto)}>Excluir</button>
                                <button
                                    className="copyButton"
                                    onClick={() =>
                                        navigator.clipboard.writeText(projeto.telefone)
                                    }
                                >
                                    Copiar Contato
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="add">
                <button className="addButton" onClick={handleAddProject}>
                    +
                </button>
            </div>
        </main>
    );
}

export default MostrarProjetos;
