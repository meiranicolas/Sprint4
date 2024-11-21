'use client';

import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import './index.css';

import quemSomosImage from '../../public/static/img/foia_branco.png';

const words = ["RenovAqui", "Futuro", "Energia", "Transformação", "Progresso", "Energia", "Verde"];

const HomePage: FC = () => {
    const [letterIndex, setLetterIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [writing, setWriting] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (writing) {
                if (letterIndex < words[wordIndex].length) {
                    setLetterIndex(letterIndex + 1);
                } else {
                    setWriting(false);
                    setTimeout(() => setWriting(true), 2000);
                }
            } else {
                if (letterIndex > 0) {
                    setLetterIndex(letterIndex - 1);
                } else {
                    setWordIndex((wordIndex + 1) % words.length);
                    setWriting(true);
                }
            }
        }, writing ? 120 : 120);

        return () => clearTimeout(timeout);
    }, [letterIndex, wordIndex, writing]);

    const scrollToAboutUs = () => {
        const aboutUsSection = document.getElementById('about-us');
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section id="home">
                <h2 id="changing-text" aria-live="polite">
                    {words[wordIndex].substring(0, letterIndex)}
                </h2>
                <div id="down-arrow" aria-label="Rolar para baixo" onClick={scrollToAboutUs} style={{ cursor: 'pointer' }}>
                    ˅
                </div>
            </section>

            <section id="about-us">
                <div className="about-us-image">
                    <Image src={quemSomosImage} alt="Imagem sobre quem somos" className="about-us-image" />
                </div>
                <div className="about-us-content">
                    <h2 className="about-us-title">Quem Somos?</h2>
                    <p className="about-us-description">
                        Somos a RenovAqui, uma plataforma que conecta pessoas e comunidades a soluções de energia renovável e carregamento de veículos elétricos. Nossa missão é facilitar o acesso à energia limpa, promovendo um futuro mais sustentável e conectado por meio da inovação e colaboração.
                    </p>
                </div>
            </section>

            <section id="benefits">
                <h2 id="benefits-title" className="benefits-title">Benefícios</h2>
                <div className="benefits-container">
                    <div className="benefit-item">
                        <i className="bi bi-lightbulb"></i>
                        <h3 className="benefit-title">Sustentabilidade ao Alcance de Todos</h3>
                        <p className="benefit-description">
                            O RenovAqui conecta pessoas e comunidades com soluções sustentáveis, oferecendo uma plataforma intuitiva para cadastrar e explorar projetos de energia limpa, promovendo um futuro mais verde e acessível para todos.
                        </p>
                    </div>
                    <div className="benefit-item">
                        <i className="bi bi-clock"></i>
                        <h3 className="benefit-title">Cadastro de Projetos Sustentáveis</h3>
                        <p className="benefit-description">
                            Usuários podem compartilhar suas ideias e iniciativas em energia renovável, facilitando a colaboração e a busca por investidores, parceiros ou apoio técnico para transformar projetos em realidade.
                        </p>
                    </div>
                    <div className="benefit-item">
                        <i className="bi bi-shield-check"></i>
                        <h3 className="benefit-title">Localização de Infraestrutura Sustentável Próxima</h3>
                        <p className="benefit-description">
                            Encontre rapidamente eletropostos e outras infraestruturas de energia renovável perto de você, utilizando um mapa interativo que torna mais simples planejar e adotar alternativas limpas.
                        </p>
                    </div>
                    <div className="benefit-item">
                        <i className="bi bi-bullseye"></i>
                        <h3 className="benefit-title">Contribuição para um Futuro Sustentável</h3>
                        <p className="benefit-description">
                            Ao usar o RenovAqui, você colabora diretamente para a expansão da energia renovável, ajudando a reduzir a pegada de carbono, economizar recursos a longo prazo e promover impactos sociais e econômicos positivos em sua comunidade.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
