'use client';

import UserInformation from '@/app/components/UserInformation';
import SocialInformation from '@/app/components/SocialInformation';

const FallbackScreen = () => (
  <div>
    <div className="pb-10">
      <UserInformation />
    </div>
    <SocialInformation fallbackMode />
  </div>
);

export default FallbackScreen;
