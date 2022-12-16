import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [arr,updateArr]=useState([])

 function adder(note){
   updateArr((prevval)=>{
     return [...prevval,note];
   })
 }

 function deleter(id){
   updateArr((prevval)=>{
     return prevval.filter((singleitem,index)=>{
       return id!==index;
     })
   })
 }

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={adder}
      />
      {arr.map((singleitem,index)=>{
        return (
          <Note 
          key={index}
          id={index}
          title={singleitem.title}
          content={singleitem.note}
          onDel={deleter}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
