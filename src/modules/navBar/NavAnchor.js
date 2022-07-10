import React from "react";
import {Link} from 'react-router-dom'

let NavAnchor = (props)=>{
    let anchorPath = props.text.replace(' ','-')
   if(anchorPath === 'Home'){
       anchorPath = '/'
   }
    return(
        <Link to={anchorPath.toLowerCase()}>{props.text}</Link>
    )
}

export default NavAnchor