import restConnector from './index';

class AuthService {
    async signin() {
        return restConnector({
            url: "/api/v1/auth/signin",
            method: "POST"
        })
    }
}

export default AuthService;