import { useCheckNickname } from 'hooks';
import { useMemo, useState } from 'react';

interface Props {
  nickname: string;
  handleNext: () => void;
}

function useNickname({ nickname, handleNext }: Props) {
  const [agree, setAgree] = useState(false);
  const { disabled: nicknameDisabled, inpuRef, invalidMsg } = useCheckNickname({ nickname });
  const disabled = useMemo(() => nicknameDisabled || !agree, [nicknameDisabled, agree]);

  const next = () => {
    if (nicknameDisabled) {
      inpuRef.current?.focus?.();
      return;
    }

    if (!agree) {
      return;
    }

    handleNext();
  };

  return { agree, setAgree, next, inpuRef, invalidMsg, disabled };
}

export default useNickname;
