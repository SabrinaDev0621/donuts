import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseFloodWater, faTruck, faUtensils } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Work = () => {
  const workInfoData =[
    {
      image:<FontAwesomeIcon icon={faHouseFloodWater} /> ,
      title:"feito como se fosse em casa" ,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam ea maxime doloribus quaerat molestiae voluptate! Cum praesentium quas quasi, vitae obcaecati consequuntur. Eveniet sint molestias maxime itaque repellat fugit.",
    },
    {
      image:<FontAwesomeIcon icon={faUtensils} /> ,
      title:"Ingredientes selecionados" ,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam ea maxime doloribus quaerat molestiae voluptate! Cum praesentium quas quasi, vitae obcaecati consequuntur. Eveniet sint molestias maxime itaque repellat fugit.",
    },
    {
      image:<FontAwesomeIcon icon={faTruck} /> ,
      title:"Entrega em toda cidade" ,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aliquam ea maxime doloribus quaerat molestiae voluptate! Cum praesentium quas quasi, vitae obcaecati consequuntur. Eveniet sint molestias maxime itaque repellat fugit.",
    },
  ]  
  
  
  
  return (
    <div id='Work' className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1>Como Servimos Você</h1>
        <p className="primary-text">Servimos donuts frescos e de qualidade, com o cuidado necessário para garantir o melhor sabor. Nosso foco é tornar sua experiência rápida e prática, sem abrir mão do carinho em cada detalhe. Estamos aqui para entregar sabor, qualidade e conveniência em cada mordida!!</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className='work-section-info'>
            <div className='info-boxes-img-container'>{data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}  
      </div>
    </div>
  )
}

export default Work
