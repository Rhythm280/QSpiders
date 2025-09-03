import { RouterProvider } from 'react-router-dom'
import routing from './routing/GlobalRouting'
import GlobalContext, { GlobalVar } from './globalContext/GlobalContext'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <GlobalContext>
      <Toaster />
      <RouterProvider router={routing} />
    </GlobalContext>
  )
}

export default App
