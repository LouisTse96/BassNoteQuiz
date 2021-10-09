const express= require('express');
const app = express();
const PORT = 8000;

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "start.html");
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});