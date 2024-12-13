
import HeroSection from '../components/Home/HeroSection.jsx';
import Mission from '../components/Home/Mission.jsx';
import PerspectiveSection from '../components/Home/PerspectiveSection.jsx';
import ImageSection from '../components/Home/ImageSection.jsx';
import StatsCard from '../components/Home/StatsCard.jsx';
import OurProgram from '../components/Home/OurProgram.jsx';
import JoinUs from '../components/Home/JoinUs.jsx';


function Main(){
    return (
        <div className='flex flex-col gap-10 m-4 sm:m-4 md:m-8 lg:m-8'>
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