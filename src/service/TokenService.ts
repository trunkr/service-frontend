import { Cookies } from 'react-cookie';

class TokenService {
  cookie = new Cookies();

  setAccessToken(token: string) {
    this.cookie.set('accessToken', token, { path: '/' });
  }
  setRefreshToken(token: string) {
    this.cookie.set('refreshToken', token, { path: '/' });
  }
  setId(id: number) {
    this.cookie.set('id', id, { path: '/' });
  }

  getAccessToken() {
    return this.cookie.get('accessToken');
  }
  getRefreshToken() {
    return this.cookie.get('refreshToken');
  }
  getId() {
    return this.cookie.get('id');
  }

  logout() {
    this.cookie.remove('token');
    this.cookie.remove('id');
  }
  get headers() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }
}
const api = new TokenService();
export default api;
