import './App.css'
import Navi from './components/Navi'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App bg-graydark'>
      <Navi />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
