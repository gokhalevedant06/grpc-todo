const mongoose = require('mongoose')


const mongoURI  = 'mongodb+srv://gokhalevedant06:abcd1234@cluster0.gki1ndv.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('CONNECTED TO DB');
})
.catch(err => {
    console.log('CONNECTION TO DB FAILED!');
    console.log(err);
})