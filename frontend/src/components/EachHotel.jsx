import React from "react";
import Hotel from "./Hotel";

const EachHotel = () => {
  return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Hotel 
          name="Grand Hotel" 
          image="https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQHaE4?w=283&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          price={120} 
          location="New York, USA"
          description="This is a very good hotel. Rooms are very neat and clean. People can ejnoy a good time here. It has a lot of features here."
        />
      </div>
  );
};

export default EachHotel;
