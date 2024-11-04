'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './style.css';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (email !== confirmEmail) {
            alert("Os emails não correspondem.");
            return;
        }
        if (password !== confirmPassword) {
            alert("As senhas não correspondem.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'login': email, 'senha': password }),
            });
            console.log(response)

            if (response.ok) {
                alert('Usuário criado com sucesso!');
                router.push('/login');
                
            } else {
                const errorData = await response.json();
                alert(errorData.msg || 'Erro ao criar usuário.');
            }
        } catch (error) {
            console.error('Erro na criação do usuário:', error);
            alert('Erro ao tentar criar usuário.');
        }
    };

    return (
        <main className='main-criarConta'>
            <div className="container">
                <h1>Crie sua Conta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} placeholder="Confirmar email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
                    </div>
                    <div className="form-group">
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar senha" required />
                    </div>
                    <button type="submit" className="btn-submit">Confirmar</button>
                </form>
            </div>

        </main>
    );
}

export default RegisterForm;
