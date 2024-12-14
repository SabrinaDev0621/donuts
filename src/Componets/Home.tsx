import NavBar from "./NavBar"
import { FiArrowRight } from 'react-icons/fi'
import BannerImage from '../assets/home-banner-image.png'

const Home = () => {

    return (
        <>
        <div className="home-container">
            <NavBar />

            <div className="home-banner-container">
                
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