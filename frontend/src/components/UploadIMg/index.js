import "./style.css"
import React, { useState } from 'react'



const UploadImg = ({img,setImg}) => {
const [image, setImage ] = useState("");
const [ url, setUrl ] = useState([]);
const uploadImage = () => {
const data = new FormData()
data.append("file", image)
data.append("upload_preset", "Project4")
data.append("cloud_name","halhouli")
fetch("  https://api.cloudinary.com/v1_1/halhouli/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data => {
    console.log(data.url);
    console.log(img);
    setImg([...img,data.url])
    


    console.log(img);
setUrl(data.url)
})
.catch(err => console.log(err))
}
return (
<div>
<div>
<input type="file" className='inputImg' onChange= {(e)=> setImage(e.target.files[0])}/>
<button className='buttonImg' onClick={uploadImage}>Upload</button>
</div>
{img.map((element,index)=>{
    return <img src={element} className="uploadedImg"/>
})}


</div>
)
}
export default UploadImg;
