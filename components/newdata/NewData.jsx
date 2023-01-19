import "./newdata.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const NewData = (props) => {

    const deleteNote = () =>{
        props.deleteItem(props.id)
    }

  return (
    <>
      <div className="newdata">
        <h2 className="title">{props.title}</h2>
        <br />
        <p>{props.content}</p>
        <DeleteIcon onClick ={deleteNote}
          style={{
            position: "absolute",
            bottom: "4",
            right: "4",
            fontSize: "40px",
            color: "rgb(203, 49, 49)",
            backgroundColor:"#fff"
          }}
        />
      </div>
    </>
  );
};

export default NewData;
