import restConnector from './index';
import { POST } from './method';

class AuthService {
    async signin() {
        return restConnector({
            url: "/api/v1/auth/signin",
            method: POST
        })
    }
}

export default AuthService;