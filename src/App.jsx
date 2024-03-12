import { useState } from 'react'

import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Header/Blogs/Blogs'
import Bookmarks from './component/Header/bookmarks/Bookmarks'

function App() {
 

  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
