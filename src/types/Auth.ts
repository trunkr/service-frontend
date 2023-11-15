import { ResponseDto } from './Common';

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
export type PostAuthSignupReq = PostAuthSignUpReqInterface;
export type PostAuthSignupRes = ResponseDto<PostAuthSignUpResInterface>;
