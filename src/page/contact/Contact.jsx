import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { useMode } from "../../layout/ModeContext";
import { TextField } from "../../components/Form/TextField";

const Contact = () => {
  const { mode } = useMode();
  return (
    <div>
      <HeaderText headerTitle="Get in Touch" />
      <div style={{ width: "100%", height: "100px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.79760373319334!2d85.30158410284363!3d27.706882805114535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f7bbecc579%3A0xfd300f89ae1b09ca!2zTGFraGF0aXJhdGhhLCDgpJXgpL7gpKDgpK7gpL7gpKHgpYzgpIEgNDQ2MDA!5e0!3m2!1sne!2snp!4v1769409137051!5m2!1sne!2snp"
          width="100%"
          height="250px"
          style={{ filter: mode === "dark" ? "invert(100%)" : "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "150px",
        }}
      >
        <div>
          <h5>ADDRESS .....Dallu, Kathmandu-12</h5>
          <h5>PHONE .....9803681543</h5>
        </div>
        <div>
          <h5>EMAIL .....sandhyakhadgi86@gmail.com</h5>
          <h5></h5>
        </div>
      </div>
      <HeaderText headerTitle="Contact Form" />
      <div style={{ width: "97%", display: "flex", gap: "2rem" }}>
        <TextField width="50%" placeholder="Full Name" />
        <TextField width="50%" placeholder="Email Address" />
      </div>
      <TextField width="97%" placeholder="Your Message" textarea={true} />
      <button
        style={{
          backgroundColor: "#EFCB89",
          border: "1px solid #E5E5E5",
          padding: "9px",
          borderRadius: "6px",
          width: "144px",
          color: "black",
          fontWeight: "bold",
          boxShadow: "inherit",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
