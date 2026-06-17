import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import TableGrid from "./components/TableGrid"; 
 
function Table() { 
  return ( 
    <div> 
        <Navbar active="2"/> 
        <TableGrid/>
        <Footer />
    </div> 
  ); 
} 

export default Table; 