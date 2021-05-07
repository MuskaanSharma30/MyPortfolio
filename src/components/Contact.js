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
         <div className = "Email">Email me at</div>
         <div className = "My-email">
         <IconContext.Provider value={{ style: {fontSize: '30px', color : "rgb(228, 139, 205)" , marginRight: "1%"}}}>
            <a href = "https://www.linkedin.com/in/muskaan30/"><FaMailBulk /></a>
            </IconContext.Provider>
            muskaansharma881@gmail.com 
            </div>
        </div>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(240, 162, 220)" , margin: "3%", marginLeft: "10%", marginTop: "2%" }}}>
          <div className = "Icons">
          <IconContext.Provider value={{ style: {fontSize: '30px', color : "rgb(228, 139, 205)" , margin: "3%", marginLeft: "40%" }}}>
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
