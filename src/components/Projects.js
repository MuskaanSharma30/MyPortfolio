import React from 'react'
import tourismpic from "../tourismpic.png"
import fashionpic from '../fashionpic.png'
import foodpic from '../foodpic.png'
import hillhomepic from '../hillhomepic.png'
import todopic from '../todopic.png'

import Slider from "react-slick";

const Projects = 
() => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        //   slidesToShow: 1,
        //   slidesToScroll: 1
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll:1,
        // width:'100%',    
        autoplaySpeed: 2000,
    }
        
        
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         // centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
        
  
    return (
        <div className="project-container">
            <div className="Heading1"  id = "project">My Projects</div>
            <div className="project-name">
             <Slider {...settings}>
                <div>
                    <a href = "https://muskaansharma1.netlify.app/">
                      <img src ={tourismpic} alt = "pic1" className="pics"/>
                    </a>
                </div>
              <div>
                  <a href = "https://fashion-ms.netlify.app/">
                      <img src ={fashionpic} alt = "pic" className="pics"/>
                  </a>
              </div>
              <div>
                  <a href = "https://foodelicious-ms.netlify.app/">
                      <img src ={foodpic} alt = "pic" className="pics"/>
                  </a>
              </div>
              <div>
                  <a href = "https://tourism-ms.netlify.app/">
                      <img src ={hillhomepic} alt = "pic" className="pics"/>
                  </a>
              </div>
              <div>
                  <img src ={todopic} alt = "pic" className="pics"/>
              </div>
            </Slider>
            </div>
            </div>	
       
    )

}
export default Projects
