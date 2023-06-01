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

function App() {
  return (
    <Router>
      <div className='App bg-graydark overflow-hidden'>
        <Navi />

        <Routes>
          <Route path='/' exact element={<HomeScreen />} />
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
