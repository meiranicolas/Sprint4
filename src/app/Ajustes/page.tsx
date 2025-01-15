import './style.css'
function Ajustes(){
    return(
        <>
    <div className="message-content">
       <a href="/perfil"><h3>Conta</h3></a> 
       <a href="/"><h3>Sobre</h3></a> 
       <a href="/login"><h3>Sair da Conta</h3></a> 
    </div>
    <div className="imagens">
        <img src="/static/img/guincho.jpeg" alt="guincho"/>
        <img src="/static/img/predioporto.jpeg" alt="predioporto"/>
    </div>
        </>
    )
}
export default Ajustes