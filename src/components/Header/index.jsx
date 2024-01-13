import React from "react";
import './index.css';
import './img/logo.png';
function Header (){
    return(<div className="header">
        <a href="/"> <img className=" logo" src="img/logo.png" /></a>
         <h4 className=" label"> Página de Login </h4>
    </div>
    );
}
export default Header; 