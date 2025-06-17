import React from "react";
import "./Styles/Home.css";
import Line from "../Components/Line/Line";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { useEffect, useState, useRef } from "react";

// window.THREE = THREE;
function Home() {
  // window.addEventListener('load', function() {
  //   setTimeout(function() {
  //     document.querySelector('.loader-wrapper').style.display = 'none';
  //     document.querySelector('body').style.backgroundColor = '';
  //   }, 3000);
  // });
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x0,
          cloudColor: 0x1c1c1f,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0014.jpg?alt=media&token=e1dc37a9-5d6c-4fed-ae54-fdaa29219e2f",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0008.jpg?alt=media&token=288a1be9-37d7-4ef3-8806-ac969175ac19",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0016.jpg?alt=media&token=a631423b-b5b9-498b-a50f-6fe7a43c395d",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0018.jpg?alt=media&token=74c53e5d-9938-42c8-ad76-1ef06f252a1e",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0020.jpg?alt=media&token=e1461852-e76a-4f57-998b-75571ed4436a",
    "./gallery/image1.jpg",
    "./gallery/image2.jpg",
  ];

  return (
    <div>
      <div className="home">
        {/* <div class="loader-wrapper">
        <div class="loader"></div>
      </div> */}
        <div className="homebody" ref={myRef}>
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
              <div className="m-v-box" >
                <div>
                  <h1 >ABOUT US</h1>
                </div>
                <h3>IEEE SB CEC</h3>
                <p>
                IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.
                </p>
                <h3>IEEE IAS SBC CEC</h3>
                <p>
                IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.
                </p>
              </div>
            </div>
            
            <div data-aos="fade-up" className="col-lg-12">
              <div className="m-v-box">
                <div>
                  <h1>MISSION</h1>
                </div>
                <p>
                  The prime objective of IEEE Industry Applications Society is
                  to lead the way in the progress of science and technology by
                  establishing a strong link between theoretical concepts and
                  practical applications of electrical and electronic systems.
                  The ultimate aim of this endeavor is to provide concrete
                  benefits to humanity. IEEE IAS SBC CEC strives to promote
                  sustainable and economical developments towards the society.
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
                  conducted from 4th November to 5th November 2023 at the
                  College of Engineering Chengannur. <br></br> The event
                  comprised three parallel workshops based on nurturing the
                  technical skills of participants. The event also provided
                  hackathons, industrial visits, cultural events, talk sessions,
                  managerial training and internship opportunities.
                </p>
              </div>
            </div>
            <div className="carousel-part">
              <div className="carousel">
                <Carousel
                  showArrows={true}
                  interval={3000}
                  infiniteLoop={true}
                  autoFocus={true}
                  stopOnHover={true}
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
    </div>
  );
}

export default Home;
