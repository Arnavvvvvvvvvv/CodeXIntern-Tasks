import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [strlen, setstrlen] = useState(8)
  const [str, setstr]= useState("")

  const genstring=()=>{
    const chars= "abdksnskwjwdnJFNDanfdben$#^#!NDSJERF#J#JJ%GndDNSJSsJdkdtfDJDKEOENH$J^K6222&*#rnrj4^&nrj5Y54j34"
    let temp=""

    for(let i=0; i<strlen; i++){
      temp+= chars[Math.floor(Math.random()*chars.length)]
    }
    setstr(temp)
  }

  const getlength=(e)=>{
    e.preventDefault()
    setstrlen(e.target.value)
  }

  useEffect(()=>{
    genstring()
  }, [strlen])

  return (
    <div>
      <p>Enter length of string:</p>
      <input type="number" onChange={getlength}/>
      <h2>Random characters of length: {str}</h2>
    </div>
  )
}

export default App