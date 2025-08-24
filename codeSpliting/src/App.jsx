import React, { Suspense } from 'react'

const Home = React.lazy(() => import("./components/Home"))
const Login = React.lazy(() => import("./components/Login"))
const Signup = React.lazy(() => import("./components/Signup"))
const Courusal1 = React.lazy(() => import('./components/Courusal1'))
const Courusal2 = React.lazy(() => import('./components/Courusal2'))

function App() {
  // if i dont use code splting here then when this application will get loaded then all the components will get loaded.
  return (
    // so to solve this proplen we wull use code spliting.
    // here we will fist load first 3 somponents first then and rest of then components we will load when we scroll down.
    // because in our UI onlly first 3 components are visible.
    // what will code splliting dio it split our code in small small chunks to reduce the loading time (lazy loading: ).
    <>
      {/* first make the components when will load later lazy */}
      <Suspense fallback={<div>Loading....</div>}>
        <Home />
      </Suspense>

      <Suspense fallback={<div>Loading....</div>}>
        <Login />
      </Suspense>
      <Suspense fallback={<div>Loading....</div>}>
        <Signup />
      </Suspense>

      <Suspense fallback={<div>Loading....</div>}>
        <Courusal1 />
      </Suspense>

      <Suspense fallback={<div>Loading....</div>}>
        <Courusal2 />
      </Suspense>
    </>
  )
}

export default App
