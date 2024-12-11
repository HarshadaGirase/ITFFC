import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection.jsx';
import Mission from '../components/Mission.jsx';

function Home(){
    return (
        <div className='flex flex-col gap-10 m-8'>
            <Header />
            <HeroSection/>
            <Mission/>           
        </div>
    );
}
export default Home;