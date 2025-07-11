import { useCheckNickname } from 'hooks';
import { useMemo, useState } from 'react';

interface Props {
  nickname: string;
  handleNext: () => void;
}

function useNickname({ nickname, handleNext }: Props) {
  const [agree, setAgree] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const { disabled: nicknameDisabled, inpuRef, invalidMsg } = useCheckNickname({ nickname });
  const disabled = useMemo(() => nicknameDisabled || !agree || !agree2, [nicknameDisabled, agree, agree2]);

  const handleAll = (check: boolean) => {
    setAgree(check);
    setAgree2(check);
  };

  const next = () => {
    if (nicknameDisabled) {
      inpuRef.current?.focus?.();
      return;
    }

    if (!agree) {
      return;
    }

    if (!agree2) {
      return;
    }

    handleNext();
  };

  return { agree, setAgree, next, inpuRef, invalidMsg, disabled, agree2, setAgree2, handleAll };
}

export default useNickname;
