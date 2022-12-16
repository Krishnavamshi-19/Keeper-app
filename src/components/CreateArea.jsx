import React, {useState} from "react";
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";


function CreateArea(props) {
  const [info,updateinfo]=useState({title:"",note:""});
  const [isExpanded,expandchngr]=useState(false)

 function changer(event){
   const {name,value}=event.target;
             updateinfo((preval)=>{
               return {
                 ...preval,
                 [name]:value
               }
             })
 }

 function submitter(event){
      props.onAdd(info);
      updateinfo({title:"",note:""})
      event.preventDefault()
 }

 function expander(){
    expandchngr(true);
 }

  return (
    <div>
      <form className="create-note" >
      { isExpanded &&
        (<input onChange={changer} name="title" value={info.title} placeholder="Title" /> )} 

        <textarea 
        onClick={expander}
        onChange={changer} 
        name="note" 
        value={info.note} placeholder="Take a note..." rows={isExpanded ? "3":"1"} />
        
      <Zoom in={isExpanded} >
        <Fab
        onClick={submitter}
        ><NoteAddOutlinedIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
