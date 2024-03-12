import React from "react";
import styles from "./HelpCentre.module.css";
import OrdersData from "../../Data/helpcentre.json";
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";     
import { CreditCard, LocalAtm, LocalShipping, Rotate90DegreesCcw,KeyboardArrowRightOutlined, EventNoteOutlined, PermIdentityOutlined, Send, CreditScore, Flight } from '@mui/icons-material'; // Corrected imports
import paymentsData from '../../Data/payments.json';

function HelpCentre() {
  return (
    <section className={styles.container}>
      <div className={styles.helpCentreContainer}>
        
        <div className={styles.helpCentre}>
          <h4>Help Center</h4>
          <h3> Hi, how can we help you?</h3>
        </div>

        <div className={styles.help}>
          {OrdersData.map((order, id) => (
            <div key={id} className={styles.orders}>
              <h3>{order.title}</h3>
              <img src={order.helpCentreImage} alt={order.title} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.search}>
        <TextField
          variant="outlined"
          placeholder='Type keywords like "return"'
          InputProps={{
            startAdornment: (
              <SearchIcon style={{ marginRight: "8px", color: "gray" }} />
            )
          }}
        />
      </div>

      {/* PAYMENT DIV */}
      <div className={styles.paymentContainer}>
        <div className={styles.paymentSection}>
          {paymentsData.map((pay, id) => (
            <div key={id} className={styles.payment}>
              {/* Rendering Material-UI icons based on iconSource */}
              {getIcon(pay.iconSource)}
              <h3>{pay.title}</h3>
              <div className={styles.KeyboardArrowRightOutlined}> 
              <KeyboardArrowRightOutlined className={styles.myIcon}/>
              </div>
            
            </div>
          ))}
        </div>
        <div className={styles.description}>

        </div>
      </div>
    </section>
  );
}

// Function to render Material-UI icons based on iconSource
const getIcon = (iconSource) => {
  switch (iconSource) {
    case 'CreditCard':
      return <CreditCard />;
    case 'LocalAtm':
      return <LocalAtm />;
    case 'LocalShipping':
      return <LocalShipping />;
    case 'Rotate90DegreesCcw':
      return <Rotate90DegreesCcw />;
    case 'EventNoteOutlined':
      return <EventNoteOutlined />;
    case 'PermIdentityOutlined':
      return <PermIdentityOutlined />;
    case 'Send':
      return <Send />;
    case 'CreditScore':
      return <CreditScore />;
    case 'Flight':
      return <Flight />;
    default:
      return null;
  }
};

export default HelpCentre;
