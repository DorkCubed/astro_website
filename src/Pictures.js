import React, { useEffect,useState } from "react";
import "./Pictures.css";
import Picture from "./Picture";
// import some from "./assets/astro_logo.png";
// import { S3Client, CreateBucketCommand, PutObjectCommand } from '@aws-sdk/client-s3';
// import { v4 as uuid } from 'uuid';
// import secrets from "./creds";


function Pictures(){
  const [list,change_list] =useState([1,2,3,4,5,6,7,8,9])
  // const list = [1,2,3,4,5,6,7,8,9]
  const list1 = ["00"+list[0]+".jpg","00"+list[1]+".jpg","00"+list[2]+".jpg","00"+list[3]+".jpg","00"+list[4]+".jpg","00"+list[5]+".jpg","00"+list[6]+".jpg","00"+list[7]+".jpg","00"+list[8]+".jpg"];
  async function next(){
    
    if(list[8]<=9){
      let blah=[];
    let a=0;
    list.map(e =>{
      e+=9;
      blah[a]=e;
      console.log(e)
      a++;
    })
    change_list(blah)
    console.log(list)
    }
    

};
function back(){
  if(list[0]>9){
    let blah=[];
    let a=0;
    list.map(e =>{
      e-=9;
      blah[a]=e;
      console.log(e)
      a++;
    })
    change_list(blah)
    console.log(list)
    console.log("back")
  }
}
     return(
        <>
        <div className="pictures">
            <Picture img_name = {list1[0]}/>
            <Picture img_name = {list1[1]}/>
            <Picture img_name = {list1[2]}/>
            <Picture img_name = {list1[3]}/>
            <Picture img_name = {list1[4]}/>
            <Picture img_name = {list1[5]}/>
            <Picture img_name = {list1[6]}/>
            <Picture img_name = {list1[7]}/>
            <Picture img_name = {list1[8]}/>
            {/* <Remove_border /> */}
            
        </div>
        <div className="gallery_buttons">
            <button onClick={back}  className="back"></button>
            <button onClick={next}  className="next"></button>
        </div>
        </>
     )
}

export default Pictures;
// function Remove_border(){
//   const [tilt_val,change_val] = useState("")
//   useEffect(()=>{
//     // tilt_val = "background:red;height:15vw;border-radius:4px;overflow:hidden;"
//     change_val("background:red;height:15vw;border-radius:4px;overflow:hidden;")
//     document.querySelectorAll("Tilt").forEach(e=>{
//         e.setAttribute("style",tilt_val)
//         console.log("done")
//     })
//     console.log("blahh")
//   },[])
// }


