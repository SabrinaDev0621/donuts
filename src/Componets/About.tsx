import { BsFillPlayCircleFill } from 'react-icons/bs'
import AboutBackground from '../assets/about-background1.jpg'
import AboutBackgroundImage from '../assets/about-image.png'
const About = () => {
    return (
        <div id='About' className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} />
            </div>

            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} />
            </div>

            <div className='about-section-text-container'>
                <p className='primary-subheading'>Sobre NóS
                </p>
                 <h1 className='primry-heading'>É Importante Conhecer Quem Alimenta Você</h1>

                 <p className='primary-text'>Por trás de cada Donuts, há dedicação, paixão e cuidado. Aqui na Laricando Donuts, usamos ingredientes selecionados e contamos com uma equipe apaixonada por criar doces frescos e deliciosos. Saber quem prepara sua comida conecta você a histórias reais e torna cada mordida ainda mais especial. Venha nos conhecer e descubra o amor que colocamos em cada receita!</p>

                 <p>Assista ao nosso vídeo e descubra os bastidores da nossa cozinha! Veja de perto todo o carinho e dedicação que colocamos em cada receita, desde os ingredientes fresquinhos até o toque final que torna nossos donuts tão especiais. Clique aqui e mergulhe nessa experiência deliciosa! 🎥✨.</p>

                 <div className='about-buttons-container'>
                    <button className='secondary-button'>Leia Mais</button>
                    <button className='watch-video-button'><BsFillPlayCircleFill />Assista Nosso Video</button>
                 </div>
            </div>

        </div>
    )
}

export default About