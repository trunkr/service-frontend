import React from 'react';
import { ProfileComponent, SingupComponent } from 'components';
import useProfile from './useProfile';

function Profile() {
  const { data, handleValue, step, setStep, email, originData } = useProfile();
  if (!data) return null;

  return (
    <main>
      {step === 'profile' ? (
        <ProfileComponent.Edit
          data={data}
          handleValue={handleValue}
          handleProfileImage={() => setStep('profileImage')}
          email={email}
          originData={originData}
        />
      ) : (
        <SingupComponent.Profile
          profile={Number(data.profileImageUrl)}
          handleProfile={(num) => handleValue('profileImageUrl', String(num))}
          handleSubmit={() => setStep('profile')}
        />
      )}
    </main>
  );
}

export default Profile;
