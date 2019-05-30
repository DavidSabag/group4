const express = require('express');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

const messages = [{"1":"hello"},{"2":"world"}];

// Read
app.get('/', (request, response) => {
    responseJson(response, messages);
});

 // Delete
app.delete('/', (request, response) => {
    // const partyId = parseInt(request.query.id, 10);
    const msgId = Number(request.query.id);
    const msgIndex = getIndexById(messages, msgId);
    messages.splice(msgIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const msgId = Number(request.query.id);
    const msgIndex = getIndexById(messages, msgId);
    // console.log("request.body", request.body);
    messages[msgIndex].name = request.body.name;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const msgId = Math.floor(Math.random() * 10000);
    const authorName = request.body.name;
    const msg = request.body.msg;
    parties.push({
        id: msgId,
        name: authorName,
        message : msg
    });
    responseJson(response, "ok");
});

function getIndexById(arr, id) {
    return arr.findIndex( item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));