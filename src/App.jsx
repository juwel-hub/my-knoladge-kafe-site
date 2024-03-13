import { useState } from 'react'

import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Header/Blogs/Blogs'
import Bookmarks from './component/Header/bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)
  const handleBookmark=blog =>{
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }
const handleTime=(time,id)=>{
  setReadingTime(readingTime+time)
  const remainingBookmaek=bookmarks.filter(bookmark=>bookmark.id !==id)
  setBookmarks(remainingBookmaek)
}
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark} handleTime={handleTime}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
