import { Suspense, lazy, useState } from 'react'
import './App.css'
import Form from './pages/Form'
import PostOFfices from './pages/Postoffices'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const Form = lazy(()=> import('./pages/Form'));
  const PostOffices = lazy( ()=> import('./pages/Postoffices'));

  return (
    <>
      <Routes>
        <Route path='' element={<Suspense><Form/></Suspense>} />
        <Route path='/post-offices' element={<Suspense><PostOffices/></Suspense>} />
      </Routes>
    </>
  )
}

export default App
