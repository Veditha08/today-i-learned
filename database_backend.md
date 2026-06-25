there are two servers in the backend: application server and database server
appln server: handles routes and all and accepts the req
db server: mongodb.
           in a db there are collections and each collection data is document
MONGOD: actual engine of mongodb.. it contains all the data and query logic. the data can be fetched or
        modified using different clients like any app or mongocompass or mongosh these are all clients. like if u comment anything on yt using ur phone, the same comment will appear when u open laptop also because the db is the same, just the client has changed.

CRUD operations: create, read, update, delete

    CODE                     WHAT HAPPENS  
mongoose.connect            db create hoga
model create              collection bnta hai
CREATE                   document create krte hai

//project mei kaise setup krna hai: file name usermodel.js
1. npm i mongoose //this package will be like a connection btwn the appln server and the db server
2. const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/any_dbname');        //connecting 
    const userSchema = mongoose.Schema({                             //this is a method that will accept an object like har user ke paas kya kya honi chahiye
        name: String,
        id: String,
        email: String    })
    model.exports = mongoose.model("user", userSchema);              //we create a model and export a model(since we use it in a particular route like/delete or /register) so that we can perfrom the CRUD operations. bracket lo rasina peru yokka plural tho model form avthadhi like here users model




