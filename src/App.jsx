import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cards from './pages/Cards.jsx'
import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx'
import Subscription from './pages/Subscription.jsx'
import MainPage from './Layout/MainPage.jsx'
import Watch from './pages/Watch.jsx'
import Properties from './pages/properties.jsx'


export default ()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}>
        <Route index path='/home' element={<Home/>}/>
        <Route path='/whattowatch' element={<Cards/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/properties'element={<Properties/>}/>
      </Route>
      <Route path='/subscription' element={<Subscription/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}