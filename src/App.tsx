import './App.css'
import Home from './Componets/Home'
import About from './Componets/About'
import Work from './Componets/Work'
import Avaliacao from './Componets/Avaliacao'
import Contact from './Componets/Contact'
import Footer from './Componets/Footer'


function App (){
  return(
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Avaliacao />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
