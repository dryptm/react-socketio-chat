import React from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import Login1 from './Login1'

function App() {

  const [id,setId]=useLocalStorage('id')
  
  return (
    <>
    {id}
    <Login1 onIdSubmit={setId} />
    </>
  )
}

export default App;
