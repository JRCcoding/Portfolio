import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navi from './components/Navi'
import BlogpostScreen from './screens/BlogpostScreen'
import Blog from './screens/BlogScreen'
import HomeScreen from './screens/HomeScreen'
import NewBlogpostScreen from './screens/NewBlogpostScreen'
import Skills from './screens/SkillsScreen'
import Work from './screens/WorkScreen'
import { useEffect, useState } from 'react'

function App() {
  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768) // Adjust breakpoint as needed
      }

      handleResize() // Check on initial render
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile
  }
  const isMobile = useIsMobile()
  return (
    <Router>
      <div className='App bg-graydark overflow-hidden'>
        <Navi isMobile={isMobile} />

        <Routes>
          <Route path='/' exact element={<HomeScreen />} isMobile={isMobile} />
          <Route path='/blogposts/:id' element={<BlogpostScreen />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/work' element={<Work />} />
          <Route path='/admin/new' element={<NewBlogpostScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
