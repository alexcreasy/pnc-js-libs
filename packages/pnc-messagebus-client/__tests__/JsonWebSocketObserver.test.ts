import { WS } from "jest-websocket-mock";
import Observable from "zen-observable";
import { connect } from "../src/JsonWebSocketObserver";

describe("JsonWebSocketObserver", () => {
    const WS_URL: string = "ws://localhost:7890/";
    let server: WS;
    let clientSocket: WebSocket;
    let mockListener: any;
    let observable: Observable<object>;
    let subscription: ZenObservable.Subscription;

    beforeEach(async () => {
        server = new WS(WS_URL, { jsonProtocol: false });
        mockListener = jest.fn();

        observable = connect(WS_URL);
        subscription = observable.subscribe(mockListener);
        clientSocket = await server.connected;
    });

    afterEach(async () => {
        WS.clean();
    });


    it("should connect to the server upon subscription", async () => {
        expect(clientSocket.readyState).toEqual(WebSocket.OPEN);
    });

    it("should disconnect from the server upon unsubscription", async () => {
        subscription.unsubscribe();
        await server.closed;

        expect(clientSocket.readyState).toEqual(WebSocket.CLOSED);
    });

    it("should pass messages to subscribers", async () => {
        const message = { test: "test" };

        server.send(JSON.stringify(message));

        expect(mockListener.mock.calls.length).toEqual(1);
        expect(mockListener.mock.calls[0][0]).toEqual(message);
    });

    it("should throw when receiving a value that is not serialized JSON", async () => {
        const message = "epic fail";

        const doSend = () => server.send(message);

        expect(doSend).toThrow();
    });
});

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
