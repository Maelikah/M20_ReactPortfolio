import React from "react";
import bgc from "../assets/bgc.jpg"
function Header(props) {
    return (
        <header className="flex-row space-between px-1">
        <h1>Eva Longoria </h1>
        <img src={bgc} alt="Cerro de la Silla"></img>
        {props.children}
        </header>
    );
}

export default Header;