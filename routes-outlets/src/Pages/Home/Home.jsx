import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  // Bruges til og reset vores inputs med
  const intialState = {
    name: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
  };

  const [state, setState] = useState(intialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  // Bruges så hvis ikke behøver at skrive state.name osv nede i vores value.
  const { name, lastname, address, city, zipcode } = state;

  console.log(state);

  return (
    <form className="form-main">
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Fornavn"
      />
      <input
        type="text"
        name="lastname"
        value={lastname}
        onChange={handleChange}
        placeholder="Efternavn"
      />
      <input
        type="text"
        name="address"
        value={address}
        onChange={handleChange}
        placeholder="Adresse"
      />
      <input
        type="text"
        name="city"
        value={city}
        onChange={handleChange}
        placeholder="By"
      />
      <input
        type="text"
        name="zipcode"
        value={zipcode}
        onChange={handleChange}
        placeholder="Zipcode"
      />

      <div className="formInfo">
        <div className="names">
          Firstname: {name} <br />
          Lastname: {lastname}
        </div>
        <div className="cityInfo">
          Address: {address} <br />
          City: {city} <br />
          Zipcode: {zipcode}
        </div>
      </div>

      <button onClick={() => setState(intialState)}>Reset</button>
    </form>
  );
};

export default Home;
