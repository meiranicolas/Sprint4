"use client";

import React, { useState, useEffect } from 'react';
import NavItem from '../NavItem/NavItem';
import Image from 'next/image';
import Link from 'next/link';
import './style.css';
import WatsonChat from '../../app/assistente/WatsonChat';
import Layout from '@/app/layout/LayoutCar';

const Header = () => {

    

    const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const toggleRightMenu = () => {
        setIsRightMenuOpen(!isRightMenuOpen);
    };
    useEffect(() => {
        setIsInitialLoad(false);
    }, []);
    let token = null
    if(typeof window !== undefined){
        token = localStorage.getItem('token')
    }


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
        <Layout>
        
        <>
            <header>
                <nav className="nav">
                    <Link href="/">
                        <Image src="/static/img/portoseguro.png" width={200} height={120} alt="Porto Seguro" />
                    </Link>
                    <ul className="navItems">

                        {
                            token ? (
                                <>
                                    <NavItem link="/meu-carro" nome="Meu Carro" />
                                    <NavItem link="/mapa" nome="Oficinas" />
                                    <NavItem link="/configuracoes" nome="Configurações" />
                                </>
                                ) : (<NavItem link='/login' nome='Login'/>)
                        }

                        
                    </ul>
                    <button className="menu-button" onClick={toggleRightMenu}>
                        &#9776;
                    </button>
                </nav>
            </header>
            <hr id="linha" />

            <div className={`sidebar ${isRightMenuOpen ? 'open' : 'close'} ${isInitialLoad ? 'no-transition' : ''}`}>
                <button onClick={toggleRightMenu} className="fechar">&times;</button>
                <Link href="/meu-carro" className="button">Meu Carro</Link>
                <Link href="/mapa" className="button">Oficinas</Link>
                <Link href="/configuracoes" className="button">Configurações</Link>
            </div>
            <WatsonChat />
        </>
        </Layout>

    );
};

export default Header;
