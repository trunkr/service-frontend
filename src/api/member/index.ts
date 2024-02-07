import { base } from 'api';
import { IResponse } from 'types';
import { IMember, IMyStats, MemberUpdateType } from 'types/member';

const PATH = '/v1/members';

const checkNickname = (nickname: string) =>
  base.get<IResponse<boolean>>(`${PATH}/check-nickname`, { params: { nickname } });

const getStats = () => base.get<IResponse<IMyStats>>(`${PATH}/stats`);

const getPersonalInfo = () => base.get<IResponse<IMember>>(`${PATH}/personal-info`);

const putPersonalInfo = (data: MemberUpdateType) => base.put(`${PATH}/personal-info`, data);

export { checkNickname, getStats, getPersonalInfo, putPersonalInfo };
