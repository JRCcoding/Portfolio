import './App.css'
import Navi from './components/Navi'
import About from './components/About'
import Skills from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <Navi />
      <About />
      <Skills />
    </div>
  )
}

export default App
