import React from "react";
import styles from "./Card.css";
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = ['card', 'details','containerLocation', 'location','locationMap','location_img', 'buttonlink'];

const Card = (props) => {
   
    const handles = useCssHandles(CSS_HANDLES);
    return ( 
        <div key={props.name} className={handles.card} style={{ boxShadow: `${props.cardShadow}`=="true"?"0 4px 8px 8px rgba(0, 0, 0, 0.2" : "" }} >
            
            <div className={handles.containerLocation}>
                <div className={handles.location}>
                {props.locationURL?<iframe src={`${props.locationURL}`} style={{ width: "190px", height: "150px" , border:0}} className={handles.locationMap}></iframe>
                    :<img
                        src={"https://echidna.vteximg.com.br/arquivos/location.png"}
                        style={{ width: "150px", height: "150px" }}
                        alt="location"
                        className={handles.location_img}
                    /> }        
                </div>
            </div>
            <div className={styles.cont_details}>
                <div className={handles.details}>
                    <h3>{`${props.index}. ${props.name}`}</h3>
                    <p>{props.address}</p>
                    <p>{props.phone}</p>
                   
                </div>
            </div> 
    
            <div >
                <a  className={handles.buttonlink} 
                    href={props.link}
                    style={{ backgroundColor: `${props.buttonColor}` }}                
                >
                    SELECT THIS {`${props.listName.toUpperCase()}`}
                </a>
                </div>
        </div>
    );
}

export default Card;
  