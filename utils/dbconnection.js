const mongoose = require('mongoose');
let dbUrl = 'mongodb+srv://shashi:shashi@1728@cluster0.hdmtt.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", err => {
    console.log("err===>>", err)
})
db.on("connected", (err, res) => {
    console.log("connection successfully stablish:")
})