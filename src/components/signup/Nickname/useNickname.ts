import { AxiosError } from 'axios';
import { MemberQuery } from 'queries';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Subject, catchError, debounceTime, filter, from, map, mergeMap, of, tap } from 'rxjs';

const MAX_LEN = 10;
const MIN_LEN = 2;

interface Props {
  nickname: string;
  handleNext: () => void;
}

function useNickname({ nickname, handleNext }: Props) {
  const inpuRef = useRef<HTMLInputElement>(null);
  const { mutateAsync, isLoading } = MemberQuery.useCheckNickname();
  const subjectRef = useRef(new Subject<string>());

  const [agree, setAgree] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState('');

  const disabled = useMemo(() => {
    if (!agree) return true;
    if (invalidMsg !== '') true;
    if (isLoading) return true;
    if (nickname.length < MIN_LEN || nickname.length > MAX_LEN) return true;

    return false;
  }, [agree, nickname, invalidMsg, isLoading]);

  const next = () => {
    if (invalidMsg !== '' || nickname.length < 2 || nickname.length > MAX_LEN) {
      inpuRef.current?.focus();
    }

    if (disabled) return;
    handleNext();
  };

  useEffect(() => {
    subjectRef.current
      .pipe(
        debounceTime(500),
        tap((v) => {
          if (v.length > MAX_LEN) {
            setInvalidMsg('한글,영문 10자 이하로 입력해주세요');
          } else if (v.length === 1) {
            setInvalidMsg('최소 2자 이상 입력해주세요');
          } else {
            setInvalidMsg('');
          }
        }),
        filter((v) => v.length >= MIN_LEN && v.length <= MAX_LEN),
        mergeMap((v) => from(mutateAsync(v)).pipe(catchError((e) => of(e)))),
        map((d) => {
          if (d instanceof AxiosError) {
            return true;
          }
          return d.data.payload;
        }),
      )
      .subscribe((v: boolean) => v && setInvalidMsg('중복인 닉네임이라 사용할 수 없습니다.'));

    return () => subjectRef.current?.unsubscribe();
  }, []);

  useEffect(() => {
    subjectRef.current.next(nickname);
  }, [nickname]);

  useEffect(() => {
    inpuRef.current?.focus();
  }, []);

  return { invalidMsg, agree, setAgree, disabled, inpuRef, next };
}

export default useNickname;
