import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuildingDescription from "./component/BuildingDescription";
import { useParams } from 'react-router-dom'; 


function Building() {
    const { id } = useParams(); 
    
    return (
        <div> 
            <Navbar active="1"/> 
            <BuildingDescription id={id ? parseInt(id) : 0} />
            <Footer/>
        </div> 
    );
}

export default Building;
