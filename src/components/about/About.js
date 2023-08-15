import React from "react";
import "./About.css";
function About() {
  const data = [
    {
      cardImage: "./Assets/tax.png",
      cardHeading: "NHT Registration",
      cardPara:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere et vitae voluptatum quisquam inventore minima ad laborum delectus quidem expedita!",
        cardBtn: "File For Free"
    },
    {
      cardImage: "./Assets/file.png",
      cardHeading: "Filing for Individuals",
      cardPara:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere et vitae voluptatum quisquam inventore minima ad laborum delectus quidem expedita!",
        cardBtn: "File For Free"
    },
    {
      cardImage: "./Assets/dollar.png",
      cardHeading: "Filing for Businesses",
      cardPara:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere et vitae voluptatum quisquam inventore minima ad laborum delectus quidem expedita!",
        cardBtn: "File For Free"
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="about_section">
          {data.map((e) => {
            return (
              <div className="about_card">
                <div className="card_img">
                <img className="about_img" src={e.cardImage} alt="" />
                {/* <button className="card_button"></button> */}
                </div>
                
                <h1>{e.cardHeading}</h1>
                <p>{e.cardPara}</p>
                <button className="card_button">{e.cardBtn}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
