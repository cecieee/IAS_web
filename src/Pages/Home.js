import React from "react";
import "./Styles/Home.css";
import Line from "../Components/Line/Line";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
  // window.addEventListener('load', function() {
  //   setTimeout(function() {
  //     document.querySelector('.loader-wrapper').style.display = 'none';
  //     document.querySelector('body').style.backgroundColor = '';
  //   }, 3000);
  // });

  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG_0478%20(1).webp?alt=media&token=ecbe1b0b-59df-408f-9ef9-5de16a6b31b9",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG-20230419-WA0033(1).webp?alt=media&token=6d8f2fd3-305b-482b-ab4e-798d93b10d7b",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG_0354%20(1).webp?alt=media&token=684944de-5378-4f62-8511-34db76d9121c",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG-20230419-WA0030.webp?alt=media&token=34b071aa-102f-4d1c-b02e-fa5ce31d4764",
    // Add more URLs as needed
  ];

  return (
    <div className="home">
      {/* <div class="loader-wrapper">
        <div class="loader"></div>
      </div> */}
      <div className="homebody">
        <div className="container-fluid1 mid">
          <h1 className="heading1 row">
            <span data-aos="fade-up">INDUSTRY</span>
            <br />
            <span data-aos="fade-up" className=" col-lg-8 col-sm-12">
              APPLICATIONS
            </span>
            <span data-aos="fade-up" className="span1  col-lg-4 col-sm-12">
              SOCIETY
            </span>
          </h1>
          <h3 className="subheading">
            <span data-aos="fade-up">IEEE Student Branch Chapter</span>
            <br />
            <span>College of Engineering Chengannur</span>
          </h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div data-aos="fade-up" className="col-lg-12">
            <div className="m-v-box">
              <div>
                <h1>MISSION</h1>
              </div>
              <p>
                The prime objective of IEEE Industry Applications Society is to
                lead the way in the progress of science and technology by
                establishing a strong link between theoretical concepts and
                practical applications of electrical and electronic systems. The
                ultimate aim of this endeavor is to provide concrete benefits to
                humanity. IEEE IAS SBC CEC strives to promote sustainable and
                economical developments towards the society.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-12">
            <div className="m-v-box">
              <div>
                <h1>VISION</h1>
              </div>
              <p>
                IEEE Industry Applications Society assumes a crucial
                responsibility in promoting the progress of theoretical
                knowledge and practical application concerning the creation,
                development, and implementation of safe, eco-friendly, and
                intelligent electrical systems, equipment, and services. By
                fulfilling this role, the society aims to establish a
                collaborative platform that encourages learning, knowledge
                dissemination, and empowers professionals and researchers
                globally to make meaningful contributions to the field.
              </p>
            </div>
          </div>
          <div className="top-decor">
            <div>EMERGENCE 3.0</div>
            <div>EMERGENCE 3.0</div>
            <div className="em-3">EMERGENCE 3.0</div>
          </div>
          <div data-aos="fade-up" className="col-lg-12">
            <div className="em-pg">
              <div className="em-head">
                <h1>EMERGENCE 3.0</h1>
                <Line />
              </div>
              <h5>
                <i>Flagship Event of IEEE SB CEC</i>
              </h5>
              <p>
                EMERGENCE 3.0 was the third edition of our flagship event
                EMERGENCE, which is an All Kerala techno-managerial conclave,
                conducted from 4th November to 5th November 2023 at the College
                of Engineering Chengannur. <br></br> The event comprised three
                parallel workshops based on nurturing the technical skills of
                participants. The event also provided hackathons, industrial
                visits, cultural events, talk sessions, managerial training and
                internship opportunities.
              </p>
            </div>
          </div>
          <div className="carousel-part">
            <div className="carousel">
              <Carousel
                showArrows={true}
                interval={2000}
                infiniteLoop={true}
                autoFocus={true}
                stopOnHover={false}
                autoPlay={true}
              >
                {imageUrls.map((url, index) => (
                  <div key={index}>
                    <img alt="" src={url} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="bot-decor">
            <div>EMERGENCE 3.0</div>
            <div>EMERGENCE 3.0</div>
            <div className="em-3">EMERGENCE 3.0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
