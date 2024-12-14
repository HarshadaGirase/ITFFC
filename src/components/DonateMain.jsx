import DonateHeroSection from '../components/Donate/DonateHeroSection.jsx';
import Rewards from '../components/Donate/Rewards.jsx';
function AboutUsMain() {
  return (
    <div className='flex flex-col gap-10 m-4 sm:m-4 md:m-8 lg:m-8'>
       <DonateHeroSection/>
       <Rewards/>
    </div>
  )
}
export default AboutUsMain;