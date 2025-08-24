import { useState } from 'react'
import Home from './pages/Home'
import GlobalRouting from './routing/GlobalRouting'
import GlobalContext from './globalContext/GlobalContext'

function App() {

  return (
    <GlobalContext>
      <GlobalRouting />
    </GlobalContext>
  )
}

export default App
