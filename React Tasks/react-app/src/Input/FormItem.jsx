import { useEffect, useState } from "react"

const FormItem = (props) => {

  const [inputValue , setInputValue] = useState('')

  useEffect(()=> {
    console.log("input value",inputValue)
    if(inputValue === "qwerty"){
      alert("use effect")
    }
  },[inputValue])

  return (
    <>
      <input
        value={inputValue}
        onChange={(e)=>{
          console.log("Events",e)
          setInputValue(e.target.value)
        }}
      />

      <br />
      <p>Conditional rendering</p>

      {
        inputValue === "abc"
        ? <button>Test</button>
        : <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      }
    </>
  )
}

export default FormItem