import { Route, Routes } from 'react-router-dom'


const Main = () => {

  asdasdad


  return (
    <div className = "Main">
      
      <Routes>
        <Route path="/ComponentA" 
        element={<ComponentA/>} />
        <Route path ="/componentB"
        element={<ComponentB/>}/>
        <Route path="/" element={
        <Home userName={userName}/>}/>
      </Routes>

    </div>
  )
}
export default Main