import React from "react";
import Geminid from "./Geminid";

function All_geminids(){
    return(
        <>
        <Geminid angle="205deg" end_x="125vw" end_y="60vw" start_x="-3vw" start_y="10vw" size="0.3vw" opacity="0.6"/>
        <Geminid angle="205deg" end_x="125vw" end_y="55vw" start_x="-3vw" start_y="5vw" size="0.2vw" opacity="0.5"/>
        {/* <Geminid angle="90deg" end_x="125vw" end_y="55vw" start_x="-3vw" start_y="5vw" size="0.2vw" opacity="0.5"/> */}
        </>
    )
}

export default All_geminids;