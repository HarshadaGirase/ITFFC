
import HeroSection from '../components/HeroSection.jsx';
import Mission from '../components/Mission.jsx';
import PerspectiveSection from '../components/perspectivesection.jsx';
import ImageSection from '../components/ImageSection';
import StatsCard from '../components/StatsCard.jsx';
import OurProgram from '../components/OurProgram.jsx';
import JoinUs from '../components/JoinUs.jsx';


function Main(){
    return (
        <div className='flex flex-col gap-10 m-8'>
           <HeroSection/>
            <Mission/>     
            <PerspectiveSection/>    
            <ImageSection/>  
            <StatsCard/>
            <OurProgram/>
            <JoinUs/>
        </div>
    )
}
export default Main