import React from 'react'
import ExecomPic from '../Components/Execom/ExecomPic'
import Heading from '../Components/Heading/Heading'
import Line from '../Components/Line/Line'
import './Styles/Execom.css'
import Sidetitle from '../Components/Sidetitle/Sidetitle'
import {Razeen} from "../assets/RAZEEN RIAZ.jpg"
import AOS from 'aos'

AOS.init({
  duration: 1000
})

function Execom() {

  return (
    <div className='execom container-fluid'>
      <div className='m-5'>
        <div className='row'>
        <Heading title="EXECOM '25"  />
        <Line />
        </div>
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Haseena P Y" position='Chapter Advisor' link="https://firebasestorage.googleapis.com/v0/b/ieee-link-task-by-hari.appspot.com/o/WhatsApp%20Image%202025-03-19%20at%2014.02.36_1e1ca4ad.jpg?alt=media&token=1cd7608c-b743-4cb0-b0aa-b2641adc53c8"/>
          <ExecomPic position="Chairperson" name='Archana Krishna' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FArchana.png?alt=media&token=d3c8f987-1f06-4191-8235-261644df3c6b"/>
          <ExecomPic position="Vice-Chairperson" name='Razeen Riaz' link='https://firebasestorage.googleapis.com/v0/b/ieee-link-task-by-hari.appspot.com/o/RAZEEN%20RIAZ.jpg?alt=media&token=f84c6e33-b543-4693-81f6-e9c47f3faa30'/>
          <ExecomPic position="Secretary" name='Shwetha Liju' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FShwetha.png?alt=media&token=a002b00f-6645-4b02-ab38-89013df5f984"/>
        </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title="EXECOM '24"  />
        <Line />
        </div>
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="M  V Rajesh" position='Chapter Advisor' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FScreenshot_20230406-1127292.webp?alt=media&token=7f6e235b-bd21-4f73-9699-c6388f5b0992"/>
          <ExecomPic position="Chairperson" name='Akash G Nair' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FIMG_4383.webp?alt=media&token=84f95a93-2451-4068-b67e-6bcec62cbae3"/>
          <ExecomPic position="Vice-Chairperson" name='Archana Krishna' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FArchana.png?alt=media&token=d3c8f987-1f06-4191-8235-261644df3c6b"/>
          <ExecomPic position="Secretary" name='Shwetha Liju' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FShwetha.png?alt=media&token=a002b00f-6645-4b02-ab38-89013df5f984"/>
        </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title="EXECOM '23"  />
        <Line />
        </div>
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="M  V Rajesh" position='Chapter Advisor' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FScreenshot_20230406-1127292.webp?alt=media&token=7f6e235b-bd21-4f73-9699-c6388f5b0992"/>
          <ExecomPic position="Chairperson" name='Swathy Sekhar' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FSwathy%20Sekhar.webp?alt=media&token=bbce2041-6ca0-4f7a-a2f1-eefe275c378b"/>
          <ExecomPic position="Vice-Chairperson" name='Akash G Nair' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FIMG_4383.webp?alt=media&token=84f95a93-2451-4068-b67e-6bcec62cbae3"/>
          <ExecomPic position="Secretary" name='Rohan K Abraham' link="https://firebasestorage.googleapis.com/v0/b/ieee-ias-6a71e.appspot.com/o/Execom%2FIMG_20230404_010046.webp?alt=media&token=e8bb3b28-94ec-4b13-870f-46cce65ac1a9"/>
        </div>
        
      </div>
      <Sidetitle title="EXECOM"/>
    </div>
  )
  
}

export default Execom
