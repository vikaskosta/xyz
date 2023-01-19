import "./table.scss"

const Table = (props) => {
    const deleteData = () =>{
        props.deleteItem(props.id)
    }
  return (
    <>
        <div className="table">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <th style={{ width: "10%" }}>N</th>
                    <th style={{ width: "15%" }}>Title</th>
                    <th style={{ width: "40%" }}>Content</th>
                    
                    <th
                      colSpan="3"
                      style={{ width: "35%", textAlign: "center" }}
                    >
                      Action
                    </th>
                  </tr>

                  <tr>
                    <td>{props.id+1}</td>
                    <td>{props.title}</td>
                    <td>{props.textarea}</td>
                    <button><td style={{ color: "green" }}>Edit</td></button>
                    <button onClick={deleteData}><td style={{ color: "red" }}>Delete</td></button>
                    <td style={{ color: "blue" }}>Publish</td>
                  </tr>
                </tbody>
              </table>
            </div>
    </>
  )
}

export default Table