export class HttpService {
    public fetch(url: string, options: RequestInit = { headers: new Headers() }) {
        if (options.headers instanceof Headers) {
            options.headers.append('Accept', 'application/json');
        }

        return fetch(url, options)
            .then(this.checkStatus);
    }

    private checkStatus(response: Response) {
        if (response.ok) {
            return response;
        }

        const error: any = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}
