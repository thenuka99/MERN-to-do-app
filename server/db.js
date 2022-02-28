const mongoose = require('mongoose');

module.exports= async() =>{
    try{
        const connectionParams={
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log('Connected to mongodb')

    }catch(e){
        console.log('Error occured when connecting to mongodb', e)
    }
}