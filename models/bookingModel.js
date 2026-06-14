let { MongoClient, ObjectId } = require("mongodb");

let url = process.env.MONGO_URL; 
//We have stored the url in .env file and we are accessing it here using process.env.MONGO_URL, this is a best practice to hide our credentials and other important data from the public. We can also use dotenv package to load the .env file and access the variables in it.
//URL -> Could be your or any other's url who's database you want to connect
// Install -> npm i dotenv

// response is passed to model for sending the response back to the backend and then to the frontend.

let addBooking = (obj, res) => {
    let client = new MongoClient(url); //Connect laptop and MongoDB
    client.connect();
    let db = client.db("AddEvent"); //Checks database, if not then creates one
    let collection = db.collection("events"); //Checks collection, if not then creates one

    collection.insertOne(obj) //Inserts data into the collection
    .then((result)=>res.send(result)) // If booking successful then sends data to database
    .catch((err)=>res.send(err)) // If there's a error then we return response to the backend which return the response to the frontend
    .finally(()=>client.close()); //If not closed then any malicious or malware can affect and hack our mongodb atlas
}

let getAllBookings = (res) => {
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("AddEvent");
    let collection = db.collection("events");

    collection.find().toArray() //Data is stored in JSON Format in MongoDB and when we get it, we get it in JSON, thats why we wrote toArray() to convert it into array. Now why Array? because we have so many data stored in mongodb, when we get them, it comes as arrays of objects.
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close());
}

let updateBooking = (id, data, res)=> {
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("AddEvent");
    let collection = db.collection("events");

    collection.updateOne( { _id : new ObjectId(id) } , { $set : data } )
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close());
}

let deleteBooking = (id, res) => {
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("AddEvent");
    let collection = db.collection("events");

    collection.deleteOne( { _id : new ObjectId(id) } )
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close());
}

module.exports = { addBooking , getAllBookings , updateBooking, deleteBooking };