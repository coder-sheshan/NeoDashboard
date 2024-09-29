
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { ROUTES } from './utils/routes'
import Home from './pages/home'

function App() {


  return (
    <div className='m-0 p-0 bg-white dark:bg-black min-h-screen min-w-full'>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
