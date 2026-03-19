

function InterestList({input,setInput,interests,addInterest,deleteInterest}){
    
    return (
        <div>
            <h2>Dynamic Interest List</h2>

            <input type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter Your Interest"/>

                    <button onClick={addInterest}>Add</button>

                    {interests.length === 0 && (
                        <p>No interests added yet. Start typing above !</p>
                    )}

                    <ul>
                        {interests.map((item,index)=>{
                            return(
                            <li key={index}>
                                {item}
                                <button onClick={() => deleteInterest(index)} id="delete">X</button>
                            </li>
                            );
                        })}
                    </ul>
        </div>
    );
}

export default InterestList;