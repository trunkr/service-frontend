import { AuthQuery } from 'queries';
import { useState } from 'react';
import { useAppSelector } from 'stores';

function useSignup() {
  const [step, setStep] = useState<'nickname' | 'profile'>('nickname');
  const [nickname, setNickName] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState(0);
  const { auth } = useAppSelector((state) => state.auth);

  const { mutate, isLoading } = AuthQuery.useSignup();

  const handleSubmit = () => {
    if (!auth) return;

    mutate({
      memberId: auth.memberId,
      nickname,
      profileImageUrl: String(profileImageUrl),
      termsAgreement: {
        PRIVACY_CONSENT: true,
      },
    });
  };

  return { step, setStep, nickname, setNickName, profileImageUrl, setProfileImageUrl, isLoading, handleSubmit };
}

export default useSignup;
