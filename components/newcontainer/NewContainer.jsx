import { useState } from "react";
import NewData from "../newdata/NewData";
import NewPost from "../newpost/NewPost";
import "./newcontainer.scss";

const NewContainer = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("hi")
    setAddItem((prevData) => {
      return [...prevData, note];
      
    });
    // console.log(note);

    
  };

  const onDelete = (id) =>{
    setAddItem((oldData)=>
        oldData.filter((currData,index) =>{
            return index !== id
  })
     )
  }



  return (
    <>
      <div className="newcontainer">
        <NewPost passNote={addNote} />
        <div className="newbie">
          {addItem.map((val, index) => {
            return (
              <NewData
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewContainer;
