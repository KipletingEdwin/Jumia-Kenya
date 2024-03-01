import React, { useEffect, useState } from "react";
import styles from "./Clearance.module.css";

function Clearance() {
  const [people, setPeople] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("image", formData.image);

    fetch("http://localhost:3000/people", {
      method: "POST",
      body: formDataToSend,
    })
      .then((res) => res.json())
      .then((info) => {
        console.log("Response:", info);
        // Optionally, update the state with the newly created person
        setPeople([...people, info]);
      })
      .catch((error) => console.error("Error:", error));

    setFormData({
      name: "",
      image: null,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPeople(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.clearanceContainer}>
        <h3>Clearance</h3>
        <div className={styles.myInputs}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            required
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {people.map((person, id) => {
  console.log(person); // Add this line to log the person object
  return (
    <div key={id} className={styles.menuItems}>
      <h4>{person.name}</h4>
      <img src={person.image} alt={person.name} />
    </div>
  );
})}
      </div>
    </section>
  );
}

export default Clearance;
