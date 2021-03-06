import { HttpService } from '../common/http-service';
import { baseUrl } from '../config/config';

// tslint:disable-next-line:max-line-length
const testToken = 'EAAcDhQnAuaIBAMWXtcVlulqihDeK0qR5l0ZBUJnqRH1c1iKbmGZAgiAW6ROr6FkoxJCPJPmFbFQgoZCARvyGgxZCdfALp6Vc4ScQhLsQsrpPTeUM8XmLlmNygSfZBeEHZAZA5UceKTWqATmoVdZAFJ5pZBAaVAPXnmR9IZAJ9yP13ZCZAFP7HcUm9CxL8dOV8ErWkW5rQZBqXnknP7pderAChtkt3VfZAuZBkqpJUrbId5TPKRSOgZDZD';

export default class UserService extends HttpService {
    private userUrl = `${baseUrl}/user`;

    public loginWithFacebook(facebookToken: string) {
        if (!facebookToken) {
            throw new Error('No facebookToken');
        }

        const url = `${this.userUrl}/login`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this
            .fetch(url, {
                body: JSON.stringify({ AccessToken: testToken }),
                headers,
                method: 'POST',
            })
            .then((response) => response.json());
    }
}
