import './App.css'
import Navi from './components/Navi'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App bg-graydark overflow-hidden'>
      <Navi />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
