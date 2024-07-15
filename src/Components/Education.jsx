/* eslint-disable prettier/prettier */
import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <div
        style=
        {{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
      <h2>Education</h2>
      <br></br>
      <h3>2023-2025</h3>
      <br></br>
      <p>
        I am currently pursuing my Masters in Computer Applicaton from Institute of Engineering and
        and Technology, Lucknow.
      </p>

      <div className="education-grid">
        <div className="education-cell">
        <br></br>
          <h3>2020-2023</h3>
          <br></br>
          <p>Bachelors in Computer Science Computer Science from St. Johns College, Agra</p>
        </div>
        <div className="education-cell">
        <br></br>
          <h3>2020</h3>
          <br></br>
          <p>Intermediate from Queen Vivtoria College, Agra</p>
        </div>
        <div className="education-cell">
        <br></br>
          <h3>2018</h3>
          <br></br>
          <p>High School from St. Vincent Hr. Sec. School, Agra</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;
