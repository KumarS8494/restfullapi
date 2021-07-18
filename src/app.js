const express = require('express');
require('./db/conn');
const Student = require('./model/Students');
const app = express();

app.use(express.json())

const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send('Hello Server.')
})

app.post('/students', (req, res) => {
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

})
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})
