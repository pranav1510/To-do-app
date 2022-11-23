import { useState } from "react";
import "./App.css";

const App = () => {

  const [data, setData] = useState([]);
  const [val, setVal] = useState("");
  const [show,setShow] = useState(true);

  return(
    <div className="container">
      <div className="outline">
        <header>
          <div className="heading">TO DO THINGS</div>
          <input placeholder="Add New" value={val} onChange={e => setVal(e.target.value)} onKeyUp={e => {
            if(e.key === "Enter") {
              setData([...data,val]);
              setVal("");
            }
          }}/>
        </header>
        <hr />
        <div className="items">
          {
            show? data.map((item,index) => {
              return <div className="rows" key={index} >
                <div>{item}</div>
                <button onClick={() => {
                  data.splice(index,1);
                  if(data === []) {
                    setShow(false);
                  } else {
                    setShow([data]);
                  }
                }}><i className="material-symbols-outlined">delete</i></button>
                </div>
            }) : null
          } 
        </div>
      </div>

    </div>
  )
}

export default App