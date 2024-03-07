import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

      </Route>{/* End Dash */}


    </Routes>

  )
}

export default App
