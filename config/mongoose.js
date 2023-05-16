const mongoose = require('mongoose');

const URI = "mongodb+srv://hkbitcoding:harsh9099@ecommerce.bzwfi0j.mongodb.net/";

mongoose.connect(URI);

mongoose.connection.on('connected', () => console.log("Database is connected"));
mongoose.connection.on('error', (error) => console.log("There is an error :", error));
mongoose.connection.on('disconnected', () => console.log("Database is disconnected"));