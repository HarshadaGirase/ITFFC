
import OurWorkHeroSection from '../components/OurWork/OurWorkHeroSection.jsx';
import Program from '../components/OurWork/Program.jsx';
import ComprehensiveSupport from '../components/OurWork/ComprehensiveSupport.jsx'
import ConsultancyServices from '../components/OurWork/ConsultancyServices.jsx'
function OurWorkMain() {
  return (
    <div className='flex flex-col gap-10 m-8'>
         <OurWorkHeroSection/>
         <Program/>
         <ComprehensiveSupport/>
         <ConsultancyServices/>
    </div>
  )
}
export default OurWorkMain;