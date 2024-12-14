
import GetInvolvedHeroSection from '../components/GetInvolved/GetInvolvedHeroSection.jsx';
import CommunityInitiatives from '../components/GetInvolved/CommunityInitiatives.jsx';
import GetInvolvedHelp from '../components/GetInvolved/GetInvolvedHelp.jsx';
function GetInvolvedMain() {
    return (
      <div className='flex flex-col gap-10 m-4 sm:m-4 md:m-8 lg:m-8'>
          <GetInvolvedHeroSection/>
          <CommunityInitiatives/>
          <GetInvolvedHelp/>
      </div>
    )
  }
  export default GetInvolvedMain;