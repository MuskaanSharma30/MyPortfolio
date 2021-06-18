import React from 'react'
import FontAwesome, { FaDesktop, FaGithub, FaInstagram, FaPencilRuler, FaTools } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";
import {IconContext} from "react-icons";
const About = () => {
    return (
        <div>
            <div className = "About-head" id = "about">About Me</div>
            <div className = "About-content">
            <div className = "Designer" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     data-aos-offset="500"
     >
             <IconContext.Provider value={{ style: {fontSize: '30px', color : "rgb(228, 139, 205)",marginRight : "10%" }}}>
             <FaPencilRuler />
            </IconContext.Provider>
                   Designer
               <div className = "Designer-content">
                   My design ventures :
                  <br/>
                   <div className = "Designer-content-2">UI , Web</div>
               </div>
               <div className = "Designer-content">Tools I Use :</div>
                <div>
                    <endl  className = "Designer-content-2">
                    Figma
                    <br/>
                    Adobe XD
                    <br/>
                    Wix
                    <br/>
                    Pen & Paper
                    </endl>
                </div>
            </div>
            <div className = "Developer"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     data-aos-offset="500">
            <IconContext.Provider value={{ style: {fontSize: '30px', color : "rgb(228, 139, 205)",marginRight : "10%" }}}>
            <FaDesktop />
            </IconContext.Provider>Front-end Developer
            <div className = "Designer-content">
                   My developing ventures :
                  <br/>
                   <div className = "Designer-content-2">HTML, CSS, Javascript, jQuery, React</div>
               </div>
               <div className = "Designer-content">Tools I Use :</div>
                <div>
                    <endl  className = "Designer-content-2" >VS Code
                    <br/>
                    Bootstrap
                    </endl>
                </div>
            
            
            
            </div>
            </div>
        </div>
    )
}

export default About
