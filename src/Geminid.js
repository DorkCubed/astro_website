import React, { useState } from 'react';
import './Geminid.css';
// import {motion} from "framer-motion";


function Geminid(props){
    
    // const values = "--angle:"+ props.angle+";--end_x:"+props.end_x+";--end_y:"+props.end_y+";--start_x:"+props.start_x+";--start_y:"+props.start_y+";--size:"+props.size+";--opacity:"+props.opacity;
    
    // document.querySelector(":root").setAttribute("style",values);
    
    
    return(
        <>
        
        <div className='geminid'  >
            {/* <motion.div></motion.div> */}
            <div className='geminid_head'></div>
            <div className='geminid_tail'></div>
        </div>
        </>
    )
}

export default Geminid;