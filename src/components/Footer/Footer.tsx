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
                            <ListItem title="Gabriel Marcello" linkTo='/integrantes/#leo'/>
                            <ListItem title='Nicolas Meira' linkTo='/integrantes/#nicolas'/>
                            <ListItem title='Leo Mota' linkTo='/integrantes/'/>
                            <ListItem title='GitHub' linkTo='https://github.com/nicolasmeira5/RenovAqui'/>
                            <ListItem title='Pitch' linkTo='https://youtu.be/lxFctyiI4GU'/>
                            <ListItem title='Tour' linkTo='https://youtu.be/7keuYnTZqYQ'/>
                        </ul>
                    </div>
                    <div className='icons'>
                            <a href='/' className='logorenovaqui' >
                                <Image src='/static/img/foia_branco.png' width={150} height={150} alt='Logo RenovAqui' className='logo-renovaqui'/>
                            </a>
                        <div className='redes-sociais'>
                            <a href="https://www.sap.com/brazil/index.html">
                                    <Image src="/static/img/sap.png" width={50} height={30} alt="SAP" />
                            </a>
                            <a href="https://www.fia.com/">
                                <Image src="/static/img/fia.png" width={50} height={30} alt="FIA" />
                            </a>
                            <a href="https://www.mahindraracing.com/">
                                <Image src="/static/img/mahindra_racing.png" width={30} height={30} alt="Mahindra Racing" />
                            </a>
                            <a href="https://www.ultragaz.com.br/">
                                <Image src="/static/img/ultragaz.png" width={30} height={30} alt="Ultragaz" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;