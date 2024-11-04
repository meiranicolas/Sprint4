import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', height: '100vh'}}>
            <h1>404 - Página não encontrada</h1>
            <p>A página que você tentou acessar não existe.</p>
            <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
                Voltar para a página inicial
            </Link>
        </div>
    );
};

export default NotFound;
