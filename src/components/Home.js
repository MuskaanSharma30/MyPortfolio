
import Pimage from '../Pimage.jpeg'

const Home = () => {
    // function navhover (e) 
    // {
    //     e.target.style.textDecoration = "Underline";
    // }
    // function navleave (e)
    // {
    //     e.target.style.textDecoration = "None"
    // }
    return (

        <div id = "home">
           
            <div className = "Nav" data-aos="zoom-in-left"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">
                <ul>
                    <a href = "#home"><div>Home</div></a>
                    <a href = "#about"><div>About Me</div></a>
                    <a href = "#project"><div>Projects</div></a>
                    <a href = "#contact"><div>Contact</div></a>
                </ul>
                
            </div>
            
            <div className = "image"><img src = {Pimage} alt= "pic" className= "myimg"/></div>
        <div>
        
            <span className = "Heading" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            
                Hello!
                <br/>
                My name is Muskaan Sharma
                <br/>
                A Web Developer hailing from Kanpur.
            </span>
        </div>
        </div>
    )
}

export default Home
