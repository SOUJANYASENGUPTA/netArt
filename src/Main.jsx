import '../../internship/src/App.css'
import Ad from './components/Advert/advert'
import Hero from './components/Hero/hero'
const Main = () =>{
   return(
    <div>
        <section>
        <Hero/>
        </section>
        <section>
        <Ad/>
        </section>
    </div>
   )
}
export default Main