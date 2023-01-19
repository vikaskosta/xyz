import { useState } from "react";
import "./newpost.scss";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NewPost = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  

  
  const InputEvent = (e) => {
 
    let name = e.target.name;
    let value = e.target.value;

    setNote({...note, [name]:value})

    console.log(note);
  };

  const addEvent = () => {
    
    props.passNote(note);
    
    setNote({
      title: "",
      content: "",
    });
  

}
  
// }else{
//     alert("please fill the data")
//   }
  
  



  return (
    <>
      <div className="newpost">
        <form>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={InputEvent}
            autoComplete="off"
          />

          <textarea
            name="content"
            placeholder="Write Something..."
            value={note.content}
            onChange={InputEvent}
          />
          <Button
            onClick={addEvent}
            style={{
              width: "64px",
              borderRadius: "50%",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
          >
            <AddIcon
              style={{
                fontSize: "42px",
                color: "rgb(17, 144, 19)",
                zIndex: "1",
                borderRadius: "50%",
                width: "64px",
              }}
            />
          </Button>
          {/* <AddIcon style={{ fontSize: "50px" }} /> */}
        </form>
      </div>
    </>
  );
};

export default NewPost;
