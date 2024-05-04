import React from "react";
import styles from "./Styles/About.module.css";
import Heading from "../Components/Heading/Heading";
import Sidetitle from "../Components/Sidetitle/Sidetitle";
function About() {
  return (
    <div data-aos="fade-up" className={styles.body}>
      <Heading data-aos="fade-up" title="ABOUT" />
      <div data-aos="fade-up" className={styles.box}></div>
      <div data-aos="fade-up" className={styles.content}>
        <p>
          <b>IEEE IAS SBC CEC</b> is esteemed for its ongoing success and dedication
          since its inception. Evolving into a valuable resource in the
          professional realm, it has demonstrated a commitment to growth and
          engagement. Through continuous efforts and perseverance, we have
          expanded our membership base and maintained a commendable retention
          rate. In 2023, <b>IEEE IAS SBC CEC</b> boasted a membership of 108 members,
          further solidifying its reputation as a thriving and engaged
          professional community . Within a relatively short timeframe, we have
          achieved recognition through the acquisition of three awards notably
          including the IAS CMD Outstanding Student Branch Chapter Award in 2023
          , a testament to its increasing membership and steadfast
          retention practices.
        </p>
       
        <b>OFFICE BEARERS</b>
        <br />
        <b>Chapter Advisor</b> : Dr. M. V. Rajesh <br />
        <b>Chairperson</b> : Akash G Nair <br />
        <b>Vice-Chairperson</b> : Archana Krishna <br />
        <b>Secretary</b>: Shwetha Liju
      </div>
      <Sidetitle title="ABOUT" />
    </div>
  );
}

export default About;

