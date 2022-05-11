import React from "react";
import { Link } from "react-router-dom";
import "./Stocktrackmain.css";
import Note from "./Note";
import {Button} from "react-bootstrap";
import { borderRadius } from "@mui/system";


function Stocktrackmain(){
    return(
        <div className="stock_track_main">
            
          <div className="ui_top">
            <img src="https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt=""/>

            

            <h1> STOCK  TRACKING</h1>
          </div>
          <br/><br/>

          <div>
              <Note topic="Stock Collection"
              paragraph="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
              cuando un impresor "
              location="/stockTag"
              pageName="Go to Stock Collection Page >>"/>

              <Note topic="Shipping Details"
              paragraph="We ship to Canada, Australia, New Zealand, and the United Kingdom via USPS Priority Mail
               International. Allow 2-3 weeks for international deliveries. Please contact us in advance if your 
               order will be over $500 so that we can provide you with the best shipping option and rate."
               location="/shipments" 
               pageName="Go to Shipments Data Page >>"/>

                <Note topic="Supplier Details"
                paragraph="The Supplier Interface of Agile PCM helps you manage your RFQ Responses. The sourcing 
                manager creates the RFQ and sends it to the suppliers. As a supplier user, you can submit responses
                 to the sourcing manager, view attachments, view the history of your RFQ Responses and 
                 (with the appropriate privileges) import or export responses, run reports, and collaborate in price
                  management. "
                  location="/suppliers"
                  pageName="Go to Suppliers Data Page >>"/>

              </div>

              <div style={{
                     margin:"0",
                     position:"absolute",
                     left: "35%",
                    
              }}>
            <Link to="/dashboard">
                <Button style={{border:"3px solid green", width:"400px", marginBottom:"50px", backgroundColor:"black", height:"50px", borderRadius:"20px"}}> {"<<"} Navigate to Dashboard</Button>
            </Link>
            </div> 




            <br/><br/>
            {/* <Link to="/stocks"> Go to stock Data Page</Link><br/>
            <Link to="/shipments">Go to Shipment Data Page</Link> <br/>
            <Link to="/suppliers">Go to Supplier Data Page</Link> */}

        </div>
    );
}

export default Stocktrackmain;