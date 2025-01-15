import './style.css';

interface CarProps {
    id: string;
    src: string;
    alt: string;
    modelo: string;
    cor: string;
    ano: number;
}

const CarCard: React.FC<CarProps> = ({ id, src, alt, modelo, cor, ano }) => {
    return (
        <div className="car-card">
            <img id={id} className="car" src={src} alt={alt} width="300" />
            <div className="car-details">
                <p>Modelo: {modelo}</p>
                <p>Cor: {cor}</p>
                <p>Ano: {ano}</p>
            </div>
            <a href="/EditarCarro"><button>Editar</button></a>
        </div>
    );
};

const MeuCarro: React.FC = () => {
    return (
        <>
            <div className="car-selection">
                <CarCard
                    id="peugeot"
                    src="/static/img/Peugeot-206.jpg"
                    alt="Peugeot 206"
                    modelo="Peugeot-206"
                    cor="Preto"
                    ano={1999}
                />
                <CarCard
                    id="onix"
                    src="/static/img/onix.webp"
                    alt="Onix"
                    modelo="Onix Turbo"
                    cor="Branco"
                    ano={2024}
                />
                <CarCard
                    id="ka"
                    src="/static/img/ka.jpeg"
                    alt="Ford Ka"
                    modelo="Ford Ka"
                    cor="Branco"
                    ano={2019}
                />
                <div>
                    <a href="/criar-carro">
                        <button className="add-button">+</button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default MeuCarro;
