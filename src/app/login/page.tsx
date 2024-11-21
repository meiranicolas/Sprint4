'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';


function LoginForm() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
            
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'login_user': email, 'senha_user':password }),
            });

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                console.log(data.access_token)
                if (data.access_token){
                    alert('Login bem-sucedido!');
                    
                    localStorage.setItem('token', data.access_token)
                    router.push('/');
                }
            } else {
                alert('Credenciais inválidas.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao tentar fazer login.');
        }
    };

    return (
        <main className='container'>
            <div className="containerLogin">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group-account">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                    <div className="form-group-account">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
                    </div>
                    <button type="submit" className="btn-submit">Confirmar</button>
                </form>
                <p>OU</p>
                <a href="/criar-conta" className="btn-create">Criar Conta</a>
            </div>

        </main>
    );
}

export default LoginForm;
