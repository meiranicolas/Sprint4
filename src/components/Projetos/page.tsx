'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import './style.css';

interface ProjectData {
  id: number;
  nome: string;
  descricao: string;
  cliente: string;
  dataInicio: string;
  dataFim: string;
  status: string;
}

const ProjectInfo = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/projetos');
      const rawData = await response.json();
      const mappedData = rawData.map((item: any[]) => ({
        id: item[0],
        nome: item[1],
        descricao: item[2],
        cliente: item[3],
        dataInicio: item[4],
        dataFim: item[5],
        status: item[6],
      }));
      setProjects(mappedData);
    };

    fetchData();
  }, []);

  async function handleDelete(id: number) {
    const response = await fetch('http://localhost:5000/projeto', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_projeto: id }),
    });
    const data = await response.json();
    router.refresh();
  }

  function handleAddProject() {
    router.push('http://localhost:3000/criar-projeto');
  }

  return (
    <main className="main-projeto">
      <div className="container-projeto">
        {projects.map((project, index) => (
          <div key={index} className="containerProjeto">
            <div className="content">
              <h2>Projeto: {project.nome}</h2>
              <p><strong>Descrição:</strong> {project.descricao}</p>
              <p><strong>Cliente:</strong> {project.cliente}</p>
              <p><strong>Data de Início:</strong> {project.dataInicio}</p>
              <p><strong>Data de Término:</strong> {project.dataFim}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleDelete(project.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add">
        <button className="addButton" onClick={handleAddProject}>+</button>
      </div>
    </main>
  );
};

export default ProjectInfo;
