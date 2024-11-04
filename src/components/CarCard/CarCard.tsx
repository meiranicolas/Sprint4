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
            <a href="/editar-carro"><button>Editar</button></a>
        </div>
    );
};

export default CarCard;