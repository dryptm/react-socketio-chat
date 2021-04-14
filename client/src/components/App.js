import React,{ useState } from "react"
import Login1 from './Login1'

function App() {

  const [id,setId]=useState()
  
  return (
    <>
    {id}
    <Login1 onIdSubmit={setId} />
    </>
  )
}

export default App;
