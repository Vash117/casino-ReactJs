import React from "react";
import NavAnchor from './NavAnchor.js'
const NotLogged = () =>{

    return(
<div className="user-nav">
<NavAnchor text='Log In'/>
<NavAnchor text='Sing up'/>
</div>
    )
}

export default NotLogged