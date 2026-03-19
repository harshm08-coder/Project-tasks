import InterestList from "./Input/InterestList";
import { useState } from "react";

function App() {

  const [input,setInput] = useState("");
      const [interests,setInterests] = useState([]);
  
      const addInterest = () => {
          if(input.trim() === "") return;
  
          if(interests.includes(input.trim())){
              alert("Duplicate interests not allowed !");
              return;
          }
      
          setInterests([...interests,input.trim()]);
          setInput("");
      };

      const deleteInterest = (deleteIndex) =>{
          const newList = interests.filter((_,index) => index !== deleteIndex);
          setInterests(newList);
      };

  return (
    <div style={{textAlign:"center"}}>
      <InterestList input={input} setInput={setInput} interests={interests} setInterests={setInterests} addInterest ={addInterest} deleteInterest={deleteInterest}/>
    </div>
  );
}

export default App;