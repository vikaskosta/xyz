// import { useFormik } from "formik";
import React, {useState} from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./contactus.css";
// import { signUpSchema } from "./schemas";




const ContactUs = () => {
  
  const [user, setUser] = useState({
    firstname: "",
    email: "",
    mobile: "",
    query:""
  })

  
  const getUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const{name,email,mobile,query} = user;

    if(name && email && mobile && query){
      const res = await fetch(
        "https://firstblog-9a826-default-rtdb.firebaseio.com/firstblog.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            query
          }),
        }
      );
        console.log(user)
      if(res){
        setUser({
          name: "",
          email: "",
          mobile: "",
          query:""
        })
      }
    }else{
      alert("Please Fill All The Data")
    }
    };    

  return (
    <>
      <div className="container">
      <Sidebar />
        <div className="right">
          <Navbar />
          <div className="detail">
            <form method="POST" >
              
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={getUserData}
                  id="name"
                  autoComplete="off"
                  required
                />
          
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={getUserData}
                  id="email"
                  autoComplete="off"
                  required
                />
         
                <input
                  type="number"
                  placeholder="Mobile Number"
                  name="mobile"
                  value={user.mobile}
                  onChange={getUserData}
                  id="mobile"
                  autoComplete="off"
                  required
                />

                <textarea
                  type="checkbox"
                  placeholder="Query"
                  name="query"
                  value={user.query}
                  onChange={getUserData}
                  id="query"
                  autoComplete="off"
                  required
                />
                
              <button onClick={postData}>Submit</button>
            </form>
            <div className="hr">
              <hr />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
