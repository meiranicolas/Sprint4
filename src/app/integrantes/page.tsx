import Image from 'next/image'
import Link from 'next/link'
import './style.css'

function Participantes() {
    return (
        <div className="participantes">
            <div className="containerPart">
                <Link href="https://github.com/nicolasmeira5/Sprint4" target="_blank">
                    GitHub Repository
                </Link>

                <div className="member">
                    <Image src="/static/img/leo.jpeg" alt="Leo Mota" width={100} height={100} />
                    <div className="info">
                        <p className="name">Leo Mota</p>
                        <p className="id">RM557851</p>
                        <p className="class">1TDSB</p>
                    </div>
                </div>

                <div className="member">
                    <Image src="/static/img/gabs.jpeg" alt="Gabriel Freire" width={100} height={100} />
                    <div className="info">
                        <p className="name">Gabriel Freire</p>
                        <p className="id">RM556783</p>
                        <p className="class">1TDSB</p>
                    </div>
                </div>

                <div className="member">
                    <Image src="/static/img/nicolas.jpg" alt="Nicolas Meira" width={100} height={100} />
                    <div className="info">
                        <p className="name">Nicolas Meira</p>
                        <p className="id">RM554464</p>
                        <p className="class">1TDSB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participantes
