import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import { Skill_List } from "./AboutDataInfo";

const AboutMe = () => {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const myAge = calculateAge("2003-04-04");

  return (
    <section style={{ margin: "0 auto" }}>
      <HeaderText headerTitle="About Me" />

      <div style={{ lineHeight: "1.6", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.5rem" }}>
          Hello! I'm{" "}
          <span style={{ color: "#007bff" }}>Sandhya Khadgi</span>.
        </h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "800px" }}>
          I am a <strong>dedicated Administrative & Finance Professional</strong>passionate about streamlining business
           operations and maintaining financial integrity. With a strong background in front
            desk management and bookkeeping, I specialize in balancing client relations with
             meticulous record-keeping to ensure organizational efficiency.
        </p>

        {/* Quick Info Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <div>
            <strong>Phone:</strong> 9803681543
          </div>
          <div>
            <strong>Email:</strong> sandhyakhadgi86@gmail.com
          </div>
          <div>
            <strong>Address:</strong> Dallu, Kathmandu-12
          </div>
          <div>
            <strong>Age:</strong> {myAge} Years
          </div>
        </div>
      </div>

      <HeaderText headerTitle="Skills & Tools" />

      <div
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {Skill_List?.map((data, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease",
              cursor: "default",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                padding: "10px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={data?.img}
                alt={data?.title}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                marginTop: "10px",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              {data?.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
