import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

// function Carder(singleinfo){
//     return <Card
//     key={singleinfo.key}
//         title={singleinfo.title}
//         info={singleinfo.content}
//     />; 
// }


function Note(props) {

  function onBtn(){
    props.onDel(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
      onClick={onBtn}
      
      ><p><DeleteIcon/></p></button>
    </div>
  );
}

export default Note;
