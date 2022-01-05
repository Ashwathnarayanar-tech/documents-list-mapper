import React, { useState } from "react";
import styles from "./index.css";
import { useCssHandles } from 'vtex.css-handles';
import List from "./list/List";
const CSS_HANDLES = [ 'container','container_input','container_name','lable','buttn']
const DocumentsList = (props) => {
  const handles = useCssHandles(CSS_HANDLES)

  const [pinInput, setpinInput] = useState("");
  const [pin, setPin] = useState("");
  const urlData = props.query.zip;
  const productName = props.query.product; 

  return (
    <div className={handles.container}>
      <div className={styles.container1}>
        <div className={handles.container_input}>
          <div className={handles.container_name}>
            <h2>Select A {`${props.listName}`}</h2>
          </div>
          <div className={handles.lable}>
            <label>Enter Your Zip Code</label>
          </div>
          <div>
            <input
              className={styles.search}
              type="text"
              placeholder={urlData ? urlData : pin}
              onChange={(e) => {
                setpinInput(e.target.value);
              }}
            />
            <button
              className={handles.buttn}
              type="button"
              onClick={() => {
                setPin(pinInput);                
              }}
              style={{ backgroundColor: `${props.buttonColor}` }} >
              GO
            </button>
          </div>
        </div>
          </div>
      <List zipCode={urlData}
        productName={productName}
        pinCode={pin}
        listName={props.listName}
        schemaName={props.schemaName}
        dataEntityName={props.dataEntityName}
        cardShadow={props.cardShadow}
        buttonColor={props.buttonColor}      
        
      />
     
    </div>
  );
};

export default DocumentsList;
