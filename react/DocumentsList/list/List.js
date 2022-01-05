import React, { useState, useEffect } from "react";
import styles from "./List.css";
import { makeAPICall } from "../httpCall";
import Card from "./Card/Card";

const List = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const get_location = window.location.href;
    const locationArr = get_location.split("/");
    const documentsListURL = locationArr[0] + "//" + locationArr[2]; 
    const getdocuments = async () => {      
      const DataFetchURL = `/api/dataentities/${props.dataEntityName}/search?_schema=${props.schemaName}&_fields=name,address,phone,zipNo,hostURL,locationURL,id`;
      const appURL = documentsListURL + DataFetchURL;
      const responseData = await makeAPICall(appURL, "GET", "0-100");
      setData(responseData);
    };
    getdocuments();
  }, []);

  //================================
  let list;

  // case 1: if user is redirected from PDP-------------------------------------------------------
  if (props.productName) {
    list = props.zipCode.trim() //if user enters zipNo
      ? data
          .filter((document) => document.zipNo == props.zipCode)
          .map((document, i) => {
            return (
              <Card
                key={document.name}
                index={i + 1}               
                name={document.name}
                address={document.address}
                phone={document.phone}
                zipNo={document.zipNo}
                hostURL={document.hostURL}
                locationURL={document.locationURL}
                listName={props.listName}
                buttonColor={props.buttonColor}
                cardShadow={props.cardShadow}
                link={
                  document.hostURL &&
                  `${document.hostURL}/${props.productName}/p?seller=${document.name}`
                }
              />             
            );
          })
      : props.pinCode.trim()
      ? data
          .filter((document) => document.zipNo == props.pinCode) //filter by zipNo if user redirected from pdp enters zipNo in documents page
          .map((document, i) => {
            return (
              <Card
              key={document.name}
              index={i + 1}
                name={document.name}
                address={document.address}
                phone={document.phone}
                zipNo={document.zipNo}
                hostURL={document.hostURL}
                locationURL={document.locationURL}
                listName={props.listName}
                buttonColor={props.buttonColor}
                cardShadow={props.cardShadow}
                link={
                  document.hostURL &&
                  `${document.hostURL}/${props.productName}/p?seller=${document.name}`
                }
              />
            );
          })
      : data.map((document, i) => {
          //show all documents if user coming from pdp does not enter zipNo
          return (
            <Card
            key={document.name}
            index={i + 1}
              name={document.name}
              address={document.address}
              phone={document.phone}
              zipNo={document.zipNo}
              hostURL={document.hostURL}
              locationURL={document.locationURL}
              listName={props.listName}
              buttonColor={props.buttonColor}
              cardShadow={props.cardShadow}
              link={
                document.hostURL &&
                `${document.hostURL}/${props.productName}/p?seller=${document.name}`
              }
            />
                     );
        });
  
  }

  // case 2: if user is redirected from other page except PDP------------------------------------
  else
    list = props.pinCode.trim()
      ? data
          .filter((document) => document.zipNo == props.pinCode) //filter by zipNo if user enters zipNo

          .map((document, i) => {
            return (
              <Card
              key={document.name}
              index={i + 1}
                name={document.name}
                address={document.address}
                phone={document.phone}
                zipNo={document.zipNo}
                hostURL={document.hostURL}
                locationURL={document.locationURL}
                listName={props.listName}
                buttonColor={props.buttonColor}
                cardShadow={props.cardShadow}
                link={document.hostURL}
              />
             
            );
          })
      : data.map((document, i) => {
          //show all documents if user enters no zipNo
          return (
            <Card
            key={document.name}
            index={i + 1}
              name={document.name}
              address={document.address}
              phone={document.phone}
              zipNo={document.zipNo}
              hostURL={document.hostURL}
              locationURL={document.locationURL}
              listName={props.listName}
              buttonColor={props.buttonColor}
              cardShadow={props.cardShadow}
              link={document.hostURL}
            />            
          );
        });

  return (
    <div className={styles.list}>
      <div className={styles.list_name}>
        <h2>Your Nearest {`${props.listName}s`}</h2>
      </div>
      {list}
    </div>
  );
};

export default List;
