const express = require('express');

const app = express();

app.get('/ip', function(req, res) {
	res.send(req.connection.remoteAddress)
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});