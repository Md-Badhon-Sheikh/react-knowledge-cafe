
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState([]);

  const handleBookmark = blog =>{
    // console.log(blog)
    const newBookmark = [...bookmarks, blog];
    setBookmarks (newBookmark);
  }

  const handleMarkAsRead = time =>{
    // console.log('marking as read time', time);
    const newReadingTime =(readingTime + time);
    setReadingTime(newReadingTime);
  }


  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-6xl mx-auto gap-3'>
        <Blogs handleBookmark = {handleBookmark} handleMarkAsRead ={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
      </main>
      

      
    </>
  )
}

export default App
