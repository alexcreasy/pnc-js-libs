import { WS } from "jest-websocket-mock";
import { newJsonWebSocketObserver } from "../src/JsonWebSocketObserver";

describe("JsonWebSocketObserver", () => {
    const WS_URL: string = "ws://localhost:7890/";
    let server: WS;
    //let clientSocket: WebSocket;
    let mockListener: any;

    beforeEach(async () => {
        server = new WS(WS_URL, { jsonProtocol: true });
        mockListener = jest.fn();


        //clientSocket = await server.connected;
    });

    afterEach(async () => {
        WS.clean();
    });

    it("should work", async () => {
        const observer = newJsonWebSocketObserver(WS_URL);

        const subscription = observer.subscribe(mockListener);
        const client = await server.connected;
        server.send({ test: "value" });
        server.send({ test2: "value2" });
        expect(mockListener.mock.calls.length).toEqual(2);

        const sub2 = observer.subscribe(mockListener);
        await server.connected;
        server.send({ test: "value" });
        server.send({ test2: "value2" });
        expect(mockListener.mock.calls.length).toEqual(6);

        subscription.unsubscribe();
        await server.closed;
        expect(client.readyState).toEqual(client.OPEN);


    });

});
