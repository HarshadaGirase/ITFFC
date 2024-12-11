import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection.jsx';
import Mission from '../components/Mission.jsx';
import PerspectiveSection from '../components/perspectivesection.jsx';
import ImageSection from '../components/ImageSection';
import StatsCard from '../components/StatsCard.jsx';
function Home(){
    return (
        <div className='flex flex-col gap-10 m-8'>
            <Header />
            <HeroSection/>
            <Mission/>     
            <PerspectiveSection/>    
            <ImageSection/>  
            <StatsCard/>
        </div>
    );
}
export default Home;