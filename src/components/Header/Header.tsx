"use client";

import React, { useState, useEffect } from 'react';
import NavItem from '../NavItem/NavItem';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './style.css';
import WatsonChat from '../../app/assistente/WatsonChat';

const Header = () => {
    const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    const toggleRightMenu = () => {
        setIsRightMenuOpen(!isRightMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        router.push('/login');
    };

    useEffect(() => {
        setIsInitialLoad(false);
        if (typeof window !== "undefined") {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isRightMenuOpen) setIsRightMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isRightMenuOpen]);

    return (
        <>
            <header>
                <nav className="nav">
                    <Link href="/">
                        <Image src="/static/img/logo.png" width={150} height={150} alt="RenovAqui" />
                    </Link>
                    <ul className="navItems">
                        {token ? (
                            <>
                                <NavItem link="/meu-projeto" nome="Projetos" />
                                <NavItem link="/mapa" nome="Eletropostos" />
                                <li className="logout-button" onClick={handleLogout}>Sair</li>
                            </>
                        ) : (
                            <NavItem link="/login" nome="Login" />
                        )}
                    </ul>
                    <button className="menu-button" onClick={toggleRightMenu}>
                        &#9776;
                    </button>
                </nav>
            </header>

            <div className={`sidebar ${isRightMenuOpen ? 'open' : 'close'} ${isInitialLoad ? 'no-transition' : ''}`}>
                <button onClick={toggleRightMenu} className="fechar">&times;</button>
                <Link href="/meu-projeto" className="button">Projetos</Link>
                <Link href="/mapa" className="button">Eletropostos</Link>
                <button onClick={handleLogout} className="logut">Sair</button>
            </div>
            <WatsonChat />
        </>
    );
};

export default Header;
