import React from 'react';

import { SingupComponent, UiComponent } from 'components';
import useSignup from './useSignup';

function Signup() {
  const { step, setStep, isLoading, nickname, setNickName, profileImageUrl, setProfileImageUrl, handleSubmit } =
    useSignup();

  return (
    <main>
      {step === 'nickname' ? (
        <SingupComponent.Nickname
          handleNext={() => setStep('profile')}
          nickname={nickname}
          handleNickName={setNickName}
        />
      ) : (
        <SingupComponent.Profile
          profile={profileImageUrl}
          handleProfile={setProfileImageUrl}
          handleSubmit={handleSubmit}
        />
      )}
      {isLoading && <UiComponent.Loading />}
    </main>
  );
}

export default Signup;
