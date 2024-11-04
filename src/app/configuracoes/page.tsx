'use client'

import { useEffect } from 'react'
import './style.css'
import { useRouter } from 'next/navigation'
function Ajustes(){

    

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            alert('Você deve estar logado para acessar essa página!')
            router.push('/login')
        }

    })


        function handleLogout(){
            if (typeof window !== 'undefined'){
                localStorage.removeItem('token')
                router.push('/login')
            }
        }

    return(
        <>
        
            <div className="message-content">
                <a href="/" className='buttons'>Sobre</a> 
                <button onClick={handleLogout} className='buttons'>Sair da conta</button>
            </div>
            <div className="imagens">
                <img src="/static/img/guincho.jpeg" alt="guincho"/>
                <img src="/static/img/predioporto.jpeg" alt="predioporto"/>
            </div>
        </>
    )
}
export default Ajustes