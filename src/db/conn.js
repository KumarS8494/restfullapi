const mongoose = require("mongoose");

mongoose.connect('/mongodb://localhost:27017/students-api', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection success');
}).catch((e) => {
    console.log('No connection');
})
