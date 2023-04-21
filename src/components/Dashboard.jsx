import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { Timeline } from "./Timeline";
import { Diagnostics } from "./Diagnostics";


export const Dashboard = () => {


  const navigate = useNavigate();
    const [currTab , changeTab] = useState("timeline");
    const [visits , addvisits] = useState([]);

    useEffect(() => {

      addvisits([{id : 1 , date:"12.12.2000",  type : "cardiac" , medicine : "dolo" , disease : "kkkk" , symptoms : "vjsanja" , severiarity : "vdsjdja"} , {id : 2 , type : "cardiac" , medicine : "dolo" , disease : "kkkk" , symptoms : "vjsanja" , severiarity : "vdsjdja"} ]);

    },[])
    
    const handleOnClick = (tabName) => 
        changeTab(tabName)

      const logoutFunc = () => {

        console.log("logged out");
        navigate("/login");
      }

    
  

    return (
        <>
        
        
        {/* <nav className="navbar" role="navigation" aria-label="main navigation">  */}
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="tabs is-centered">
  <ul>
    {/* <li class={"is-active"}><a>Pictures</a></li> */}
    <li className={currTab == "timeline" ? "is-active" : ""}><a onClick={()=>handleOnClick("timeline")}>Timeline</a></li>
    <li className={currTab == "diagnostics" ? "is-active" : ""}><a onClick={()=>handleOnClick("diagnostics")}>Diagnostics</a></li>
  </ul>
</div>

<div className="navbar-end">
  <div className="navbar-item">
    <div className="buttons" onClick={logoutFunc}>
      <a className="button is-primary" > logoout</a></div> </div>

</div>
  
</nav>

<div>
  {(currTab == "timeline") && <Timeline data={visits} />  }
  {(currTab == "diagnostics") && <Diagnostics />  }
</div>

      </>
      
    )
}