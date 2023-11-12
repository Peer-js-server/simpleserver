const { PeerServer} = require("peer");

const PORT = process.env.PORT;

const peerServer = PeerServer({
    port: PORT,
    key:"demodemo",
    path: "/myapp",
    allow_discovery: true,
});

peerServer.on("connection", c => {
    console.log("connection ID:", c.id)
})

peerServer.on("disconnect", c=> {
    console.log("disconnect!", c.id)
})
console.log(`Running Peer Js server on por ${PORT}`);