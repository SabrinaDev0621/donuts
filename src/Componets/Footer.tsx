import { BsTwitter, BsYoutube } from 'react-icons/bs'
import logo from '../assets/Logo.svg'
import { SiLinkedin } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer-wapper'>
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={logo} alt="logo donuts" />
                </div>
                <div className='footer-icons'>
                    <BsTwitter/>
                    <SiLinkedin/>
                    <BsYoutube/>
                    <FaFacebookF/>
                </div>
            </div>
            <div className='footer-section-two'>
                <div className='footer-section-colums'>
                    <span>Qualidade</span>
                    <span>Ajuda</span>
                    <span>Nossa Marca</span>
                    <span>Carreira</span>
                    <span>Avaliação</span>
                    <span>Nosso Trabalho</span>
                </div>

                <div className='footer-section-colums'>
                    <span>11- 1234-5678</span>
                    <span>ola-donuts@food</span>
                    <span>midia@donuts@food.com</span>
                    <span>contato@food.com</span>
                </div>

                <div className='footer-section-colums'>
                    <span>Termos & Condições</span>
                    <span>Politica de privacidade</span>
                </div>
            </div>
        </div>
    )
}

export default Footer