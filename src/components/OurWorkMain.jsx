
import OurWorkHeroSection from '../components/OurWork/OurWorkHeroSection.jsx';
import Program from '../components/OurWork/Program.jsx';
function OurWorkMain() {
  return (
    <div className='flex flex-col gap-10 m-8'>
         <OurWorkHeroSection/>
         <Program/>
    </div>
  )
}
export default OurWorkMain;