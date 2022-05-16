import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";

const CreateFeedback=()=>{
    // take the params from url
const {serviceID}=useParams()
// write state for rate , comment and user
const[rate,setRate]=useState("")
const [comment,setComment]=useState("")
const [user,setUser]=useState("")
// take the token form localstorage
const token =localStorage.getItem("token")
// write function for clickSend
const clickSend=()=>{
    setUser(jwtDecode(token)._id)
    // use axios to send data to the back end
    axios.post(`"/service/${serviceID}/feedback`,{
        rate:rate,comment:comment,user,user},{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
    )}

return <>
<p>Rate</p>
<select>
<option onChange={(e)=>{
    setRate(e.target.value)
}}>1</option>
<option onChange={(e)=>{
    setRate(e.target.value)
}}>2</option>
<option onChange={(e)=>{
    setRate(e.target.value)
}}>3</option>
<option onChange={(e)=>{
    setRate(e.target.value)
}}>4</option>
<option onChange={(e)=>{
    setRate(e.target.value)
}}>5</option>

</select>
<p>feedback</p>
<input placeholder="Feedback" onChange={(e)=>{
    setComment(e.target.value)
}}/>
<button onClick={clickSend}>Send</button>
</>
}
export {CreateFeedback}