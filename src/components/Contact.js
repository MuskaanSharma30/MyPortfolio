import React from 'react'
import FontAwesome, { FaGithub, FaInstagram, FaMailBulk } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";
import {IconContext} from "react-icons";
const Contact = () => {

//   const SubmitForm = (e) => {
//       e.preventDefault()
                             
//   }


    return (

        <div className = "Contact-full">
        <div className = "Space">{" "}</div>
        <h1 className = "Contact-head" id = "contact">Contact Me</h1>
        <div className = "Contact">
         <div className = "Email" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Email me at</div>
         <div className = "My-email" data-aos="zoom-in-up">
         <IconContext.Provider value={{ style: {fontSize: '30px', color : "rgb(228, 139, 205)" , marginRight: "1%"}}}>
            <a href = ""><FaMailBulk /></a>
            </IconContext.Provider>
            muskaansharma881@gmail.com 
            </div>
        </div>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(240, 162, 220)" , margin: "3%", marginLeft: "10%", marginTop: "2%" }}}>
          <div className = "Icons"data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-anchor-placement="bottom-bottom">
          <IconContext.Provider value={{ style: {fontSize: '30px', color : "rgb(228, 139, 205)" , margin: "3%", marginLeft: "33%" }}}>
            <a href = "https://www.linkedin.com/in/muskaan30/"><FaLinkedin /></a>
            </IconContext.Provider>
          <a href = "https://github.com/MuskaanSharma30" ><FaGithub /></a>
          <a href = "https://www.instagram.com/muskaan_sharma3099/"><FaInstagram /></a>
          </div>
        </IconContext.Provider>
            {/* <form onSubmit = {SubmitForm}  className ="form">
                <input placeholder = "Enter"></input>
                <button className ="button">Submit</button>
            </form> */}
        </div>
    )
}

export default Contact
