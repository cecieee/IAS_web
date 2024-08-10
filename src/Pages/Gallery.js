import React from 'react'
import Heading from "../Components/Heading/Heading"
import Sidetitle from "../Components/Sidetitle/Sidetitle"
import { Carousel } from 'react-responsive-carousel'
import Line from '../Components/Line/Line'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Styles/Gallery.css"
function Gallery() {

  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0014.jpg?alt=media&token=e1dc37a9-5d6c-4fed-ae54-fdaa29219e2f",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0008.jpg?alt=media&token=288a1be9-37d7-4ef3-8806-ac969175ac19",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0016.jpg?alt=media&token=a631423b-b5b9-498b-a50f-6fe7a43c395d",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0018.jpg?alt=media&token=74c53e5d-9938-42c8-ad76-1ef06f252a1e",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0020.jpg?alt=media&token=e1461852-e76a-4f57-998b-75571ed4436a",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0028.jpg?alt=media&token=395a19d2-57f8-4a90-a3b0-f955dbf34d6c",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0031.jpg?alt=media&token=d0a162db-49d0-47a0-80ad-6ad112ce3214",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0033.webp?alt=media&token=a8fc234d-2bfa-478b-a3a4-0f52bb51fa7c",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240503-WA0042.webp?alt=media&token=b984db0d-5922-47eb-bcba-b17bd7346b96",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Emergence%203.0%2FIMG-20240504-WA0001.jpg?alt=media&token=5e9486fa-2ab5-4705-b6e5-8894ccce3bfa",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG-20230419-WA0030.webp?alt=media&token=34b071aa-102f-4d1c-b02e-fa5ce31d4764",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG-20230419-WA0033(1).webp?alt=media&token=6d8f2fd3-305b-482b-ab4e-798d93b10d7b",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG_0354%20(1).webp?alt=media&token=684944de-5378-4f62-8511-34db76d9121c",
    "https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/gallery%2FIMG_0478%20(1).webp?alt=media&token=ecbe1b0b-59df-408f-9ef9-5de16a6b31b9"
    
  ];

  return (
    <div className='container-fluid'>
      <div className='m-5 gallery row'>
        <Heading title="GALLERY" />
        <Line />
      </div>
      <div className="carousel-part">
        <div data-aos="fade-up" className="carousel">
        <Carousel showArrows={true} interval={3000} infiniteLoop={true} autoFocus={true} stopOnHover={true} autoPlay={true}>
  {imageUrls.map((url, index) => (
    <div key={index}>
      <img alt='' src={url} />
    </div>
  ))}
</Carousel>
        </div>
      </div>
      <Sidetitle title="GALLERY" />
    </div>
  )
}

export default Gallery
