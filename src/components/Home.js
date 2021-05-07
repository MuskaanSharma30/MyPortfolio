
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
           
            <div className = "Nav">
                <ul>
                    <a href = "#home"><div>Home</div></a>
                    <a href = "#about"><div>About Me</div></a>
                    <a href = "#project"><div>Projects</div></a>
                    <a href = "#contact"><div>Contact</div></a>
                </ul>
                
            </div>
            
            <div className = "image"><img src = {Pimage} alt= "pic" className= "myimg"/></div>
        <div>
        
            <span className = "Heading">
            
                Hello!
                <br/>
                My name is Muskaan Sharma
                <br/>
                and I am a Web Developer hailing from Kanpur.
            </span>
        </div>
        </div>
    )
}

export default Home
