import React, {useEffect, useState} from "react";
import styles from "./Clearance.module.css";

function Clearance() {
  const [people, setPeople] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/people")
    .then((response) => response.json())
    .then((data) => setPeople(data));
  },[]);


  return (
    <section className={styles.container}>
      <div className={styles.clearanceContainer}>
        <h3>Clearance</h3>
        {
          people.map((person, id)=>(
            <div key={id} className={styles.menuItems}>
              <h4>{person.name}</h4>
              <img src={person.image_url} alt={person.name}/>
            </div>
          ))
        }

        

        
        </div>
    </section>
  );
}

export default Clearance;
