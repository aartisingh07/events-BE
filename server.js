//Server (Gate) -> Routes (Watchman) -> Controller (Manager) -> Models (Mazdoor)
// backend -> nodemon server.js (nodemon continuously checks the updates in server file, and automaticlly kills and restarts the server).
require("dotenv").config();

let express = require("express");
let cors =  require("cors");

let bookingRoutes = require("./routes/bookingRoutes");

let app = express();
app.use(cors());
app.use(express.json());

app.use("/", bookingRoutes);

let PORT = process.env.PORT || 9000; //Either render will fill the port or it will run on 9000
app.listen(PORT, ()=>console.log("Server running on PORT: "+PORT+". Backend Connected."));