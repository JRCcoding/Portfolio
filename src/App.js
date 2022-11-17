import './App.css'
import Navi from './components/Navi'
import About from './components/About'
import Skills from './components/Skills'
// import Work from './components/Work'
import Contact from './components/Contact'
import ScrollButton from './components/ScrollButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import Personal from './components/Personal'
import Work from './components/Work'

function App() {
  return (
    <div className='App bg-graydark overflow-hidden'>
      <Navi />

      <About />
      <Personal />
      <Skills />
      <Work />
      {/* <Hub /> */}
      <Contact />
      <ScrollButton />
    </div>
  )
}

export default App
