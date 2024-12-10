import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection.jsx';
function Home(){
    return (
        <div className='flex flex-col gap-4 m-8'>
            <Header />
            <HeroSection/>
           
        </div>
    );
}
export default Home;