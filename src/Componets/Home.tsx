import NavBar from "./NavBar"
import BannerBackground from '../assets/home-banner-background.png'
import { FiArrowRight } from 'react-icons/fi'
import BannerImage from '../assets/home-banner-image.png'

const Home = () => {

    return (
        <>
        <div className="home-container">
            <NavBar />

            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt='imagem de fundo'/>
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Seu Donuts Favorito Entregue Em Sua Casa
                    </h1>
                    <p>Diversos sabores deliciosos para saborar seus melhores momentos. Peça ja o seu e receba um mimo surpresa</p>

                    <button className="secondary-button">Faça seu pedido <FiArrowRight /></button>

                    <p className="primary-text">
                        Ou venha comer conosco em um ambiente climatizado e aconchegante com varias opções para seu pedido.
                    </p>
                </div>

                <div className="home-image-section">
                    <div className="home-primary-image">
                        <img src={BannerImage} alt='donuts' />
                    </div>
                </div>

            </div>
        </div>
        </>
    )

}

export default Home