import { atom } from 'recoil';

export const NavList = {
  Solve: 'CS 문제풀기',
  Analysis: 'CS 문제풀이 분석',
  Algorithm: '알고리즘 공부',
  Home: '홈',
};

export type NavType = keyof typeof NavList;
export const NavAtom = atom<NavType>({
  key: 'NavTypeAtom',
  default: 'Home',
});
