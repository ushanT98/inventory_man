import React from "react";
import { Link } from "react-router-dom";
import Stocktable from "./Stocktable";

function Stocks(){

    return(
        <div style={{backgroundImage: `url("https://welpmagazine.com/wp-content/uploads/2020/09/manufacturing-inventory.jpg")`,
         backgroundRepeat:"no-repeat",
         backgroundAttachment:"fixed",
         backgroundSize:"100% 100%",
         height:"10000px",
      
         
          }}>
            
            <h2> Stock Data Page </h2>
            

            <Stocktable />

            <Link to="/"><button style={{
                padding: "1px 10px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "rgb(5, 39, 18)",
                color: "white",
                height: "70px",
                width: "400px",
               
                
            }}> {"<<< "}Go back to Stock Tracking Main Page </button></Link>
        </div>
    )
}

export default Stocks;