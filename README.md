# EgloRTS

Simple realtime server for messaging and other events

# Usage

> Use this example on how to get setup, it is pretty basic

```
let ws

ws = new WebSocket("wss://your-server-url:5000");

ws.onopen = () => {
    ws.send(JSON.stringify({ $websocket_data.action: "subscribe", $websocket_data.id: "your-unique-identifier" }));
};

ws.onmessage = async function (event) {
    const json = JSON.parse(event.data);

    console.log(json)
};

ws.send(
    JSON.stringify({
        $websocket_data: {
            action: "publish",
            id: "your-unique-indentifier",
        }
        name: "testing-name",
        time: Date.now()
    })
);

if (ws) {
    ws.send(JSON.stringify({
        $websocket_data: {
            action: "unsubscribe",
            id: "your-unique-indentifier",
        }
    }));
    ws.close();
}
```

# Actions
Currently the only actions are "subscribe", "publish", and "unsubscribe"