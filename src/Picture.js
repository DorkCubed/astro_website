import React from "react";
import './Picture.css';
import blah from "./assets/gallery_background.png";
import Tilt from "react-vanilla-tilt";

import { useEffect, useState } from "react";

function Picture(props) {
  // const [img, setImg] = useState("");
  // const httpGet = async (url, file) => {
  //   const response = await fetch(url + "/" + file);

  //   if (!response.ok) {
  //   //   throw new Error(HTTP error! status: ${response.status});
  //   console.log("Errr")
  //   }

  //   const imageBlob = await response.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
    // const tilt_val = "background:red;height:15vw;border-radius:4px;overflow:hidden;"
    // document.querySelectorAll(".tilt").forEach(e=>{
    //      e.setAttribute("style",tilt_val)
    // })
  // };

  // const url = "https://f003.backblazeb2.com/file/Astro-Gallery";

  // useEffect(() => {
  //   httpGet(url, "not-not-blank.png");
  // }, []);
//   console.log(props.img_name)0-p
  // const tilt_val = "background:red;height:15vw;border-radius:4px;overflow:hidden;"
  // document.querySelectorAll(".tilt").forEach(e=>{
  //     e.setAttribute("style",tilt_val)
  // })
  const src1 = "https://raw.githubusercontent.com/DorkCubed/astro_gallery/main/"+props.img_name
  return (
    <Tilt style={{background:"green"}} className="tilt">
    <div className="picture">
      {/* <h1>Backblaze B2 API</h1> */}
      <img 
      width="100%" 
      loading="lazy"
      src={
        src1
      }
      alt="Astro Gallery" />
    </div>
    </Tilt>
   );
  }
  export default Picture;

// function Picture() {
//     return(
//         <>
//         <Tilt>
//         <div className="picture">
//             hello
//             <img width="100px" src={blah} alt="blah"/>
//         </div>
//         </Tilt>
//         </>
//     )
// }

// export default Picture;