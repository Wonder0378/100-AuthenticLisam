import { useEffect, useState } from 'react'
import { getURL, putURL } from './Server/backendComs'
import './App.css'
import Header from './Header.jsx'
import MainWindow from './MainWindow/MainWindow.jsx'
import SideBar from './SideBar/SideBar.jsx'
import TopBar from './TopBar/TopBar.jsx'
import CourseWindow from './CourseWindow/CourseWindow.jsx'
import { signIn } from './Authentication'

function App() {

  const [page, setPage] = useState("main")

  useEffect(() => {
    getURL().then(url => {
      if(url != "/") {
        putURL("/");
        signIn(); 
      }
    })
  })

  const renderPage = () => {
    switch (page) {
      case "course":
        return <CourseWindow setPage={setPage} />
      case "main":
      default:
        return <MainWindow setPage={setPage} />
    }
  } 

  const id = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

  return (
    <div>
      <Header/>
      <div className='backgroundWindow'>
        <SideBar/>
        <div className="mainWindowAndTop">
          <TopBar page={page} setPage={setPage}/>
          {renderPage()}
        </div>
        
      </div>
    </div>
  )
}

export default App;
