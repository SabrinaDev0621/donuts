const Contact = () => {
    return(
        <div id="Contact" className="contact-page-wrapper">
            <p className="primaty-subheading">Contacte-nos</p>
            <h1 className="primary-heading">Tem alguma pergunta?</h1>
            <h2 className="primary-heading">Deixe-nos ajuda-los</h2>
            <div className="contact-form-container">
                <input type="text" placeholder="seu_email@email.com"/>
                <button className="primary-button">Enviar</button>
            </div>
        
        </div>
    )
}

export default Contact