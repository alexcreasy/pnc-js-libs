import Observable from "zen-observable";

export function connect(url: string): Observable<object> {
    return new Observable(observer => {
        const ws: WebSocket = new WebSocket(url);

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


// export default class JsonWebSocketObserver {

//     private readonly url: string;
//     private ws: WebSocket;
//     private observable: Observable<any>;

//     public async connect(): Promise<void> {
//         return new Promise((resolve, reject) => {
//             this.ws = new WebSocket(this.url);

//             const el: EventListener = () => {
//                 resolve();
//                 this.ws.removeEventListener("open", el);
//             };
//             this.ws.addEventListener("open", el);

//             //this.ws.addEventListener("message", message => this.dispatch(message));
//         });
//     }

//     public async close(): Promise<CloseEvent> {
//         return new Promise(resolve => {
//             if (this.ws.readyState === this.ws.CLOSED) {
//                 resolve();
//                 return;
//             }
//             this.ws.addEventListener("close", event => resolve(event));
//             this.ws.close(1000, "Client session finished");
//         });
//     }

//     private observeSocket(): Observable<object> {
//         return new Observable(observer => {

//         });
//     }

//     private stream<T extends Notification>(): Observable<T> {
//         return new Observable(observer => {
//             const eventListener = (event: MessageEvent) => {
//                 let notification: T;
//                 try {
//                     notification = JSON.parse(event.data);
//                 } catch (err) {
//                     const newErr = new Error("Message received on PNC WebSocket could not be parsed as JSON");
//                     newErr.stack = `${newErr.stack}\nCaused by: ${err.stack}`;
//                     throw newErr;
//                 }
//                 observer.next(notification);
//             };

//             this.ws.addEventListener("message", eventListener);

//             return () => this.ws.removeEventListener("message", eventListener);
//         });
//     }
// }
