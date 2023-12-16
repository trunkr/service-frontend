import { atom } from 'recoil';
const ProfileType = {
  P1: 'P1',
  P2: 'P2',
  P3: 'P3',
  P4: 'P4',
  P5: 'P5',
  P6: 'P6',
  P7: 'P7',
  P8: 'P8',
} as const;
export const UserImgAtom = atom<keyof typeof ProfileType>({
  key: 'UserImgAtom',
  default: 'P1',
});
