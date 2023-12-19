import { ResponseDto } from './Common';

// 멤버 상태 상수처리
export const MemberStatus = {
  PENDING: 'PENDING',
  ACTIVATED: 'ACTIVATED',
} as const;

// 소셜로그인 API
export interface PostAuthSocialSignInReqInterface {
  identity: string;
  provider: Platform;
}

export type Platform = 'KAKAO' | 'GOOGLE';

export interface PostAuthSocialSignInResInterface {
  memberId: number;
  memberStatus: string;
  isRequiredSignUp: boolean;
  token: TokenInterface;
}

export interface TokenInterface {
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  refreshTOkenExpiresIn: number;
}
export type PostAuthSocialSignInReq = PostAuthSocialSignInReqInterface;
export type PostAuthSocialSignInRes = ResponseDto<PostAuthSocialSignInResInterface>;

//회원가입 API

export interface PostAuthSignUpReqInterface {
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  termsAgreement: TermsAgreementInterface;
}

export interface TermsAgreementInterface {
  PRIVACY_CONSENT: boolean;
}
export interface PostAuthSignUpResInterface {
  memberId: number;
  memberStatus: string;
  token: TokenInterface;
}
// 카카오 idToken API
export interface GetKakaoIdTokenResInterface {
  idToken: string;
  provider: string;
}

export interface GetKakaoIDTokenReqInterface {
  code: string;
  state: string;
}
export interface PostKakaoIDTokenReqInterface {}
export type PostAuthSignupReq = PostAuthSignUpReqInterface;
export type PostAuthSignupRes = ResponseDto<PostAuthSignUpResInterface>;
export type GetKakaoIdTokenReq = GetKakaoIDTokenReqInterface;
export type GetKakaoIdTokenRes = ResponseDto<GetKakaoIdTokenResInterface>;
