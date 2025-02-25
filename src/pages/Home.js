import { Link } from "react-router-dom";
import ".././App.css"
import benedict from ".././benedict.png"
import PhilippineMapShapes from "../PhilippineMapShapes.json";

const Home = () => {
    return (
      <section className="about">
    
    <h2>My Philippines Travel Level (Cities and Municipalities)</h2>

    This simple web app helps you visualize how well-travelled you are in the Philippines based on city and municipality level.

    <br></br>
    <br></br>

    This project was inspired by the  <div className="link" onClick={() => window.open('https://zhung.com.tw/japanex/')}>Japan↗</div> version and was built using ReactJS. <br></br>
    This is the clone of the original project of Denz de Villar's My Philippines Travel Level Application, <div className="link" onClick={() => window.open('https://my-philippines-travel-level.com/')}>here</div> is his project and <div className="link" onClick={() => window.open('https://github.com/denzdelvillar/philippine-map-app')}>here</div> is the source code. <br></br>
    You can also view the source code of mine, i.e. the cloned one <div className="link" onClick={() => window.open('https://github.com/benbancure94/philippine-map-app')}>here↗</div>.

    <h2>How To Use</h2>
    Select the name of a province or Metro Manila. Each map of the selected name of province or Metro Manila is divided into cities and municipalities*. All you have to do is to click on a city/municipality and choose the appropriate level of travel. 

    <h2>Additional Places</h2>
    More provinces coming soon... <br></br><br></br>
    
    Here's what each level represents:
    <br></br>
    <br></br>
    <li className="bullet"><b>Lived there</b> - you spent a significant portion of your life in that area.</li> 
    <li className="bullet"><b>Stayed there</b> - you slept at least a night in that area.</li> 
    <li className="bullet"><b>Visited there</b> - you spent some hours exploring the area.</li> 
    <li className="bullet"><b>Alighted there</b> - you just dropped off for a short stopover, layover, or transfer.</li> 
    <li className="bullet"><b>Passed there</b> - you passed by that area but did not set foot.</li> 
    <li className="bullet"><b>Never been there</b> - you need to travel there soon.</li> 
    
    <br></br>

    Your total score will be updated accordingly. You can then save the image and share on your social media.
    
    <br></br>
    <br></br>

    <h2>MAPS</h2>
    Click on one on the following names to view its map. Enjoy!
    <ul>
      {
        PhilippineMapShapes.map(place => <li><Link className="link" to={"/map/" + place.smallName}>{ place.place }</Link></li>)
      }
    </ul>

    <br></br>
    <br></br>
    <section className="asterisk">*There is only one municipality in Metro Manila, which is named Pateros.</section>

    <h2>About Me</h2>

    <img className="dp" src={benedict} alt="me" />

    Hello everyone! My name is Benedict, currently working as a computer programmer in the Philippines. I recently loved wandering because I realized that the places I visited and passed by is not that many when I look at the map even of Metro Manila. I still have to visit a lot of places in Metro Manila alone.
    <br></br>
    <br></br>
    
    I have experience in React and React Native, along with other programming languages.
    
    <br></br>
    <br></br>

    Check out my socials: 
    <br></br>
    <div className="link" onClick={() => window.open('https://www.instagram.com/benedictus_sum1994/')}>Instagram↗</div>
    <br></br>
    <div className="link" onClick={() => window.open('https://www.linkedin.com/in/benedict-bancure-656a96153/')}>LinkedIn↗</div>.
    
    <br></br>
    <br></br>

    </section>
    );
  };
  
  export default Home;
  