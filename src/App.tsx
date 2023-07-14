import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  const [countries, setCountries] = useState([])

  return (
    <div className='bg-secondary dark:bg-secondary_dark w-full'>
      <Main>
        <Routes>
          <Route index path='/' element={<HomePage countries={countries} setCountries={setCountries} />}></Route>
          <Route path="/country/:name" element={<Details />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Main>
    </div>
  )
}

export default App
