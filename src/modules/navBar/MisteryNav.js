import React from "react";
import MisteryNavSingle from './MisteryNavSingle'
import { useState, useEffect } from "react";


const MisteryNav = (params)=>{
    
 
       
 
    return (
        <div className="mistery-nav">
            <MisteryNavSingle   misteryColor='purple' name='IRON' price={params.misterys.iron}/>
            <MisteryNavSingle   misteryColor='#CD7F32' name='BRONZE' price={params.misterys.bronze}/>
            <MisteryNavSingle  name='SILVER' price={params.misterys.silver}/>
            <MisteryNavSingle  name='GOLD' price={params.misterys.gold}/>
        </div>
    )
}

export default MisteryNav

