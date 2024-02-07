import { base } from 'api';
import { ISignUpParams, ISocialSignInParams, IRefreshTokenParams } from 'types';

const PATH = '/v1/auth';

const signout = () => base.post(`${PATH}/sign-out`);

const signin = (data: ISocialSignInParams) => base.post(`${PATH}/social-sign-in`, data);

const signup = (data: ISignUpParams) => base.post(`${PATH}/sign-up`, data);

const refreshToken = (data: IRefreshTokenParams) => base.post(`${PATH}/tokens`, data);

const withdraw = () => base.delete(`${PATH}/withdraw`);

export { signout, signin, signup, refreshToken, withdraw };
