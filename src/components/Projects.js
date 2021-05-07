import React from 'react'
import tourismpic from "../tourismpic.png"
import fashionpic from '../fashionpic.png'
import foodpic from '../foodpic.png'
import hillhomepic from '../hillhomepic.png'
import todopic from '../todopic.png'
const Projects = 
() => {
  
    return (
        <div>
            <div className="Heading1"  id = "project">My Projects</div>
           <div className="project-name">
              <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><a href = "https://muskaansharma1.netlify.app/"><img src ={tourismpic} alt = "pic1" className="pics"/></a></div>
              <div><a href = "https://fashion-ms.netlify.app/"><img src ={fashionpic} alt = "pic" className="pics"/></a></div>
              <div><a href = "https://foodelicious-ms.netlify.app/"><img src ={foodpic} alt = "pic" className="pics"/></a></div>
              <div><a href = "https://tourism-ms.netlify.app/"><img src ={hillhomepic} alt = "pic" className="pics"/></a></div>
              <div><img src ={todopic} alt = "pic" className="pics"/></div>
            </div>	
        </div>
    )
}

export default Projects
