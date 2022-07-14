import React ,{useState} from "react";
import "./style.css";


export default function App() {

  const obj=[{item:10,
              name:"a"},
             {item:20,
              name:"b"}]
  const handler=(name,opretion)=>{
    setObj((preState)=>{
         return {...preState,[name]:opretion === "i" ? obj[name]+1:obj[name]-1}})
    }

    const [total, setTotal]=useState(0)
    
    const addItem=(opretion,value,item)=>{
      // console.log(opretion,value,item)
      //  console.log(item)
      
      setTotal((preState)=>{
        // {...preState,opretion === "i" ? obj[item]+{item}:obj[item]-{item}}
        // return {...preState,[total]:opretion === "i" ? total+item:total-item}
     return (opretion=== value ? preState+item:preState-item)
    }) } 
    console.log(total)
    return (
    <div>
      <button onClick={()=>handler("a","i")}>i age</button>
      <button onClick={()=>handler("a","d")}>d age</button>
      {obj.map((item,index)=>(
        <div style={{backgroundColor:"green",margin:10,width:200}}>
        <h1>{item.name}</h1>
         <span>{item.item}<button onClick={()=>addItem("i","i",item.item)}>Add</button>
         <button onClick={()=>addItem("i","d",item.item)}>Remove</button></span>
          </div>
       ) )}
       <div>Total:</div>
    </div>
  );
}
