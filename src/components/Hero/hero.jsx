import './hero.scss';
const Hero = ()=>{
    return(
    <div className ='hero'>
    <div className ='wrapper'>
    <img className ='logo' src='\logo.png'></img>
    <img className ='trophy' src='\1.png' alt='trophy'></img>
    <div className ='imagecontainer'>
    <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
    <p>
    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
    </p>
    <img src='\2.png'></img>
    <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
    </div>
   </div>
   </div>
   );
}
export default Hero;