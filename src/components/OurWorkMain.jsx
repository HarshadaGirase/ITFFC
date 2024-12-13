
import OurWorkHeroSection from '../components/OurWork/OurWorkHeroSection.jsx';
import Program from '../components/OurWork/Program.jsx';
import ComprehensiveSupport from '../components/OurWork/ComprehensiveSupport.jsx'
function OurWorkMain() {
  return (
    <div className='flex flex-col gap-10 m-8'>
         <OurWorkHeroSection/>
         <Program/>
         <ComprehensiveSupport/>
    </div>
  )
}
export default OurWorkMain;