import AboutHeroSection from '../components/AboutUs/AboutHeroSection.jsx';
import WhoWeAre from '../components/AboutUs/WhoWeAre.jsx';
import Contact from '../components/AboutUs/Contact.jsx';
function AboutUsMain() {
  return (
    <div className='flex flex-col gap-10 m-4 sm:m-4 md:m-8 lg:m-8'>
         <AboutHeroSection/>
        <WhoWeAre/>
        <Contact/>
    </div>
  )
}
export default AboutUsMain;