import './style.css';
import ListItem from '../ListItem/ListItem'
import Image from 'next/image';
function Footer(){
    return(
        <>
            <footer>
                <div className="containerFooter">
                    <div className='LinksR'>
                        <h3 className='LR'>Links Rápidos</h3>
                        <ul>
                            <ListItem title="Perguntas frequentes" linkTo='https://www.portoseguro.com.br/canal-de-ajuda'/>
                            <ListItem title='SAC e Telefone' linkTo='http://portoseguro.com.br/fale-conosco/contatos/telefones-e-sac?_gl=1*103hiyi*_gcl_aw*R0NMLjE3MzAyMzA2NTEuQ2owS0NRandqNEs1QmhEWUFSSXNBRDFMeTJvRVBKd2RSM295YllGUUEwOTRUNUl3bVNaV1hYN18yLTdzLUZiWV9YVmNQTDEwcnhYdjVPWWFBdkZaRUFMd193Y0I.*_gcl_au*MjY3NTIzMDAyLjE3MjYwMTQzMjA.*_ga*MTM0Mjk4MjE0My4xNzE1ODczNDYz*_ga_S9FTJ8D526*MTczMDIzOTI3My42LjEuMTczMDIzOTMwMS4zMi4wLjA.'/>
                            <ListItem title='WhatsApp' linkTo='https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!'/>
                            <ListItem title='Endereços' linkTo='https://portoseguro.com.br/fale-conosco/contatos/enderecos?_gl=1*10bkaw7*_gcl_aw*R0NMLjE3MzAyMzA2NTEuQ2owS0NRandqNEs1QmhEWUFSSXNBRDFMeTJvRVBKd2RSM295YllGUUEwOTRUNUl3bVNaV1hYN18yLTdzLUZiWV9YVmNQTDEwcnhYdjVPWWFBdkZaRUFMd193Y0I.*_gcl_au*MjY3NTIzMDAyLjE3MjYwMTQzMjA.*_ga*MTM0Mjk4MjE0My4xNzE1ODczNDYz*_ga_S9FTJ8D526*MTczMDIzOTI3My42LjEuMTczMDIzOTMxOS4xNC4wLjA.'/>
                            <ListItem title='Ouvidoria' linkTo='https://portoseguro.com.br/fale-conosco/ouvidoria?_gl=1*1stoudc*_gcl_aw*R0NMLjE3MzAyMzA2NTEuQ2owS0NRandqNEs1QmhEWUFSSXNBRDFMeTJvRVBKd2RSM295YllGUUEwOTRUNUl3bVNaV1hYN18yLTdzLUZiWV9YVmNQTDEwcnhYdjVPWWFBdkZaRUFMd193Y0I.*_gcl_au*MjY3NTIzMDAyLjE3MjYwMTQzMjA.*_ga*MTM0Mjk4MjE0My4xNzE1ODczNDYz*_ga_S9FTJ8D526*MTczMDIzOTI3My42LjEuMTczMDIzOTMzMC4zLjAuMA..'/>
                            <ListItem title='Canal de denúncias' linkTo='https://www.portoseguro.com.br/fale-conosco/contatos/canal-de-denuncia'/>
                            <ListItem title='Encontre um Corretor' linkTo='https://www.portoseguro.com.br/fale-conosco/contatos/encontre-um-corretor'/>
                        </ul>
                    </div>
                    <div className='icons'>
                            <a href='https://www.portoseguro.com.br/seguro-auto?utm_source=google&utm_medium=cpa&utm_campaign=automovel_na_marca_search_aon_performance_hq_growth_auto&utm_content=key_transacao_automatico_cross_marca_pesquisa_saiba-mais_nu_teste-nao_24uzq00229he&ref=24uzq00229he&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2rOsTSV2K2nJyO4RbTmdy0Dj8LwxDniS43jCQQrU0Y9w4Qy-5Rpl-MaAr0EEALw_wcB' className='logoporto' >
                                <Image src='/static/img/PortoHolding-RGB-H.5b8d5d69.png' width={200} height={100} alt='Logo Porto Seguro' className='logo-porto'/>
                            </a>
                        <div className='redes-sociais'>
                            <a href="https://www.instagram.com/portoseguro/">
                                    <Image src="/static/img/instagram.png" width={30} height={30} alt="Instagram" />
                            </a>
                            <a href="https://www.tiktok.com/@portoseguro">
                                <Image src="/static/img/tiktok.png" width={30} height={30} alt="Tiktok" />
                            </a>
                            <a href="https://www.facebook.com/porto/?locale=pt_BR">
                                <Image src="/static/img/facebook.png" width={30} height={30} alt="Facebook" />
                            </a>
                            <a href="https://www.youtube.com/portoseguro">
                                <Image src="/static/img/youtube.png" width={100} height={27} alt="Youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;