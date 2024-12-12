import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navi from './components/Navi'
import BlogpostScreen from './screens/BlogpostScreen'
import Blog from './screens/BlogScreen'
import HomeScreen from './screens/HomeScreen'
import NewBlogpostScreen from './screens/NewBlogpostScreen'
import ServicesScreen from './screens/ServicesScreen'
import ChatScreen from './screens/ChatScreen'
import { useEffect, useState } from 'react'
import 'animate.css'

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
      <div
        className='App text-offwhite overflow-hidden'
        style={{ background: '#2E3638' }}
      >
        <Navi isMobile={isMobile} />

        <Routes>
          <Route path='/' exact element={<HomeScreen />} isMobile={isMobile} />
          <Route path='/blogposts/:id' element={<BlogpostScreen />} />
          <Route path='/blogs' element={<Blog />} />
          <Route
            path='/services'
            element={<ServicesScreen />}
            isMobile={isMobile}
          />
          <Route path='/admin/new' element={<NewBlogpostScreen />} />
          <Route path='/chat' element={<ChatScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
