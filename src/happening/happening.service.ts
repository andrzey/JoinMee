import { HttpService } from '../common/http-service';
import { baseUrl } from '../config/config';

export default class HappeningService extends HttpService {
    private happeningUrl = `${baseUrl}/happening`;

    public fetchHappenings() {
        return this
            .fetch(this.happeningUrl)
            .then((response) => response.json());
    }
}
