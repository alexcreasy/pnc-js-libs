import WebSocket from "isomorphic-ws";
import ReconnectingWebSocket, { Options } from "reconnecting-websocket";
import Observable from "zen-observable";

const defaultRWSOptions: Options = {
    WebSocket,
    maxReconnectionDelay: 30000,
    maxRetries: 10
};

export function connect(url: string, options?: Options): Observable<object> {
    const finalOptions: Options = Object.assign({}, defaultRWSOptions, options);

    return new Observable(observer => {

        const ws = new ReconnectingWebSocket(url, [], finalOptions);
        ws.addEventListener("message", event => {
            let obj: object;
            try {
                obj = JSON.parse(event.data);
            } catch (error) {
                const rethrow = new Error("Message received on WebSocket could not be parsed as JSON");
                rethrow.stack = `${rethrow.stack}\nCaused by: ${error.stack}`;
                throw rethrow;
            }
            observer.next(obj);
        });

        return () => ws.close();
    });
}
