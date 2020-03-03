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
