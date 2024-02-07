import { MemberQuery } from 'queries';
import { useEffect, useMemo, useState } from 'react';
import { IMember, MemberUpdateType } from 'types';

function useProfile() {
  const { data: personalInfoData } = MemberQuery.usePersonalInfo();
  const [step, setStep] = useState<'profile' | 'profileImage'>('profile');
  const originData = useMemo(() => getMemberUpdateData(personalInfoData), [personalInfoData]);

  const [data, setData] = useState<MemberUpdateType | null>(null);

  const handleValue = (key: keyof MemberUpdateType, value: MemberUpdateType[keyof MemberUpdateType]) => {
    if (!data) return;

    setData({
      ...data,
      [key]: value,
    });
  };

  useEffect(() => {
    if (personalInfoData) setData(personalInfoData);
  }, [personalInfoData]);

  return { data, handleValue, step, setStep, email: personalInfoData?.email || '', originData };
}

const getMemberUpdateData = (data: IMember | undefined): MemberUpdateType => {
  if (!data) {
    return {
      nickname: '',
      profileImageUrl: '0',
      quizCount: 5,
      isQuizOpen: true,
    };
  }

  const { nickname, profileImageUrl, quizCount, isQuizOpen } = data;
  return {
    nickname,
    profileImageUrl,
    quizCount,
    isQuizOpen,
  };
};

export default useProfile;
