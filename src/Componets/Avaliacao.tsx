import { AiFillStar } from 'react-icons/ai'
import ProfilePic from '../assets/john-doe-image.png'

const Avaliacao  = () => {
    return (
        <div id='Avaliacao' className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Avaliação</p>
                <h1 className="primary-heading">O que dizem sobre nós</h1>
                <p className="primary-text">
                Quem prova nossos donuts valoriza o sabor, a qualidade e o cuidado que dedicamos a cada detalhe. É sempre um prazer receber feedbacks que refletem experiências positivas. Confira as opiniões de nossos clientes e conheça mais sobre o que fazemos!
                </p>
            </div>

            <div className="testeminial-section-bottom">
                <img src={ProfilePic} alt="imagem do avaliador" />
                <p>"Os donuts são frescos, com sabores únicos e uma textura impecável. Fiquei impressionado com a variedade de opções e a atenção aos detalhes. O atendimento foi ótimo, e o ambiente é muito acolhedor. Definitivamente, meu novo lugar favorito para doces."</p>

                <div className='testeminial-star-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            </div>
            <h2>Leonardo Silva</h2>
        </div>
    )
}

export default Avaliacao