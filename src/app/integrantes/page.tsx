import Image from 'next/image'
import Link from 'next/link'
import './style.css'

function Participantes() {
    return (
        <div className="participantes">
            <div className="containerPart">
                <Link href="https://github.com/nicolasmeira5/RenovAqui" target="_blank" className="repository-link">
                    <Image src="/static/img/github-icon.png" alt="GitHub" width={24} height={24} />
                    GitHub Repository
                </Link>
                <div id="leo" className="member">
                    <Image src="/static/img/leo.jpeg" alt="Leo Mota" width={100} height={100} />
                    <div className="info">
                        <p className="name">Leo Mota</p>
                        <p className="id">RM557851</p>
                        <p className="class">1TDSB</p>
                        <Link href="https://github.com/leomotalima" target="_blank">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/leo-mota-lima-281906169/" target="_blank">
                            Linkedin
                        </Link>
                    </div>
                </div>
                <div id="gabs" className="member">
                    <Image src="/static/img/gabs.jpeg" alt="Gabriel Freire" width={100} height={100} />
                    <div className="info">
                        <p className="name">Gabriel Marcello</p>
                        <p className="id">RM556783</p>
                        <p className="class">1TDSB</p>
                        <Link href="https://github.com/gabrielmarcello/" target="_blank">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/gabriel-marcello-665098286/" target="_blank">
                            Linkedin
                        </Link>
                    </div>
                </div>
                <div id="nicolas" className="member">
                    <Image src="/static/img/nicolas.jpg" alt="Nicolas Meira" width={100} height={100} />
                    <div className="info">
                        <p className="name">Nicolas Meira</p>
                        <p className="id">RM554464</p>
                        <p className="class">1TDSB</p>
                        <Link href="https://github.com/nicolasmeira5" target="_blank">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/nicolas-meira-685b34282/" target="_blank">
                            Linkedin
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participantes
